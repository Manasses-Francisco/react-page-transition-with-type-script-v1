import React from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";

import styled from "styled-components";

import { AnimatePresence } from "framer-motion";

const Section=styled.section`
  overflow-x:hidden;
`;

function App() {

 const location=useLocation();

  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AnimatePresence>
    </Section>
  );
}

export default App;
