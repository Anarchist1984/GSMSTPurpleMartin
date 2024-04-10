import React, { useState } from "react";
import Link from "next/link";

const SearchBar = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="fixed top-10 left-0 z-50 w-64 bg-transparent border border-gray-300 rounded-lg shadow-lg mt-4 mr-4 overflow-hidden">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div
        className="overflow-y-auto"
        style={{ height: "calc(120vh - 10rem)" }}
      >
        {filteredProjects.map((project, index) => (
          <div key={index} className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold mb-2">
              <Link
                href={`/projects/id/${project.fileAddress}`}
                className="text-indigo-600 hover:underline"
              >
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
