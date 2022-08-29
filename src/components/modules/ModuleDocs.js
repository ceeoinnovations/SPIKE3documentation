import Card from "../Card";
import Breadcrumbs from "../Breadcrumbs"
import docs from "../docs/docs";
import Body from "./DocsBody/Body";
import IndividualEntry from "./DocsBody/IndividualEntry";

function ModuleDocs(props) {
    const pageName = props.currentPage.split(" ")[props.currentPage.split(" ").length - 1];
    const currentDocs = docs.modules.find(element => element.moduleName === pageName) 


    // Determines which content page to display
    // (single entry or multiple)
    function getModuleOrEntry() {
        if (currentDocs === undefined) {
            return (
                <IndividualEntry
                    docs={docs}
                    currentPage={props.currentPage}
                    writeToPort={props.writeToPort}
                />
            )
        }
        return (
            <Body
                docs={currentDocs}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                writeToPort={props.writeToPort}
                getConsole={props.getConsole}
            />
        )
    }

    return (
        <div>
        <Card 
            content={
                <div className="p-4 w-96 lg:w-auto">  
                    <Breadcrumbs 
                        currentPage={props.currentPage}
                        setCurrentPage={props.setCurrentPage}
                        className="ml-6"
                    /> 
                    <h1 className="text-center text-3xl font-semibold my-4 ">{pageName}</h1>

                    <div className="my-6">
                        {getModuleOrEntry()}
                    </div>
                </div>
            
            }
        />
        </div>
    )
}

export default ModuleDocs;