import React, {useState, useEffect} from "react";
import FullSearchResults from "./FullSearchResults";

function SearchBar(props) {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const [quickSearch, setQuickSearch] = useState(false);

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                console.log("Enter key was pressed. Run your function.");
                event.preventDefault();
                if (focused)
                    setQuickSearch(true);
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);


    return (
        <div className="form-control relative hidden md:block">
            <div className="absolute -top-6 right-2">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="input input-bordered" 
                    value={query} 
                    onChange={(event) =>{
                        const newVal = event.target.value;
                        setQuery(() => {
                            return (newVal)
                        })
                    }} 
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                <FullSearchResults
                    query={query}
                    setQuery={setQuery}
                    setCurrentPage={props.setCurrentPage}
                    quickSearch={quickSearch}
                />
            </div>
            
        </div>
    )
    
}

export default SearchBar;