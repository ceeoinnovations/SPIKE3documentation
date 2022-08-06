import { Breadcrumbs } from "react-daisyui";

function BreadcrumbsTop(props) {
    let path = ("Home " + props.currentPage).split(" ");

    function getPagePath(wordNumber) {
        let pagePath = ""
        for (let i = 1; i <= wordNumber - 1; i++) {
            pagePath += path[i] + " ";
        }
        pagePath += path[wordNumber];

        return pagePath;
    }

    return (
        <Breadcrumbs
            className={props.className}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house inline mr-1.5 mb-0.5" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            {
                path.map((element, index) => {
                    if (index == path.length - 1) {
                        return (
                            <Breadcrumbs.Item 
                            key={path.length - 1}
                            className="inline">
                                {element}
                            </Breadcrumbs.Item>
                        )
                    }
                    return (
                        <div key={index} className="inline">
                            <Breadcrumbs.Item 
                            
                            className="hover:underline hover:underline-offset-1 cursor-pointer inline"
                            onClick={() => {
                                let linkPath = getPagePath(index);
                                props.setCurrentPage(linkPath);
                                

                            }}
                            >
                                {element}
                            </Breadcrumbs.Item>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" height="16" fill="currentColor" className="bi bi-chevron-right inline mx-1.5" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    )
                })
            }
            
        </Breadcrumbs>
    )
}

export default BreadcrumbsTop;