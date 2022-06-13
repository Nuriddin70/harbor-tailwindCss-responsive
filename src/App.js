import React from "react"
import CardPlan from "./components/CardPlan";
import { Comments } from "./components/Comments";
import EmailUs from "./components/EmailUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurApp from "./components/OurApp";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <CardPlan />
      <Comments />
      <EmailUs />
      <OurApp />
    </div>
      
  );
}

export default App;
