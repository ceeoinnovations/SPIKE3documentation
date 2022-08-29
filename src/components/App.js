import React, {useState} from "react";

import UpperNavbar from "./nav/UpperNavbar";
import SPIKEImg from "./SPIKEImg";
import Homepage from "./home/Homepage";
import GettingStarted from "./getting_started/GettingStarted";
import ModulesMenu from "./modules/ModulesMenu";
import Examples from "./examples/Examples";
import Constants from "./constants/Constants";
import Disclaimer from "./Disclaimer";
import Setup from "./setup_hub/Setup";

// App.js
// Overall Structure of Documentation Site (Virtual DOM)

// Current Page Names
// - Home
// - GettingStarted
// - Modules
// - Constants

// TODO: Fix Mobile Repsonsive Adjustments

function App() {

    const urlPage = new URLSearchParams(window.location.search);

    const [currentPage, setCurrentPage] = useState(urlPage.get('page') ? urlPage.get('page') : "Home");

    const [consoleOutput, setOutput] = useState("");
    // Maybe make this async/await to resolve console output problems?
    function updateConsole (newValue) {
        setOutput((prev) => {
            return prev + newValue
        })
    };


    const [writeToPort, setWritePort] = useState(null);


    // BUG: Fix page setting lambda expressions on individual entries 
    // Reproduce by clicking a link for an individual entry, 
    // copy link and paste into new tab
    function setPage(pageName) {
        let refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?page=' + pageName + '';    
        window.history.pushState({ path: refresh }, '', refresh);
        setCurrentPage(pageName);
    }

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-no-repeat min-h-screen"> 
            <div className="p-3">
                <UpperNavbar
                    setCurrentPage={setPage}
                    exportConsole={updateConsole}
                    setWritePort={setWritePort}
                />
            </div>
            
            <div className={currentPage === "Home" ? "overflow-x-hidden" : "hidden"}>
                <SPIKEImg />
                <Homepage
                    setCurrentPage={setPage}
                />
                <div className="mt-10 mb-10">
                    <Disclaimer />
                </div>
            </div>

            <div className={currentPage === "GettingStarted" ? "overflow-x-hidden" : "hidden"}>
                <GettingStarted 
                   setCurrentPage={setPage} 
                />
            </div>
        
            <div className={currentPage.includes("Modules") ? "overflow-x-hidden" : "hidden"}>
                <ModulesMenu
                    setCurrentPage={setPage} 
                    currentPage={currentPage}
                    writeToPort={writeToPort}
                    getConsole={consoleOutput}
                />
            </div>

            <div className={currentPage.includes("Constants") ? "overflow-x-hidden" : "hidden"}>
                <Constants />
            </div>

            <div className={currentPage.includes("Examples") ? "overflow-x-hidden" : "hidden"}>
                <Examples />
            </div>

            <div className={currentPage === "Setup" ? "overflow-x-hidden" : "hidden"}>
                <Setup
                    writeToPort={writeToPort}
                />
            </div>

            

            

            
            
        </div>
    );
}

export default App;
