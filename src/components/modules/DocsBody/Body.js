import DocsEntry from "./DocsEntry";

function Body(props) {
    function getDocsMap() {
        if (props.docs !== undefined) {
            return (
                <div>
                    {
                        props.docs.functions.map((element, index) => {
                            return (
                                <DocsEntry 
                                    key={index}
                                    function={element}
                                    currentPage={props.currentPage}
                                    setCurrentPage={props.setCurrentPage}
                                />
                            );
                        })
                    }
                </div>
            )
        }
        return(
            <div>
            </div>
        )
    }

    return (
        <div>
            {getDocsMap()}
        </div>
    )
}

export default Body;