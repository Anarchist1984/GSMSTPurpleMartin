import React, { useState } from "react";
import Link from "next/link";
import "./components.css";

const SearchBar = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setShowResults(value.length >= 3);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-20">
      <div className="w-2/3 md:w-2/3 lg:w-1/2 bg-white-50 opacity-100 border-r border-gray-300 rounded-lg shadow-lg mt-4 overflow-hidden backdrop-blue-xl backdrop-blur-3xl slide-in-left">
        <div className="p-4">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 hover:border-indigo-500 transition-colors"
          />
        </div>
        {showResults && (
          <div className="overflow-y-auto" style={{ maxHeight: "calc(120vh - 20rem)" }}>
            {filteredProjects.map((project, index) => (
              <div key={index} className={`p-0.5 pl-3 ${index === filteredProjects.length - 1 ? 'pb-8' : ''}`}>
                <h2 className="text-md font-semibold mb-2 flex items-center transform transition-transform duration-500 hover:scale-105 hover:shadow-lg p-0.5 pl-1 pr-2 underline-right">
                  <div className="icon-placeholder mr-2">Icon</div>
                  <Link
                    href={`/projects/id/${project.fileAddress}`}
                    className="text-indigo-600 transition-all duration-500"
                  >
                    {project.name}
                  </Link>
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
