import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/content/resume";

export default function ResumePage() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="panel-surface section-shell surface-grid px-6 py-8 md:px-10 md:py-10">
          <p className="section-kicker mb-4">Resume</p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold md:text-5xl">{resumeData.name}</h1>
              <p className="text-lg text-muted-foreground">{resumeData.title}</p>
            </div>

            <div className="flex flex-wrap gap-2">
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
                <a href={resumeData.cvUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" /> Open CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={resumeData.cvUrl} download={resumeData.cvFileName}>
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="/">Back to Portfolio</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_360px]">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-5">
                <h2 className="text-xl font-semibold">CV Preview</h2>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={resumeData.cvUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Open in New Tab
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={resumeData.cvUrl} download={resumeData.cvFileName}>
                      <Download className="h-4 w-4" /> Download PDF
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-black/15">
                <iframe
                  src={`${resumeData.cvUrl}#view=FitH`}
                  title={`${resumeData.name} CV`}
                  className="h-[880px] w-full"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card>
              <CardContent className="space-y-7 p-7">
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
                  <h2 className="mb-3 text-xl font-semibold">Contact</h2>
                  <p className="text-muted-foreground">Email: {resumeData.email}</p>
                  <p className="text-muted-foreground">Location: {resumeData.location}</p>
                </section>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-7">
                <section>
                  <h2 className="mb-3 text-xl font-semibold">Technical Skills</h2>
                  <div className="space-y-5">
                    <div>
                      <h3 className="mb-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                        Core Backend
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {resumeData.strengths.coreBackend.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                        Supporting Product Delivery
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {resumeData.strengths.supportingProductDelivery.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                        Engineering Focus
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {resumeData.strengths.engineeringFocus.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardContent className="space-y-5 p-7 md:p-8">
            <section>
              <h2 className="mb-3 text-xl font-semibold">Selected Projects</h2>
              <div className="grid gap-5 lg:grid-cols-2">
                {resumeData.selectedProjects.map((project) => (
                  <article key={project.name} className="panel-surface rounded-[24px] p-5">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
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
                    <ul className="mt-4 space-y-2">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-[8px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
