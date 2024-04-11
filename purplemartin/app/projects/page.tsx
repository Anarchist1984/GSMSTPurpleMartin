import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";

export default function Home() {
  // Sample list of projects
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

  return (
    <main className="fadeIn min-h-screen bg-gray-100 ">
      <div className=" bg-gray-100">
        <Navbar />
        <SearchBar projects={projects} />
      </div>
    </main>
  );
}
