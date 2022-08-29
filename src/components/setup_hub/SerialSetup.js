import React, {useState} from "react";
import { Button } from "react-daisyui";
import setup_script from "./setup_script";

export default function Questions(props) {

    const DEFAULT_HUB_NAME = "SPIKE"
    const INITIAL_SETUP_PHASE = "Prep"

    // 3 States: Prep, Execution, Finished
    const [status, setStatus] = useState(INITIAL_SETUP_PHASE);
    const [load, setLoad] = useState(0);
    const [hubName, setHubName] = useState(DEFAULT_HUB_NAME);

    function executeSetup() {
        setStatus("Execution");
        setup_script(hubName, (content) => {props.writeToPort(content)})
        loadToHundred();
        
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function loadToHundred() {
        setLoad(0);
        for (let i = 0; i < 100; i++) {
            setLoad((prev) => {
                return prev + 1;
            });
            await delay(15);
        }

        await delay(400);
        executionDone();

    }

    function executionDone() {
        setHubName(DEFAULT_HUB_NAME);
        setStatus("Finished");
    }

    return (
        <div>
            <div className={status === "Prep" ? "" : "hidden"}>
                <h2 className="text-center my-4 mt-6 text-xl">Is your hub ready for EN 1 Setup?</h2>
                <div className="mx-12">
                    <ul className="list-disc">
                        <li>Hub must be upgraded to SPIKE 3 (Green button), see Getting Started if it's currently running SPIKE 2 (White button).</li>
                        <li>This tab is open in an updated version of Google Chrome, Microsoft Edge, or Opera on Desktop.</li>
                        <li>The connection button in the navigation bar is green.</li>
                    </ul>
                </div>
                <h3 className="text-center my-4 bg-yellow-400 font-bold text-lg">WARNING: All files will be deleted off of the hub!</h3>

                <h4 className="my-2 text-center">Enter a new Hub name below!</h4>
                <div className="flex justify-center">
                    <input type="text" placeholder="New Hub Name" className="input input-bordered w-full max-w-xs" value={hubName} 
                    onChange={(e) => {
                        setHubName(e.target.value);
                    }} />
                </div>

                
                <div className="flex justify-center my-4 mt-6">
                    <Button 
                        className="bg-cyan-500 border-cyan-500 hover:bg-cyan-700 hover:border-cyan-700 text-white"
                        onClick={() => executeSetup()}
                    >
                        Execute Setup Script
                    </Button>
                </div>
            </div>

            <div className={status === "Execution" ? "" : "hidden"}>
                <h2 className="text-center my-4 mt-6 text-xl">Executing Script</h2>
                <div className="mx-12">
                    <p className="text-center">Do not exit this page</p>
                </div>
                <div className="flex justify-center my-4 mt-6">
                    <div className={load >= 100 ? "radial-progress text-green-700" : "radial-progress text-red-700"} style={{"--value": load.toString()}}>
                        {load}%
                    </div>
                </div>
            </div>

            <div className={status === "Finished" ? "" : "hidden"}>
                <h2 className="text-center my-4 mt-6 text-xl">Setup Complete</h2>
                <div className="mx-12 mb-6">
                    <p className="text-center">Your hub is ready for EN 1!</p>
                </div>

                <h4 className="my-2 text-center">Enter a new Hub name below!</h4>
                <div className="flex justify-center">
                    <input type="text" placeholder="New Hub Name" className="input input-bordered w-full max-w-xs" value={hubName} 
                    onChange={(e) => {
                        setHubName(e.target.value);
                    }} />
                </div>
                <div className="flex justify-center my-4 mt-6">
                    <Button 
                        className="bg-cyan-500 border-cyan-500 hover:bg-cyan-700 hover:border-cyan-700 text-white"
                        onClick={() => executeSetup()}
                    >
                        Run on another hub
                    </Button>
                </div>
                
            </div>


        </div>
    )
}