import React, {useState} from "react";

function CopyCode(props) {
    const [copiedCode, setCopiedCode] = useState(false);

    return (
        <div className={props.className}>
            <div className="inline">
                <button 
                className={copiedCode ? "btn btn-xs btn-accent mr-4 text-white" : "btn btn-xs mr-4"}
                onClick={() => {
                    setCopiedCode(true);
                    setTimeout(() => {
                        setCopiedCode(false);
                    }, 2500);
                    navigator.clipboard.writeText(props.code);
                }}
                >
                    <p>{copiedCode ? "Copied to Clipboard" : "Copy Code"}</p>
                </button>
            </div>
            
        </div>
    )
}

export default CopyCode;