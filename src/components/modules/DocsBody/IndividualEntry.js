import React, {useState} from "react";
import {generateCodeBox, getParametersInfoArray} from "./entryFuncts";

function IndividualEntry(props) {
    const [copiedCode, setCopiedCode] = useState(false);

    if (props.currentPage.split(" ").length < 3) {
        return(<div></div>)
    }

    const path = props.currentPage.split(" ");
    const moduleName = path[path.length - 2];
    const functionName = path[path.length - 1];

    const functionObject = props.docs.modules.find((element) => element.moduleName === moduleName).functions.find((element) => element.functionName === functionName);

    return (
        <div className="mx-4 my-2">
            <h1 className="text-blue-500 text-xl font-semibold cursor-pointer"
            >{functionObject.functionName + "(" + functionObject.parameters.toString().replaceAll(',', ', ') + ")"}</h1>
            <p className="my-6">{functionObject.description}</p>

            <div className="overflow-x-auto mt-3">
            <table className="table table-compact w-full">
                <thead>
                <tr>
                    <th>Parameter</th> 
                    <th>Type</th> 
                    <th>Description</th> 
                </tr>
                </thead> 
                <tbody>
                    {
                        getParametersInfoArray(functionObject).map((element, index) => {
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

            <p className="my-6">Returns: {functionObject.returns}</p>
            <div className="mt-4">
                <div className="inline">
                    <button 
                    className={copiedCode ? "btn btn-xs btn-accent mr-4 text-white" : "btn btn-xs mr-4"}
                    onClick={() => {
                        setCopiedCode(true);
                        setTimeout(() => {
                            setCopiedCode(false);
                        }, 2500);
                        navigator.clipboard.writeText(functionObject.code);
                    }}
                    >
                        <p>{copiedCode ? "Copied to Clipboard" : "Copy Code"}</p>
                    </button>
                </div>
                
                <button 
                    className="btn btn-xs mr-4"
                    onClick={() => window.open("https://pyrepl.web.app", '_blank')}
                >Open In PyREPL</button>
            </div>
            <div className="mockup-code mt-1">
                {generateCodeBox(functionObject.code)}
            </div>
            

            
        </div>
    )
}

export default IndividualEntry;