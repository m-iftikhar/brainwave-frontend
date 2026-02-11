import React from "react";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient"
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

function App() {
    return (
        <>
         <div className="pt-19 lg:pt-21 overflow-hidden">
       {/* <h1 className="text-3xl font-bold text-white">App</h1> */}
       <Header/>
       <Hero/>
       <Benefits/>
       
       </div>
       
         <ButtonGradient />
          </>
    );
}
export default App;
