import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Search } from "lucide-react"
import Link from "next/link"

export default function ResearchPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Research Repository</h1>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search methods..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="qualitative" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="qualitative">Qualitative Research</TabsTrigger>
          <TabsTrigger value="quantitative">Quantitative Research</TabsTrigger>
          <TabsTrigger value="templates">Templates & Guides</TabsTrigger>
        </TabsList>

        <TabsContent value="qualitative" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>User Interviews</CardTitle>
                <CardDescription>One-on-one conversations with users</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  In-depth conversations with users to understand their needs, behaviors, and pain points.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Early discovery phase</li>
                    <li>Understanding user needs</li>
                    <li>Validating problem statements</li>
                    <li>Getting feedback on concepts</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contextual Inquiry</CardTitle>
                <CardDescription>Observing users in their environment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Observing and interviewing users in their own environment as they work with your product.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Understanding real-world usage</li>
                    <li>Identifying environmental factors</li>
                    <li>Discovering workarounds</li>
                    <li>Validating assumptions</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus Groups</CardTitle>
                <CardDescription>Moderated group discussions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Facilitated discussions with groups of users to gather insights and feedback.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Exploring group dynamics</li>
                    <li>Gathering diverse perspectives</li>
                    <li>Brainstorming ideas</li>
                    <li>Validating concepts</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Diary Studies</CardTitle>
                <CardDescription>Longitudinal user documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Users document their experiences with a product over time through journals or logs.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Understanding long-term usage</li>
                    <li>Identifying patterns over time</li>
                    <li>Capturing real-world contexts</li>
                    <li>Studying infrequent behaviors</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card Sorting</CardTitle>
                <CardDescription>Information architecture research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Users organize topics into categories to help design intuitive information architecture.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Designing navigation</li>
                    <li>Organizing content</li>
                    <li>Creating taxonomies</li>
                    <li>Understanding mental models</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usability Testing</CardTitle>
                <CardDescription>Evaluating product usability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Observing users as they complete tasks with your product to identify usability issues.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Evaluating designs</li>
                    <li>Identifying usability issues</li>
                    <li>Validating solutions</li>
                    <li>Benchmarking performance</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="quantitative" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Surveys</CardTitle>
                <CardDescription>Collecting structured feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Structured questionnaires to collect data from a large number of users.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Gathering large-scale feedback</li>
                    <li>Measuring satisfaction</li>
                    <li>Validating hypotheses</li>
                    <li>Segmenting user groups</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>A/B Testing</CardTitle>
                <CardDescription>Comparing design variations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comparing two versions of a design to determine which performs better.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Optimizing conversion rates</li>
                    <li>Testing design changes</li>
                    <li>Validating hypotheses</li>
                    <li>Making data-driven decisions</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Analyzing user behavior data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Collecting and analyzing data about how users interact with your product.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Tracking user behavior</li>
                    <li>Identifying patterns</li>
                    <li>Measuring performance</li>
                    <li>Detecting issues</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heatmaps</CardTitle>
                <CardDescription>Visualizing user interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visual representations of where users click, move, and scroll on your product.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Understanding engagement</li>
                    <li>Identifying popular elements</li>
                    <li>Optimizing layouts</li>
                    <li>Finding usability issues</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benchmarking</CardTitle>
                <CardDescription>Comparative performance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comparing your product's performance against competitors or industry standards.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Setting performance goals</li>
                    <li>Identifying competitive gaps</li>
                    <li>Measuring improvements</li>
                    <li>Justifying investments</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funnel Analysis</CardTitle>
                <CardDescription>Conversion path optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyzing user progression through a series of steps toward a goal.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">When to use:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Optimizing conversion rates</li>
                    <li>Identifying drop-off points</li>
                    <li>Improving user flows</li>
                    <li>Measuring process efficiency</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Method Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Interview Guide Template</CardTitle>
                <CardDescription>Structure for user interviews</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A comprehensive template for planning and conducting effective user interviews.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Introduction script</li>
                    <li>Question framework</li>
                    <li>Probing techniques</li>
                    <li>Note-taking format</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Survey Design Guide</CardTitle>
                <CardDescription>Best practices for surveys</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Guidelines and templates for creating effective surveys that yield actionable insights.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Question types</li>
                    <li>Scale design</li>
                    <li>Bias prevention</li>
                    <li>Sample survey templates</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usability Test Plan</CardTitle>
                <CardDescription>Framework for testing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A comprehensive template for planning and conducting usability testing sessions.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Test objectives</li>
                    <li>Participant criteria</li>
                    <li>Task scenarios</li>
                    <li>Data collection methods</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Report Template</CardTitle>
                <CardDescription>Standardized reporting format</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A structured template for documenting and sharing research findings.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Executive summary</li>
                    <li>Methodology section</li>
                    <li>Findings organization</li>
                    <li>Recommendation format</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Persona Template</CardTitle>
                <CardDescription>User archetype framework</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A template for creating detailed user personas based on research findings.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Demographic information</li>
                    <li>Goals and motivations</li>
                    <li>Pain points and needs</li>
                    <li>Behavioral patterns</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Journey Mapping Template</CardTitle>
                <CardDescription>User experience visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A framework for mapping the user's journey through your product or service.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Journey stages</li>
                    <li>User actions and thoughts</li>
                    <li>Emotional mapping</li>
                    <li>Opportunity identification</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
