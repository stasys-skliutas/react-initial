import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const StyledImg = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const StyledAppContainer = styled.div`
  text-align: center;

  @media (prefers-reduced-motion: no-preference) {
    ${StyledImg} {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <StyledAppContainer>
      <StyledHeader>
        <StyledImg src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledLink>
      </StyledHeader>
    </StyledAppContainer>
  );
}

export default App;
