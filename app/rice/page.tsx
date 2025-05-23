"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download, Plus, Trash } from "lucide-react"
import Link from "next/link"

interface Initiative {
  id: string
  name: string
  reach: number
  impact: number
  confidence: number
  effort: number
  score: number
}

export default function RicePage() {
  const [initiatives, setInitiatives] = useState<Initiative[]>([
    {
      id: "1",
      name: "New user onboarding flow",
      reach: 8,
      impact: 7,
      confidence: 9,
      effort: 5,
      score: 10.08,
    },
    {
      id: "2",
      name: "Dashboard redesign",
      reach: 10,
      impact: 5,
      confidence: 8,
      effort: 7,
      score: 5.71,
    },
    {
      id: "3",
      name: "Mobile app feature parity",
      reach: 6,
      impact: 8,
      confidence: 7,
      effort: 9,
      score: 3.73,
    },
  ])

  const [newInitiative, setNewInitiative] = useState<Omit<Initiative, "id" | "score">>({
    name: "",
    reach: 5,
    impact: 5,
    confidence: 5,
    effort: 5,
  })

  const calculateRICEScore = (reach: number, impact: number, confidence: number, effort: number) => {
    return ((reach * impact * confidence) / effort).toFixed(2)
  }

  const handleAddInitiative = () => {
    const score = Number.parseFloat(
      calculateRICEScore(newInitiative.reach, newInitiative.impact, newInitiative.confidence, newInitiative.effort),
    )

    setInitiatives([
      ...initiatives,
      {
        id: Date.now().toString(),
        ...newInitiative,
        score,
      },
    ])

    setNewInitiative({
      name: "",
      reach: 5,
      impact: 5,
      confidence: 5,
      effort: 5,
    })
  }

  const handleDeleteInitiative = (id: string) => {
    setInitiatives(initiatives.filter((initiative) => initiative.id !== id))
  }

  const sortedInitiatives = [...initiatives].sort((a, b) => b.score - a.score)

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">RICE Prioritization Framework</h1>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Add New Initiative</CardTitle>
              <CardDescription>Score your product initiative using the RICE framework</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Initiative Name</Label>
                <Input
                  id="name"
                  value={newInitiative.name}
                  onChange={(e) => setNewInitiative({ ...newInitiative, name: e.target.value })}
                  placeholder="Enter initiative name"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="reach">Reach (1-10)</Label>
                  <span className="text-sm">{newInitiative.reach}</span>
                </div>
                <Slider
                  id="reach"
                  min={1}
                  max={10}
                  step={1}
                  value={[newInitiative.reach]}
                  onValueChange={(value) => setNewInitiative({ ...newInitiative, reach: value[0] })}
                />
                <p className="text-xs text-muted-foreground">How many users will this impact?</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="impact">Impact (1-10)</Label>
                  <span className="text-sm">{newInitiative.impact}</span>
                </div>
                <Slider
                  id="impact"
                  min={1}
                  max={10}
                  step={1}
                  value={[newInitiative.impact]}
                  onValueChange={(value) => setNewInitiative({ ...newInitiative, impact: value[0] })}
                />
                <p className="text-xs text-muted-foreground">How much will this improve the key metric?</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="confidence">Confidence (1-10)</Label>
                  <span className="text-sm">{newInitiative.confidence}</span>
                </div>
                <Slider
                  id="confidence"
                  min={1}
                  max={10}
                  step={1}
                  value={[newInitiative.confidence]}
                  onValueChange={(value) => setNewInitiative({ ...newInitiative, confidence: value[0] })}
                />
                <p className="text-xs text-muted-foreground">How confident are you in these estimates?</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="effort">Effort (1-10)</Label>
                  <span className="text-sm">{newInitiative.effort}</span>
                </div>
                <Slider
                  id="effort"
                  min={1}
                  max={10}
                  step={1}
                  value={[newInitiative.effort]}
                  onValueChange={(value) => setNewInitiative({ ...newInitiative, effort: value[0] })}
                />
                <p className="text-xs text-muted-foreground">How much effort will this require?</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleAddInitiative} disabled={!newInitiative.name}>
                <Plus className="mr-2 h-4 w-4" />
                Add Initiative
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>About RICE Scoring</CardTitle>
              <CardDescription>Understanding the RICE prioritization framework</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Reach</h3>
                <p className="text-sm text-muted-foreground">How many users will this impact in a given time period?</p>
              </div>
              <div>
                <h3 className="font-medium">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  How much will this impact each user? (1=minimal, 10=massive)
                </p>
              </div>
              <div>
                <h3 className="font-medium">Confidence</h3>
                <p className="text-sm text-muted-foreground">
                  How confident are you in your estimates? (1=low, 10=high)
                </p>
              </div>
              <div>
                <h3 className="font-medium">Effort</h3>
                <p className="text-sm text-muted-foreground">How many person-months will this take? (1=low, 10=high)</p>
              </div>
              <div>
                <h3 className="font-medium">Formula</h3>
                <p className="text-sm text-muted-foreground">RICE Score = (Reach × Impact × Confidence) ÷ Effort</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Prioritized Initiatives</CardTitle>
              <CardDescription>Initiatives ranked by RICE score (higher is better)</CardDescription>
            </CardHeader>
            <CardContent>
              {initiatives.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Initiative</TableHead>
                      <TableHead className="text-center">Reach</TableHead>
                      <TableHead className="text-center">Impact</TableHead>
                      <TableHead className="text-center">Confidence</TableHead>
                      <TableHead className="text-center">Effort</TableHead>
                      <TableHead className="text-center">RICE Score</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedInitiatives.map((initiative) => (
                      <TableRow key={initiative.id}>
                        <TableCell className="font-medium">{initiative.name}</TableCell>
                        <TableCell className="text-center">{initiative.reach}</TableCell>
                        <TableCell className="text-center">{initiative.impact}</TableCell>
                        <TableCell className="text-center">{initiative.confidence}</TableCell>
                        <TableCell className="text-center">{initiative.effort}</TableCell>
                        <TableCell className="text-center font-bold">{initiative.score}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteInitiative(initiative.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <p className="text-muted-foreground">No initiatives added yet.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Add your first initiative using the form on the left.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {initiatives.length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>RICE Score Visualization</CardTitle>
                <CardDescription>Visual representation of your prioritized initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedInitiatives.map((initiative) => (
                    <div key={initiative.id} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{initiative.name}</span>
                        <span className="text-sm font-medium">{initiative.score}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{
                            width: `${(initiative.score / Math.max(...initiatives.map((i) => i.score))) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
