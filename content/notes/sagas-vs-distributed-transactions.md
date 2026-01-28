# Why Sagas Beat Distributed Transactions

**Date:** January 2025  
**Read Time:** 8 minutes

## The Problem

You're building a payment system. A user places an order:
1. Reserve inventory
2. Charge payment
3. Create shipment

If step 2 fails, you need to undo step 1. If step 3 fails, you need to refund step 2.

Traditional distributed transactions (2PC) promise atomicity. But they don't scale.

## Why 2PC Fails in Production

**Blocking Protocol**
- Coordinator holds locks during prepare phase
- Single slow participant blocks entire transaction
- Network partition = indefinite blocking

**Availability Trade-off**
- CAP theorem: You can't have consistency + availability during partitions
- 2PC chooses consistency, sacrificing availability
- Real systems need to stay up

**Operational Complexity**
- Requires XA-compatible databases
- Coordinator becomes single point of failure
- Recovery from coordinator failure is non-trivial

## Enter Sagas

A saga is a sequence of local transactions, each with a compensating transaction.

```
Order Saga:
1. Reserve inventory → Cancel reservation
2. Charge payment → Refund payment
3. Create shipment → Cancel shipment
```

If step 3 fails, execute compensations in reverse: cancel shipment, refund payment, cancel reservation.

## Saga Patterns

### Choreography
Services react to events, no central coordinator.

**Pros:**
- No single point of failure
- Services loosely coupled
- Scales horizontally

**Cons:**
- Hard to reason about flow
- Difficult to debug
- Cyclic dependencies possible

### Orchestration
Central coordinator manages saga flow.

**Pros:**
- Clear flow visibility
- Easier debugging
- Explicit state machine

**Cons:**
- Coordinator is critical component
- Services coupled to orchestrator
- Potential bottleneck

## Implementation in Go

```go
type SagaStep struct {
    Execute    func(ctx context.Context) error
    Compensate func(ctx context.Context) error
}

type Saga struct {
    steps []SagaStep
}

func (s *Saga) Execute(ctx context.Context) error {
    executed := []SagaStep{}
    
    for _, step := range s.steps {
        if err := step.Execute(ctx); err != nil {
            // Compensate in reverse order
            for i := len(executed) - 1; i >= 0; i-- {
                if compErr := executed[i].Compensate(ctx); compErr != nil {
                    // Log compensation failure - requires manual intervention
                    log.Error("compensation failed", "error", compErr)
                }
            }
            return err
        }
        executed = append(executed, step)
    }
    
    return nil
}
```

## Handling Compensation Failures

Compensations can fail. This is the hard part.

**Strategies:**
1. **Retry with exponential backoff**
2. **Dead letter queue** for manual intervention
3. **Idempotent compensations** (safe to retry)
4. **Eventual consistency** (accept temporary inconsistency)

## Trade-offs

**Sagas give you:**
- High availability
- Horizontal scalability
- Resilience to partial failures

**But you lose:**
- Immediate consistency (eventual only)
- Isolation (other transactions see intermediate states)
- Simplicity (more complex than ACID)

## When to Use What

**Use 2PC when:**
- Single database, multiple tables
- Strong consistency required
- Low transaction volume
- Controlled environment

**Use Sagas when:**
- Multiple services/databases
- High availability required
- Long-running transactions
- Microservices architecture

## Real-World Example

At scale, payment systems use sagas:
- Stripe: Asynchronous webhooks for state changes
- PayPal: Compensating transactions for refunds
- Square: Event-driven order processing

They accept eventual consistency for availability.

## Conclusion

Distributed transactions are a solved problem in theory. In practice, they don't scale.

Sagas trade consistency for availability. In most systems, that's the right trade-off.

The key insight: **Design for failure, not success.**
