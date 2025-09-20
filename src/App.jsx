import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Alert from "./components/Alert";
import Content from "./components/Content";
import Services from "./components/Services.jsx";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ.jsx";
import Team from "./components/Team.jsx";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Alert />
      <Content />
      <Services />
      <Footer />
      <FAQ/>
      <CTA />
      <Team/>
    </div>
  );
}

export default App;
