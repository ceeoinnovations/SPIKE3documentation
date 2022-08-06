import React, {useRef, useState} from "react";

function CodeEntry(props) {
    const [copiedCode, setCopiedCode] = useState(false);

    return(
        <div>

            <div className="mockup-code">
                {
                    (props.code.split("\n")).map((element, index) => {
                        return (
                        <div>
                            <pre data-prefix={index + 1}><code>{element}</code></pre>
                        </div>)
                    })
                }
                
            </div>
        </div>
        
    )
}

export default CodeEntry;