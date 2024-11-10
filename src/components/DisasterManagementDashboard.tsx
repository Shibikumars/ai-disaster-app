'use client'

import { useState } from 'react'
import { AlertTriangle, Box, MapPin, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DisasterManagementDashboard() {
  const [predictionResult, setPredictionResult] = useState<string | null>(null)
  const [resourceAllocation, setResourceAllocation] = useState<string | null>(null)
  const [evacuationRoute, setEvacuationRoute] = useState<string | null>(null)
  const [updates, setUpdates] = useState<string[]>([])

  const handleDisasterPrediction = () => {
    // Simulating AI prediction
    setPredictionResult("High risk of flooding in the next 48 hours. Prepare for evacuation.")
  }

  const handleResourceAllocation = () => {
    // Simulating AI-assisted resource allocation
    setResourceAllocation("Recommended allocation: 60% to flood barriers, 30% to emergency shelters, 10% to medical supplies.")
  }

  const handleEvacuationPlanning = () => {
    // Simulating AI-generated evacuation route
    setEvacuationRoute("Optimal evacuation route: Take Highway 101 North to the designated safe zone at Mountain View High School.")
  }

  const handleUpdate = (update: string) => {
    setUpdates(prev => [...prev, update])
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI-Assisted Disaster Management Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Disaster Prediction</CardTitle>
            <CardDescription>AI-powered disaster risk assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleDisasterPrediction} className="w-full mb-4">
              <AlertTriangle className="mr-2 h-4 w-4" /> Run Prediction
            </Button>
            {predictionResult && (
              <p className="text-red-600 font-semibold">{predictionResult}</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Allocation Assistant</CardTitle>
            <CardDescription>AI recommendations for optimal resource distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleResourceAllocation} className="w-full mb-4">
              <Box className="mr-2 h-4 w-4" /> Get Allocation Suggestion
            </Button>
            {resourceAllocation && (
              <p className="text-green-600">{resourceAllocation}</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Evacuation Route Planner</CardTitle>
            <CardDescription>AI-optimized evacuation routes</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleEvacuationPlanning} className="w-full mb-4">
              <MapPin className="mr-2 h-4 w-4" /> Plan Evacuation Route
            </Button>
            {evacuationRoute && (
              <p className="text-blue-600">{evacuationRoute}</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Real-time Updates</CardTitle>
            <CardDescription>Latest information and AI-processed updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Select onValueChange={handleUpdate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select update type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Weather alert">Weather alert</SelectItem>
                    <SelectItem value="Road closure">Road closure</SelectItem>
                    <SelectItem value="Shelter status">Shelter status</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Enter update details" onKeyPress={(e) => e.key === 'Enter' && handleUpdate(e.currentTarget.value)} />
              </div>
              <div className="h-40 overflow-y-auto border rounded p-2">
                {updates.map((update, index) => (
                  <p key={index} className="mb-2">
                    <MessageSquare className="inline mr-2 h-4 w-4" />
                    {update}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}