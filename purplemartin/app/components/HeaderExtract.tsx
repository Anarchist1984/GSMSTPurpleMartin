import React, { useState, useEffect } from "react";
import "./components.css";

/**
 * QuickLinks component
 * 
 * This component extracts headings from its children and creates a quick navigation menu.
 * Each heading becomes a clickable link that scrolls to the corresponding section in the page.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The children elements of the component.
 */
const QuickLinks = ({ children }) => {
  // State to hold the extracted headings
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Extract headings from children
    const headingsArray = [];
    React.Children.forEach(children, (child) => {
      if (child.props && child.props.id && child.type && child.type.match(/^h[1-6]$/)) {
        headingsArray.push({
          id: child.props.id,
          text: child.props.children,
          level: parseInt(child.type.charAt(1))
        });
      }
    });
    setHeadings(headingsArray);
  }, [children]);

  /**
   * Handles the click event on a heading link.
   * Scrolls to the corresponding section in the page.
   * 
   * @param {string} id - The id of the heading element to scroll to.
   */
  const handleClick = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = 75; //Adjust to account for navbar height
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed top-12 right-1 z-50 w-64 bg-white-50 opacity-100 border-r border-gray-300 rounded-lg shadow-lg mt-4 mr-4 overflow-hidden backdrop-blue-xl">
      <div className="p-4 bg-gray-200 bg-opacity-50 text-lg font-semibold border-b border-gray-300">
        On This Page
      </div>
      <div
        className="overflow-y-auto pt-3"
        style={{ maxHeight: "calc(120vh - 10rem)" }}
      >
        {headings.map((heading, index) => (
          <div 
            key={index} 
            style={{ paddingLeft: `${heading.level}rem` }} 
            className={`fadeIn ${index === headings.length - 1 ? 'pb-8' : ''}`}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className="text-md font-semibold mb-2 flex items-center transform hover:scale-105 hover:shadow-lg p-0.5 pl-1 pr-2 underline-right text-indigo-600 transition-all duration-500"
            >
              {heading.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;