'use client'
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  MoreVertical,
  Search,
  Truck,

} from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent,TooltipProvider } from "@/components/ui/tooltip"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { collection, addDoc, getDocs } from "firebase/firestore"

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
import { useEffect } from "react"


import { useRouter } from 'next/navigation'; // Importing useRouter hook for redirection
import Link from "next/link"


export default function FormDashboard() {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initializing useRouter hook

  const createNewForm = async () => {
    setLoading(true);
    try {
      const currentDate = new Date();
      const docRef = await addDoc(collection(db, "forms"), {
        name: null,
        author:null,
        description:null,
        status:"Draft", // Adding a new document with a "name" field set to null
        created:currentDate,
        email:null,
      });
      const formId = docRef.id; // Get the ID of the newly created document
      // Redirecting to a new URL with the form ID included as a parameter
      router.push(`/accounts/team-leader/forms/form?search=${formId}`);
    } catch (error) {
      console.error('Error creating form:', error);
      alert('An error occurred while creating the form. Please try again.');
    }
    setLoading(false);
  };

  const [forms, setForms] = useState([]); // State to store forms data
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  // Function to fetch forms data from Firestore
  const fetchForms = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "forms"));
      const formsData = [];
      querySnapshot.forEach((doc) => {
        formsData.push({
          id: doc.id,
          ...doc.data(),
          created: doc.data().created.toDate().toLocaleDateString()
        });
      });
      setForms(formsData); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching forms: ", error);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  // Function to filter forms based on search term
  const filteredForms = forms.filter((form) =>
    (
      (form.name && form.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (form.author && form.author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (form.status && form.status.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (form.created && form.created.includes(searchTerm))
    )
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Your Forms</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Forms Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                <Button onClick={createNewForm} disabled={loading}>
                  {loading ? 'Creating...' : 'Create New Form'}
                </Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>This Week</CardDescription>
                  <CardTitle className="text-4xl">249</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% from last week
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={25} aria-label="25% increase" />
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className="text-4xl">539</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="week">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                
              </div>
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Forms</CardTitle>
                    <CardDescription>
                      Recently submitted forms from your team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Form Name</TableHead>
                          
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                        
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell>5/9/2024 PM Survey</TableCell>
                          
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell>5/9/2024 PM Survey</TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          
                        </TableRow>
                        
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="month">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Forms</CardTitle>
                    <CardDescription>
                      Submitted forms from this month from your team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Form Name</TableHead>
                          
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                        
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell>5/9/2024 PM Survey</TableCell>
                          
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell>5/9/2024 PM Survey</TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          
                        </TableRow>
                        
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="year">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>Forms</CardTitle>
                    <CardDescription>
                      Submitted forms from this year from your team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Form Name</TableHead>
                          
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                        
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell>5/9/2024 PM Survey</TableCell>
                          
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div>
                          </TableCell>
                          <TableCell>5/9/2024 PM Survey</TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-24
                          </TableCell>
                          
                        </TableRow>
                        
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
          <Card className="overflow-hidden">
      <CardHeader className="items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Recently Created Forms
          </CardTitle>
        </div>
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </CardHeader>
      <CardContent className="p-6 text-sm">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead className="hidden sm:table-cell">Author</TableHead>
        <TableHead className="hidden sm:table-cell">Status</TableHead>
        <TableHead className="hidden sm:table-cell">Created</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {filteredForms.map((form) => (
        <TooltipProvider key={form.id}>
          <Tooltip>
              <TableRow>
                <TableCell><TooltipTrigger><Link href={`/accounts/team-leader/forms/form?search=${form.id}`}>{form.name}</Link></TooltipTrigger></TableCell>
                <TableCell className="hidden sm:table-cell"><TooltipTrigger>
                <Link href={`/accounts/team-leader/forms/form?search=${form.id}`}>
                  <div className="font-medium">{form.author}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {form.email}
                    
                  </div>
                  </Link>
                  </TooltipTrigger>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <TooltipTrigger>
                  <Link href={`/accounts/team-leader/forms/form?search=${form.id}`}>
                  <Badge className="text-xs" variant="secondary">
                    {form.status}
                  </Badge>
                  </Link>
                  </TooltipTrigger>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <TooltipTrigger>
                  <Link href={`/accounts/team-leader/forms/form?search=${form.id}`}>
                  {form.created}
                  </Link>
                  </TooltipTrigger>
                </TableCell>
              </TableRow>
            <TooltipContent side="right">
                <p>Edit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </TableBody>
  </Table>
</CardContent>


    </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
