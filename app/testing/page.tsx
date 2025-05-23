"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TestingPage() {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null)

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Testing Frameworks</h1>
        </div>
      </div>

      <Tabs defaultValue="usability" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="usability">Usability Testing</TabsTrigger>
          <TabsTrigger value="ab">A/B Testing</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="usability" className="space-y-6">
          {selectedFramework ? (
            <div className="space-y-6">
              <Button variant="outline" onClick={() => setSelectedFramework(null)}>
                Back to Frameworks
              </Button>

              <Card>
                <CardHeader>
                  <CardTitle>Moderated Usability Testing Framework</CardTitle>
                  <CardDescription>A comprehensive guide for conducting moderated usability tests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Overview</h3>
                    <p className="text-sm text-muted-foreground">
                      Moderated usability testing involves observing users as they complete tasks with your product
                      while a facilitator guides the session, asks questions, and provides assistance if needed.
                    </p>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="step1">
                      <AccordionTrigger>1. Planning the Test</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Define Test Objectives</h4>
                          <p className="text-sm text-muted-foreground">
                            Clearly articulate what you want to learn from the test. Example objectives:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Evaluate the ease of completing the checkout process</li>
                            <li>Identify navigation issues in the dashboard</li>
                            <li>Assess the clarity of error messages</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Identify Target Participants</h4>
                          <p className="text-sm text-muted-foreground">
                            Define the characteristics of your ideal test participants based on your user personas.
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Demographics (age, occupation, etc.)</li>
                            <li>Experience level with similar products</li>
                            <li>Specific behaviors or needs relevant to your test</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Create Task Scenarios</h4>
                          <p className="text-sm text-muted-foreground">
                            Develop realistic scenarios that participants will attempt to complete during the test.
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Tasks should be realistic and relevant to actual user goals</li>
                            <li>Avoid giving step-by-step instructions</li>
                            <li>Present tasks in terms of goals, not actions</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="step2">
                      <AccordionTrigger>2. Preparing for the Test</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Create a Test Script</h4>
                          <p className="text-sm text-muted-foreground">
                            Develop a script to ensure consistency across sessions, including:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Introduction and explanation of the test process</li>
                            <li>Consent and recording permissions</li>
                            <li>Task scenarios</li>
                            <li>Post-task and post-test questions</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Set Up Testing Environment</h4>
                          <p className="text-sm text-muted-foreground">
                            Prepare the physical or virtual space where testing will occur:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Test device(s) with the product ready to use</li>
                            <li>Recording equipment/software</li>
                            <li>Note-taking materials</li>
                            <li>Comfortable environment for participants</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Conduct a Pilot Test</h4>
                          <p className="text-sm text-muted-foreground">
                            Run through the entire test with a colleague to identify any issues with:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Task clarity</li>
                            <li>Technical setup</li>
                            <li>Timing</li>
                            <li>Script flow</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="step3">
                      <AccordionTrigger>3. Conducting the Test</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Welcome and Introduction</h4>
                          <p className="text-sm text-muted-foreground">
                            Start by making the participant comfortable and explaining the process:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Thank them for participating</li>
                            <li>Explain the purpose of the test</li>
                            <li>Emphasize that you're testing the product, not them</li>
                            <li>Encourage thinking aloud</li>
                            <li>Obtain consent for recording</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Background Questions</h4>
                          <p className="text-sm text-muted-foreground">
                            Ask brief questions to understand the participant's context:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Relevant experience with similar products</li>
                            <li>Typical goals or tasks they perform</li>
                            <li>Any specific needs or preferences</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Task Completion</h4>
                          <p className="text-sm text-muted-foreground">
                            Guide the participant through each task scenario:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Present one task at a time</li>
                            <li>Encourage thinking aloud throughout</li>
                            <li>Take notes on observations</li>
                            <li>Ask clarifying questions when needed</li>
                            <li>Provide assistance only if absolutely necessary</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Post-Task Questions</h4>
                          <p className="text-sm text-muted-foreground">After each task, ask questions such as:</p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>How easy or difficult was this task to complete?</li>
                            <li>What aspects were confusing or frustrating?</li>
                            <li>How would you expect this feature to work?</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="step4">
                      <AccordionTrigger>4. Analysis and Reporting</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Compile and Organize Data</h4>
                          <p className="text-sm text-muted-foreground">Gather all data from the test sessions:</p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Notes from each session</li>
                            <li>Task completion rates and times</li>
                            <li>Participant quotes and observations</li>
                            <li>Post-task and post-test responses</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Identify Patterns and Issues</h4>
                          <p className="text-sm text-muted-foreground">Look for recurring themes across sessions:</p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Common points of confusion</li>
                            <li>Frequently encountered errors</li>
                            <li>Successful strategies used by participants</li>
                            <li>Unexpected behaviors or workarounds</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Prioritize Issues</h4>
                          <p className="text-sm text-muted-foreground">Categorize issues based on:</p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Severity (critical, major, minor)</li>
                            <li>Frequency of occurrence</li>
                            <li>Impact on user goals</li>
                            <li>Ease of fixing</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Create Actionable Recommendations</h4>
                          <p className="text-sm text-muted-foreground">
                            Develop specific suggestions for improvements:
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
                            <li>Link recommendations to specific issues</li>
                            <li>Provide concrete examples</li>
                            <li>Consider both short-term fixes and long-term solutions</li>
                            <li>Include visual mockups when helpful</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Templates and Resources</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Usability Test Plan Template</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-muted-foreground">
                            A comprehensive template for planning your usability test.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Moderator Script Template</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-muted-foreground">
                            A script template to guide your test sessions consistently.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Participant Consent Form</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-muted-foreground">
                            A template for obtaining proper consent from test participants.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Usability Test Report Template</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-muted-foreground">
                            A structured template for documenting test findings.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedFramework("moderated")}
              >
                <CardHeader>
                  <CardTitle>Moderated Usability Testing</CardTitle>
                  <CardDescription>Facilitated user testing sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A framework for conducting usability tests with a moderator guiding participants through tasks.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">Best for:</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      <li>In-depth qualitative insights</li>
                      <li>Complex products or features</li>
                      <li>Early-stage prototypes</li>
                      <li>Understanding user thought processes</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Framework
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Unmoderated Usability Testing</CardTitle>
                  <CardDescription>Remote self-guided testing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A framework for conducting remote usability tests where participants complete tasks independently.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">Best for:</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      <li>Testing with large sample sizes</li>
                      <li>Geographically dispersed users</li>
                      <li>Simple task completion</li>
                      <li>Quantitative metrics</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Framework
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Guerrilla Usability Testing</CardTitle>
                  <CardDescription>Quick, informal testing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A lightweight approach to gathering quick usability feedback in informal settings.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">Best for:</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      <li>Fast feedback cycles</li>
                      <li>Limited resources</li>
                      <li>Early concept validation</li>
                      <li>Supplementing formal testing</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Framework
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>First-Click Testing</CardTitle>
                  <CardDescription>Initial interaction analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A method for testing where users first click when attempting to complete a specific task.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">Best for:</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      <li>Navigation evaluation</li>
                      <li>Information architecture testing</li>
                      <li>Quick interface assessments</li>
                      <li>Large sample testing</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Framework
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Five-Second Testing</CardTitle>
                  <CardDescription>First impression evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A method where users view a design for five seconds and then answer questions about it.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">Best for:</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      <li>Testing first impressions</li>
                      <li>Evaluating visual hierarchy</li>
                      <li>Assessing clarity of purpose</li>
                      <li>Brand perception testing</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Framework
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Tree Testing</CardTitle>
                  <CardDescription>Information architecture validation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A method for evaluating how easily users can find information in a website's hierarchy.
                  </p>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium">Best for:</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      <li>Navigation structure testing</li>
                      <li>Category naming validation</li>
                      <li>Information organization</li>
                      <li>Findability assessment</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Framework
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="ab" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>A/B Testing Framework</CardTitle>
                <CardDescription>Comparing design variations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A comprehensive framework for setting up and analyzing A/B tests.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Hypothesis formation</li>
                    <li>Test design</li>
                    <li>Sample size calculation</li>
                    <li>Statistical analysis</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Framework
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multivariate Testing</CardTitle>
                <CardDescription>Testing multiple variables</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A framework for testing multiple variables simultaneously to identify optimal combinations.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Variable identification</li>
                    <li>Test design</li>
                    <li>Interaction analysis</li>
                    <li>Results interpretation</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Framework
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Split URL Testing</CardTitle>
                <CardDescription>Testing separate page versions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A framework for testing completely different page versions on separate URLs.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>URL structure planning</li>
                    <li>Traffic allocation</li>
                    <li>Tracking setup</li>
                    <li>Conversion analysis</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Framework
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>WCAG Compliance Testing</CardTitle>
                <CardDescription>Web Content Accessibility Guidelines</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A framework for evaluating compliance with WCAG 2.1 accessibility standards.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Automated testing tools</li>
                    <li>Manual testing procedures</li>
                    <li>Compliance checklists</li>
                    <li>Remediation guidance</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Framework
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Screen Reader Testing</CardTitle>
                <CardDescription>Testing with assistive technology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A framework for testing your product with screen readers and other assistive technologies.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Screen reader setup</li>
                    <li>Test scenarios</li>
                    <li>Common issues checklist</li>
                    <li>Remediation techniques</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Framework
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Keyboard Navigation Testing</CardTitle>
                <CardDescription>Testing non-mouse interaction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A framework for testing keyboard-only navigation and interaction with your product.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium">Includes:</h4>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    <li>Focus order testing</li>
                    <li>Keyboard trap identification</li>
                    <li>Shortcut implementation</li>
                    <li>Visual focus indicators</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Framework
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
