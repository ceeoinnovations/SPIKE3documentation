import React, {useRef} from "react";


function CollapseTab(props) {
    return(
        <div className="mx-8">
            <div className="font-medium text-xl my-6">
                {props.title}
            </div>
            <div className="my-4 mb-4"> 
                {props.content}
            </div>
        </div>
    )
}

export default CollapseTab;

