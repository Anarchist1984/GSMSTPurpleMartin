"use client";
import Navbar from "@/app/components/Navbar";
import NavbarSm from "@/app/components/CollapsedNavbar";
import SearchBar from "@/app/components/SearchbarShort";
import SearchBarShortSm from "@/app/components/SearchbarShortSm";
import '@/app/components/components.css';

export default function ProjectsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const projects = [
    {
      name: "Project1",
      description: "Description for Project1",
      fileAddress: "/project1",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      name: "Project2",
      description: "Description for Project2",
      fileAddress: "/project2",
      tags: ["Node.js", "Express", "Backend"],
    },
    {
      name: "Project3",
      description: "Description for Project3",
      fileAddress: "/project3",
      tags: ["Python", "Django", "Backend"],
    },
    {
      name: "Project4",
      description: "Description for Project4",
      fileAddress: "/project4",
      tags: ["Vue.js", "JavaScript", "Frontend"],
    },
    {
      name: "Project5",
      description: "Description for Project5",
      fileAddress: "/",
      tags: ["React Native", "JavaScript", "Mobile"],
    },
    {
      name: "Project6",
      description: "Description for Project6",
      fileAddress: "/project6",
      tags: ["Java", "Spring Boot", "Backend"],
    },
    {
      name: "Project6",
      description: "Description for Project6",
      fileAddress: "/project6",
      tags: ["Java", "Spring Boot", "Backend"],
    },
    {
      name: "Project6",
      description: "Description for Project6",
      fileAddress: "/project6",
      tags: ["Java", "Spring Boot", "Backend"],
    },
    {
      name: "Project6",
      description: "Description for Project6",
      fileAddress: "/project6",
      tags: ["Java", "Spring Boot", "Backend"],
    },
    {
      name: "Project6",
      description: "Description for Project6",
      fileAddress: "/project6",
      tags: ["Java", "Spring Boot", "Backend"],
    },
    // Add more projects here if needed
  ];

// ...

return (
  <section className='fadeIn' style={{ backgroundImage: 'url(/ProjectsBackground.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
    <Navbar />
    <NavbarSm />
    <div className="flex">
      <SearchBarShortSm projects={projects} />
      <div className="pt-20 pl-72">{children}</div>
      <div>
      </div>
    </div>
  </section>
);
}
