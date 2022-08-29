import docs from "../docs/docs";

import React, {useEffect} from "react";

function FullSearchResults(props) {


    // Checks if a string matches another string
    function isMatch(element1, element2) {
        const lowerCase1 = element1.toLowerCase().replaceAll('_', '').trim();
        const lowerCase2 = element2.toLowerCase().replaceAll('_', '').trim();
        if (lowerCase1.includes(lowerCase2)) {
            return true;
        }
        return false;
    }

    function searchForModules(docs, searchKey) {
        let matches = [];
        const parent = "Modules";
        docs.modules.forEach((element) => {
            if (isMatch(element.moduleName, searchKey)) {
                matches.push({
                    parent: parent,
                    value: element.moduleName,
                    link: parent + " " + element.moduleName
                })
            }
        })
        return matches;
    }

    function searchForModuleFunctions(module, searchKey) {
        let matches = [];
        module.forEach(element => {
            let parent = "Modules " + element.moduleName;
            element.functions.forEach((element) => {
                if (isMatch(element.functionName, searchKey)) {
                    matches.push({
                        parent: parent,
                        value: element.functionName,
                        link: parent + " " + element.functionName
                    })
                }
            })
            
        });

        return matches;
    }


    function search(searchKey) {
        let matches = [...searchForModules(docs, searchKey), ...searchForModuleFunctions(docs.modules, searchKey) 
        ];

        return matches;
        
    }

    function searchResults(searchKey) {
        let results = search(searchKey);
        if (props.quickSearch && results.length > 0) {
            props.setCurrentPage(results[0].link)
        }

        if (results.length == 0) {
            return (
                <button 
                className="btn"
            >
                {"No Matches"}
            </button>
            )
        }
        return (
            <div className="btn-group btn-group-vertical">
                {results.map((element, index) => {
                    if (index < 4) {
                        return (
                        <div key={index} className={index === 0 ? "z-20" : "z-20"}>
                            <button 
                                className="btn z-20"
                                onClick={() => {
                                    props.setCurrentPage(element.link)
                                    props.setQuery("")
                                }}
                            >
                                {element.value}
                            </button>
                        </div>)
                    }
                    if (index === 5) {
                        return (
                            <div key={index} className={"z-20"}>
                                <button 
                                    className="btn z-20"
                                    onClick={() => { }}
                                >
                                    {"More Results..."}
                                </button>
                            </div>
                        )
                    }
                    
                })}
            </div>
        )
    }

    

    if (props.query.length > 2) {
        return (
            <div className={"z-20"}>
                {searchResults(props.query)}
            </div>
        )
    }
    else if (props.query.length > 0)
        return (
            <div className="z-20">
                <button className="btn ">Enter at least 3 charcters</button>
            </div>
        )
    return (<div></div>)
    
}


export default FullSearchResults;