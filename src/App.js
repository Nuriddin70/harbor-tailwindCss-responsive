import React from "react"
import CardPlan from "./components/CardPlan";
import { Comments } from "./components/Comments";
import EmailUs from "./components/EmailUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <CardPlan />
      <Comments />
      <EmailUs />
    </div>
      
  );
}

export default App;
