package main

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

type HealthResponse struct {
	Status    string    `json:"status"`
	Timestamp time.Time `json:"timestamp"`
	Version   string    `json:"version"`
}

type SystemMetrics struct {
	RequestsPerSecond float64 `json:"requests_per_second"`
	AvgLatencyMs      float64 `json:"avg_latency_ms"`
	ErrorRate         float64 `json:"error_rate"`
	Uptime            string  `json:"uptime"`
}

func main() {
	router := gin.Default()

	// CORS configuration
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000", "https://your-domain.vercel.app"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Health check endpoint
	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, HealthResponse{
			Status:    "healthy",
			Timestamp: time.Now(),
			Version:   "1.0.0",
		})
	})

	// Demo metrics endpoint
	router.GET("/api/metrics", func(c *gin.Context) {
		c.JSON(200, SystemMetrics{
			RequestsPerSecond: 1250.5,
			AvgLatencyMs:      45.2,
			ErrorRate:         0.02,
			Uptime:            "99.98%",
		})
	})

	// Demo systems endpoint
	router.GET("/api/systems", func(c *gin.Context) {
		systems := []map[string]interface{}{
			{
				"id":     "payment-system",
				"name":   "Distributed Payment Processing",
				"status": "operational",
				"metrics": map[string]interface{}{
					"throughput": "5000 tx/s",
					"latency_p99": "800ms",
					"uptime": "99.95%",
				},
			},
			{
				"id":     "delivery-platform",
				"name":   "P2P Delivery Platform",
				"status": "operational",
				"metrics": map[string]interface{}{
					"active_deliveries": 1250,
					"avg_delivery_time": "28min",
					"uptime": "99.92%",
				},
			},
		}
		c.JSON(200, systems)
	})

	log.Println("Server starting on :8080")
	if err := router.Run(":8080"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
