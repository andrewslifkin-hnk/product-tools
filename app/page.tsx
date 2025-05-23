import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Clipboard, FileText, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-semibold">
            <Clipboard className="h-5 w-5" />
            <span>Product Tools Hub</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/rice"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              RICE Scoring
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Research Methods
            </Link>
            <Link
              href="/testing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testing Frameworks
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Streamline your product workflows
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              A centralized hub for product teams to align on prioritization, research, and testing methodologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/rice">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>RICE Prioritization</CardTitle>
                <CardDescription>Score and prioritize product initiatives using the RICE framework.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Calculate Reach, Impact, Confidence, and Effort scores to make data-driven decisions.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/rice">Open RICE Calculator</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Research Repository</CardTitle>
                <CardDescription>Access proven user research methodologies and templates.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Browse a curated collection of research methods, interview guides, and analysis frameworks.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/research">Explore Research Methods</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Testing Frameworks</CardTitle>
                <CardDescription>Standardize your approach to user testing and validation.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access templates for usability testing, A/B testing, and other validation methods.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/testing">View Testing Frameworks</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why use Product Tools Hub?
              </h2>
              <p className="max-w-[85%] text-muted-foreground sm:text-lg">
                Our platform helps product teams align on methodologies and make better decisions.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Consistent Prioritization</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure all teams use the same criteria when prioritizing work.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Research Alignment</h3>
                <p className="text-sm text-muted-foreground">
                  Access a shared repository of research methods and findings.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Standardized Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Use consistent frameworks for validating product decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Product Tools Hub. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">For internal use only</p>
        </div>
      </footer>
    </div>
  )
}
