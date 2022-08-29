import {Navbar, Button, Form, Input} from "react-daisyui";
import Serial from "../WebSerial/Serial";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

function UpperNavbar(props) {

      return (
        <div>
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
                        className={"hidden md:block"} 
                        onClick={() => props.setCurrentPage("GettingStarted")}
                    />

                    <NavButton 
                        value="Modules" 
                        onClick={() => props.setCurrentPage("Modules")}
                    />


                    {/*
                    <div>
                        <div class="dropdown">
                            <label tabindex="0" class="btn m-1 bg-ghost">More Options</label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    */}
                    

                    <NavButton 
                        value="Constants"
                        className={""} 
                        onClick={() => props.setCurrentPage("Constants")}
                    />

                    <NavButton 
                        value="Examples" 
                        className={"hidden lg:block"} 
                        onClick={() => props.setCurrentPage("Examples")}
                    />

                    <Serial 
                        exportConsole={props.exportConsole}
                        setWritePort={props.setWritePort}
                    />


                </div>
                <div className="sm:hidden lg:block flex-none gap-2">
                    <SearchBar
                        setCurrentPage={props.setCurrentPage}
                    />
                </div>

                
            </div>
        </div>
        
      )
    
}


export default UpperNavbar;