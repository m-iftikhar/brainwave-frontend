import React from "react";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient"

function App() {
    return (
        <>
         <div className="pt-19 lg:pt-21 overflow-hidden">
       {/* <h1 className="text-3xl font-bold text-white">App</h1> */}
       <Header/>
       </div>
       
         <ButtonGradient />
          </>
    );
}
export default App;
