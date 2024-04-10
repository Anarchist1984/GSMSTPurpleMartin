import React, { useState } from "react";
import Link from "next/link";

const SearchBar = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 mt-20 border border-gray-300 rounded">
      <div className="z-10 p-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-48 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="py-2 px-4 overflow-y-auto pl-16">
        {filteredProjects.map((project, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`projects/id/${project.fileAddress}`} className="text-indigo-600 hover:underline">
                {project.name}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;