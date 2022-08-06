
import CollapseTab from "../getting_started/CollapseTab";
import CopyCode from "./CopyCode";
import CodeEntry from "./CodeEntry";

import React, {useRef} from "react";

function ExampleTab(props) {


    return (
        <div key={props.index}>
            <div 
            ref={props.ref} 
            onClick={() => {
                (props.ref).current?.scrollIntoView({behavior: 'smooth'});
            }}>
                <CollapseTab
                title={
                <div >
                    <p>{"Example " + (props.index + 1) + ": " + props.title}</p>
                    <CopyCode 
                        code={props.code} 
                        className={"mt-2"}
                    />
                </div>}
                content={
                    <div>
                        <CodeEntry code={props.code} />
                    </div>
                }
                />
            </div>
        </div>
    )
}

export default ExampleTab;