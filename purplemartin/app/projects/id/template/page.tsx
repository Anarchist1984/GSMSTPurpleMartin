'use client'
import React from "react";
import QuickLinks from "@/app/components/HeaderExtract";
import "../projects.css"
import Image from "next/image";

//This is a template page for the project page, add this to the opened url of the website to view 
//this page: projects/id/template

//Make sure to add this to the list in the page.tsx and layout.tsx file in the format given to properly 
//link to these pages

const TestPage = () => {
    return (
        <div className="max-w-3xl">
            <QuickLinks>
                <h1 id="introduction">Header 1</h1>
                {/* This is the quicklinks on this page scroll feature to use make sure the id 
                and header notation match that of the HTML you want to scroll to and add the name in 
                between the brackets */}
                <h2 id="types-of-testing">Header 2</h2>
                <h3 id="unit-testing">Header 3</h3>
            </QuickLinks>

            <div className="fadeIn">
            <h1 className="H1" id="introduction">Introduction</h1>
            {/* This is the header 1, which has a custom style, make sure to add the className="H1"
            to inherit that style
            H2 to H4 and Paragraph (P) also have such styling make sure to add their classNames  */}
            <p className="P"></p>
            <h2 className="H2" id="types-of-testing">Types of Testing</h2>
            <div className="flex justify-center items-center h-screen">
            <Image className='justify-self-center' src='/HomePagePurpleMartin.png' alt="Purple Martin" width={1000} height={600}/>
            {/* This is the image component, make sure to add the image to the public folder, 
            link it add alternating text and set the width to 1000 always */}
            </div>
            <p className="P"></p>
            <h3 className="H3" id="unit-testing">Unit Testing</h3>
            <p className="P"></p>
            </div>
        </div>
    );
};

export default TestPage;
