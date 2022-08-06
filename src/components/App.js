import React, {useState} from "react";

import UpperNavbar from "./nav/UpperNavbar";
import SPIKEImg from "./SPIKEImg";
import Homepage from "./home/Homepage";
import GettingStarted from "./getting_started/GettingStarted";
import ModulesMenu from "./modules/ModulesMenu";
import Examples from "./examples/Examples";
import Constants from "./constants/Constants";

// App.js
// Overall Structure of Documentation Site (Virtual DOM)

// Current Page Names
// - Home
// - GettingStarted
// - Modules
// - Constants

function App() {

    const [currentPage, setCurrentPage] = useState("Home");

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-no-repeat min-h-screen"> 
            <div className="p-3">
                <UpperNavbar
                    setCurrentPage={setCurrentPage}
                />
            </div>
            
            <div className={currentPage === "Home" ? "overflow-x-hidden" : "hidden"}>
                <SPIKEImg />
                <Homepage
                    setCurrentPage={setCurrentPage}
                />
            </div>

            <div className={currentPage === "GettingStarted" ? "overflow-x-hidden" : "hidden"}>
                <GettingStarted
                    
                />
            </div>
        
            <div className={currentPage.includes("Modules") ? "overflow-x-hidden" : "hidden"}>
                <ModulesMenu
                    setCurrentPage={setCurrentPage} 
                    currentPage={currentPage}
                />
            </div>

            <div className={currentPage.includes("Constants") ? "overflow-x-hidden" : "hidden"}>
                <Constants />
            </div>

            <div className={currentPage.includes("Examples") ? "overflow-x-hidden" : "hidden"}>
                <Examples />
            </div>
        </div>
    );
}

export default App;
