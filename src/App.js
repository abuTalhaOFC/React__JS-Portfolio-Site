import React from "react";
import {
  About,
  Contact,
  Experience, Footer,
  Header,
  Nav,
  Portfolio, Services, Testimonial
} from "./components/index";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
