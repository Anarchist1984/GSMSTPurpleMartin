'use client'
import { ChevronLeft, PlusCircle, Search } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { db } from "@/app/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Form() {
  const [questions, setQuestions] = useState([]);
  const [status, setStatus] = useState("Draft");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  // Function to save form data to Firebase
  const saveFormData = async () => {
    try {
      // Check if search parameter is present
      if (search) {
        // Get reference to the 'forms' collection in Firebase
        const formRef = doc(db, "forms", search);
        // Collect form data
        const formData = {
          name: (document.getElementById("name") as HTMLInputElement)?.value || "",
          description: (document.getElementById("description") as HTMLInputElement)?.value || "",
          questions: questions.map((question, index) => ({
            id: index + 1,
            question: (document.getElementById(`question_${index}`) as HTMLInputElement)?.value || "",
            inputType: (document.getElementById(`input_type_${index}`) as HTMLInputElement)?.value || "",
          })),
          status: status, // Update status
        };
        // Update document in Firebase
        await updateDoc(formRef, formData);
        console.log("Form data saved successfully!");
      } else {
        console.error("No search parameter found!");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  // Function to add a new question
  const addQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1 }]);
  };

  useEffect(() => {
    addQuestion();
  }, []);

  // Function to handle status change
  const handleStatusChange = (newStatus:string) => {
    setStatus(newStatus);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <Link href="/accounts/admin/forms">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Link>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">New Form</h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button size="sm" onClick={saveFormData}>
                  Save Form
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Form Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" className="w-full" defaultValue="Gamer Gear Pro Controller" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Questions</CardTitle>
                    <CardDescription>Add questions for your users to answer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">#</TableHead>
                          <TableHead className="w-[100px]">Question</TableHead>
                          <TableHead className="w-[100px]">Input</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {questions.map((question, index) => (
                          <TableRow key={question.id}>
                            <TableCell className="font-semibold">Question {index + 1}</TableCell>
                            <TableCell>
                              <Textarea id={`question_${index}`} defaultValue="" className="min-h-32" />
                            </TableCell>
                            <TableCell>
                              <Select id={`input_type_${index}`}>
                                <SelectTrigger className="">
                                  <SelectValue placeholder="Input Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="text">Text</SelectItem>
                                  <SelectItem value="checkbox">Checkbox</SelectItem>
                                  <SelectItem value="number">Number</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1" onClick={addQuestion}>
                      <PlusCircle className="h-3.5 w-3.5" />
                      Add Question
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Form Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className="grid gap-6">
  <div className="grid gap-3">
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="">
          <div className="cursor-pointer bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center">
            <span>{status}</span>
            <svg
              className="h-5 w-5 ml-2 text-gray-600 right-0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Status</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleStatusChange("draft")}>Draft</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStatusChange("published")}>Published</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStatusChange("archived")}>Archived</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</div>

                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Assign</CardTitle>
                    <CardDescription>Assign this form to specific teams</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative ml-auto flex-1 md:grow-0">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search Teams"
                        className="w-full rounded-lg bg-background pl-8"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Form</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
