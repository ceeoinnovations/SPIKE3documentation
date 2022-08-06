import {Navbar, Button, Form, Input} from "react-daisyui";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

function UpperNavbar(props) {

      return (
        <div className="navbar bg-base-100 border rounded-xl max-h-16">
            <div className="flex-1">
                <button 
                    className="btn btn-ghost normal-case text-xl"
                    onClick={() => props.setCurrentPage("Home")}
                >
                    SPIKE 3 Docs
                </button>
                <NavButton 
                    value="Getting Started" 
                    onClick={() => props.setCurrentPage("GettingStarted")}
                />

                <NavButton 
                    value="Modules" 
                    onClick={() => props.setCurrentPage("Modules")}
                />

                <NavButton 
                    value="Constants" 
                    onClick={() => props.setCurrentPage("Constants")}
                />

                <NavButton 
                    value="Examples" 
                    onClick={() => props.setCurrentPage("Examples")}
                />

                <NavButton 
                    value="SPIKE 2 Docs" 
                    onClick={() => window.location.href="https://tufts-cr-for-lego.codingrooms.com/documentation/spike_prime_python_knowledge_base#top"}
                />
            </div>
            <div className="sm:hidden lg:block flex-none gap-2">
                <SearchBar
                    setCurrentPage={props.setCurrentPage}
                />
            </div>
        </div>
      )
    
}


export default UpperNavbar;