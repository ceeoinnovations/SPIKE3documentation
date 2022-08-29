
import ModuleDocs from "./ModuleDocs";
import ModulesHome from "./ModulesHome";

function ModulesMenu(props) {

    function renderModulesInfo() {
        if (props.currentPage === "Modules") {
            return (
                <ModulesHome
                    setCurrentPage={props.setCurrentPage} 
                    currentPage={props.currentPage}
                />
            )
        }

        return (
            <ModuleDocs
                setCurrentPage={props.setCurrentPage} 
                currentPage={props.currentPage}
                writeToPort={props.writeToPort}
                getConsole={props.getConsole}
            />
        )
    }

    

    return (
        <div className="flex justify-center my-8 mx-16 overflow-x-hidden">
            {renderModulesInfo()}

        </div>
    )
}

export default ModulesMenu;