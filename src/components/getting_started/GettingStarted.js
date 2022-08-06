import { Breadcrumbs } from "react-daisyui";
import Card from "../Card";
import CollapseTab from "./CollapseTab";

function GettingStarted(props) {
    return (
        <div className="mx-8 my-8 pb-8 w-1/2 ml-auto mr-auto">
            <Card 
                content={
                <div>
                    <h1 className="text-center text-3xl text-blue-500 my-8 font-semibold">Getting Started</h1>
                    <CollapseTab
                        title="Step 1: Open the SPIKE 3 Beta App"
                        content={<a href="https://spike3.legoeducation.com/" alt="LEGO Education SPIKE 3 App" className="underline text-cyan-500">SPIKE 3 App Link</a>}
                    />
                    <CollapseTab
                        title="Step 2: Connect SPIKE Hub and Update OS"
                        content={
                            <div>
                                <p>
                                    Select SPIKE Prime and open a new project:
                                </p>   
                                <img src="./getting-started-1.png" alt="Create Project"/>
                                <br />
                                <p>
                                    Click the yellow "Connect" button in the upper-left hand corner.
                                </p>
                                <br />
                                <p>
                                    Select the white button option to prompt the update.
                                </p>
                                <img src="./getting-started-2.png" alt="Click white button option" />
                                <br />
                                <p>
                                    Connect your Hub using Bluetooth or USB
                                </p>
                                <img src="./getting-started-3.png" alt="Connecting SPIKE Prime" />
                                
                                <br />

                                <p>Click on the "Update" button</p>
                                

                            </div>
                        }
                    />
                    <CollapseTab
                        title="Step 3: Open an editor or REPL and start coding!"
                        content={
                            <div>
                                <p>For code examples and documentation, visit the modules page on this site.</p>
                                <div className="flex justify-center py-4">
                                </div>
                            </div>
                        }
                    />
                </div>
                }
            />
        </div>
    )
}

export default GettingStarted;