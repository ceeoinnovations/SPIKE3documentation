import CollapseTab from "../getting_started/CollapseTab";
import Card from "../Card";
import jsonExamples from "./jsonExamples";
import CodeEntry from "./CodeEntry";
import CopyCode from "./CopyCode";

import React, {useRef} from "react";
import ExampleTab from "./ExampleTab";


function Examples() {

    const refs = Array(jsonExamples.length).fill(useRef(null))

    return (
        <div className="flex justify-center my-8">
            <Card 
                content={
                <div>
                    <h1 className="text-center text-3xl text-blue-500 my-8 font-semibold">Examples</h1>
                    {
                        jsonExamples.map((element, index) => {
                            return (
                                <ExampleTab
                                    code={element.code}
                                    title={element.title}
                                    index={index}
                                    ref={refs[index]}
                                />
                                
                            )
                        })
                    }
                    
                    
                    
                </div>
                }
            />
        </div>
    )
}

export default Examples;