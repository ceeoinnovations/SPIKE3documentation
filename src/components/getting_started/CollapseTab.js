import React, {useRef} from "react";


function CollapseTab(props) {
    return(
        <div 
            tabIndex="0" 
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-4 my-4 z-0"
            ref={props.ref}
            onClick={props.onClick}
        >
            <div className="collapse-title text-xl font-medium">
                {props.title}
            </div>
            <div className="collapse-content"> 
                {props.content}
            </div>
        </div>
    )
}

export default CollapseTab;

