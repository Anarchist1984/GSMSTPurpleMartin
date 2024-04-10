'use client'
import React from "react";
import QuickLinks from "@/app/components/HeaderExtract";

const TestPage = () => {
  return (
    <div className="max-w-3xl">
      <QuickLinks>
        <h1 id="introduction">Introduction</h1>
        <p>
          Welcome to the Test Page! In this page, we'll explore various topics
          related to testing in software development.
        </p>
        <h2 id="types-of-testing">Types of Testing</h2>
        <p>
          Testing in software development can be categorized into several types
          based on the purpose and scope.
        </p>
        <h3 id="unit-testing">Unit Testing</h3>
        <p>
          Unit testing is a level of software testing where individual units or
          components of a software are tested.
        </p>
        <h3 id="integration-testing">Integration Testing</h3>
        <p>
          Integration testing is the phase in software testing in which
          individual software modules are combined and tested as a group.
        </p>
        <h2 id="test-automation">Test Automation</h2>
        <p>
          Test automation is the process of automating the execution of tests,
          usually as part of the software delivery pipeline.
        </p>
      </QuickLinks>
      {/* Additional content for testing without being wrapped by QuickLinks */}
      <h1 id="introduction">Introduction</h1>
      <p>
        Welcome to the Test Page! In this page, we'll explore various topics
        related to testing in software development.
      </p>
      <h2 id="types-of-testing">Types of Testing</h2>
      <p>
        Testing in software development can be categorized into several types
        based on the purpose and scope.
      </p>
      <h3 id="unit-testing">Unit Testing</h3>
      <p>
        Unit testing is a level of software testing where individual units or
        components of a software are tested.
      </p>
      <h3 id="integration-testing">Integration Testing</h3>
      <p>
        Integration testing is the phase in software testing in which
        individual software modules are combined and tested as a group.
      </p>
      <h2 id="test-automation">Test Automation</h2>
      <p>
        Test automation is the process of automating the execution of tests,
        usually as part of the software delivery pipeline.
      </p>
    </div>
  );
};

export default TestPage;
