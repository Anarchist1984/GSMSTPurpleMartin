import React, { useState, useEffect } from "react";

const QuickLinks = ({ children }) => {
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

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-10 right-0 z-50 w-48 bg-transparent border border-gray-300 rounded-lg shadow-lg mt-4 mr-4 overflow-hidden">
      <div
        className="overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 3rem)" }}
      >
        {headings.map((heading, index) => (
          <div key={index} className="p-4 border-b border-gray-200">
            <button
              onClick={() => handleClick(heading.id)}
              className="block w-full text-left text-indigo-600 hover:underline"
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
