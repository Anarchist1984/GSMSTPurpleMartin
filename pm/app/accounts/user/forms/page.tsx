'use client'
import {
  Search,

} from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent,TooltipProvider } from "@/components/ui/tooltip"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { db } from "@/app/firebase"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Link from "next/link"


export default function FormDashboard() {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8">
          <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Forms</CardTitle>
                    <CardDescription>
                      Forms you still need to submit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Form Name</TableHead>
                          <TableHead>Assigned By</TableHead>
                          
                          <TableHead className="hidden md:table-cell">
                            Due Date
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Assigned To
                          </TableHead>
                        
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          
                          <TableCell>5/9/2024 PM Intial Survey</TableCell>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
        <Badge className="text-xs" variant="outline">
          George Mathew
        </Badge>
        <Badge className="text-xs" variant="outline">
          Valentina Munoz-Baccadre
        </Badge>
        <Badge className="text-xs" variant="outline">
          Pritika Yadav
        </Badge>
      </TableCell>
                        </TableRow>
                        
                        
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
          </div>
          <div>
          </div>
        </main>
      </div>
    </div>
  )
}
