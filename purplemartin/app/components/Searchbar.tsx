"use client";
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
    <div className="min-h-screen flex-col bg-transparent pt-20">
      <div className="fixed w-full z-10">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-8 px-4 pt-20 overflow-y-auto">
        {" "}
        {/* Added pt-20 for padding top */}
        <div className="flex flex-wrap -mx-4">
          {filteredProjects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-4 rounded-lg border border-gray-300 bg-white">
                <h2 className="text-xl font-semibold mb-2">
                  <Link
                    href={`projects/id/${project.fileAddress}`}
                    className="text-indigo-600 hover:underline"
                  >
                    {project.name}
                  </Link>
                </h2>
                <div className="mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;