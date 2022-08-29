import docs from "../docs/docs";
import Card from "../Card";
import Breadcrumbs from "../Breadcrumbs";

function ModulesHome(props) {
    function chunkArray(array, elementsPerChunk) {
        let chunkedArray = []
        for (let i = 0; i < elementsPerChunk; i++) {
            chunkedArray.push([]);
        }
        for (let i = 0; i < array.length; i++) {
            chunkedArray[i % elementsPerChunk].push(array[i])
        }
        return chunkedArray;
        
    }

    return (

        
        <div>
        
        <Card 
            content={
                <div className="p-4 w-72 lg:w-auto">  
                    <Breadcrumbs 
                        currentPage={props.currentPage}
                        setCurrentPage={props.setCurrentPage}
                        className="ml-6"
                    /> 
                    <h1 className="text-center text-3xl font-semibold my-4 text-blue-500">SPIKE 3 Modules</h1>
                    {/* 3 Column Grid Format, change num of cols using function and classes*/}
                    <div className="hidden lg:my-4 lg:grid lg:grid-cols-3">
                    {
                        chunkArray(docs.modules, 3).map((element, index) => {
                            return (
                                <div key={index} className="block">
                                    {element.map((elementInner, index2) => {
                                        return (
                                            <div 
                                            className="flex justify-center my-6"
                                            key={index2}>
                                            <button 
                                            className="btn mx-6 block"
                                            
                                            onClick={() => 
                                            props.setCurrentPage("Modules " + elementInner.moduleName)}
                                            >{elementInner.moduleName}</button>
                                            <br></br>
                                            </div>
                                        )
                                    })}

                                </div>
                            )
                        })
                    }
                    </div>

                    {/* 1 Column for Mobile Devices */}
                    {
                        docs.modules.map((element, index) => {
                            return (
                                <div 
                                className="lg:hidden flex justify-center my-6"
                                key={index}>
                                <button 
                                className="btn mx-6 block"
                                
                                onClick={() => 
                                props.setCurrentPage("Modules " + element.moduleName)}
                                >{element.moduleName}</button>
                                <br></br>
                                </div>
                            )
                        })
                    }
                </div>
            
            }
        />
        </div>
    )
}

export default ModulesHome;