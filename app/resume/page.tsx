import { resumeData } from "@/content/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <main className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Resume</p>
          <h1 className="text-3xl font-semibold md:text-5xl">{resumeData.name}</h1>
          <p className="text-lg text-muted-foreground">{resumeData.title}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button asChild>
              <a href={`mailto:${resumeData.email}`}>Email</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/">Back to Portfolio</a>
            </Button>
          </div>
        </section>

        <Card>
          <CardContent className="space-y-7 p-7 md:p-8">
            <section>
              <h2 className="mb-2 text-xl font-semibold">Professional Summary</h2>
              <p className="text-muted-foreground">{resumeData.summary}</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Education</h2>
              <div className="space-y-2">
                {resumeData.education.map((edu) => (
                  <div key={edu.institution} className="text-muted-foreground">
                    <p className="font-medium text-foreground">{edu.program}</p>
                    <p>
                      {edu.institution} - {edu.status}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Selected Projects</h2>
              <div className="space-y-5">
                {resumeData.selectedProjects.map((project) => (
                  <article key={project.name} className="rounded-md border border-border p-4">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-medium">{project.name}</h3>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Repository
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <ul className="mt-3 space-y-1">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Technical Skills</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h3 className="mb-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    Used in projects
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {resumeData.strengths.usedInProjects.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    Comfortable with
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {resumeData.strengths.comfortableWith.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    Currently learning
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {resumeData.strengths.currentlyLearning.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold">Contact</h2>
              <p className="text-muted-foreground">Email: {resumeData.email}</p>
              <p className="text-muted-foreground">Location: {resumeData.location}</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
