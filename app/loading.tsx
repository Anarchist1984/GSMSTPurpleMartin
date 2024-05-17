'use client'
import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Keyframe animation for the spinner
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner
const Spinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: #333;
  height: 40px;
  width: 40px;
  animation: ${spin} 1s linear infinite;
`;

// Styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Loading component
const Loading: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;
