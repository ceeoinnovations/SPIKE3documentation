import React, {useState} from "react";
import {generateCodeBox, getParametersInfoArray} from "./entryFuncts";

function DocsEntry(props) {
    const [copiedCode, setCopiedCode] = useState(false);
    const [runCode, setRunCode] = useState(false);
    const [fullCode, setFullCode] = useState(false);

    //const [displayedCode, setDisplayedCode] = useState()

    const [currentConsole, setCurrentConsole] = useState([]);


    let titleColor = "text-blue-500";
    if (props.function.status !== undefined) {
        titleColor = props.function.status;
    }

    return (
        <div className="mx-4 my-2">
            <h1 className={"text-blue-500 text-xl font-semibold hover:underline hover:underline-offset-2 cursor-pointer " + titleColor}
            onClick={() => {
                props.setCurrentPage((prev) => prev + " " + props.function.functionName)
            }}
            >{props.function.functionName + "(" + props.function.parameters.toString().replaceAll(',', ', ') + ")"}</h1>
            <p className="my-6">{props.function.description}</p>

            <div className={getParametersInfoArray(props.function).length === 0 ? "hidden" : "overflow-x-auto mt-3"}>
            <table className={"table table-compact w-full"}>
                <thead>
                <tr>
                    <th>Parameter</th> 
                    <th>Type</th> 
                    <th>Description</th> 
                </tr>
                </thead> 
                <tbody>
                    {
                        getParametersInfoArray(props.function).map((element, index) => {
                            return (<tr key={index}>
                                <th>{element[0]}</th>
                                <td>{element[1]}</td>
                                <td>{element[2]}</td>
                            </tr>);
                        })
                    }
                </tbody> 
            </table>
            </div>

            <div className="my-6">{
                props.function.returns.split("\n").map((element, index) => {
                    if (index === 0) {
                        return (
                        <div>
                            <p>{"Returns: " + element}</p>
                        </div>
                        )
                    }
                    return (
                        <div>
                            <p>{element}</p>
                        </div>
                    )
                })
            }</div>
            <div className="mt-4">
                <div className="inline">
                    <button 
                    className={copiedCode ? "btn btn-xs btn-accent mr-4 text-white" : "btn btn-xs mr-4"}
                    onClick={() => {
                        setCopiedCode(true);
                        setTimeout(() => {
                            setCopiedCode(false);
                        }, 2500);
                        navigator.clipboard.writeText(props.function.code);
                    }}
                    >
                        <p>{copiedCode ? "Copied to Clipboard" : "Copy Code"}</p>
                    </button>
                </div>

                <div className="inline">
                    <button 
                    className={runCode ? "btn btn-xs btn-accent mr-4 text-white" : "btn btn-xs mr-4"}
                    onClick={() => {
                        setRunCode(true);
                        setTimeout(() => {
                            setRunCode(false);
                        }, 2000);

                        //props.writeToPort(props.function.code.split("\x05"));
                        props.writeToPort(props.function.code.split("\n"));
                        //props.writeToPort(props.function.code.split("\x04"));

                        setTimeout(() => {
                            setCurrentConsole(() => {
                                console.log(props.getConsole)
                                return ([props.getConsole.split("\n").slice(-2)[0]])
                            })
                        }, 500);
                        
                    }}
                    >
                        <p>{runCode ? "Running Code" : "Run Code"}</p>
                    </button>
                </div>
                
                {/*
                <div className="inline">
                    <button 
                    className={"btn btn-xs mr-4"}
                    onClick={() => {
                        setFullCode((prev) => {
                            return !prev;
                        });
                        if (props.function.fullCode) {
                            console.log("Full code is here!")
                        }
                    }}
                    >
                        <p>{fullCode ? "Code Snippet" : "Full Code"}</p>
                    </button>
                </div>
                */}
                
                
            </div>
            <div className="mockup-code mt-1">
                {generateCodeBox(props.function.code)}
            </div>
            <div>
                {currentConsole.map((element, index) => {
                    return (
                        <p key={index}>{element}</p>
                    )
                })}
            </div>
            

            <div className={props.lastElement ? "hidden" : "relative flex items-center py-5"}>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            
        </div>
    )
}

export default DocsEntry;