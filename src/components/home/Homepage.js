import Card from "../Card";
import HomeWelcome from "./HomeWelcome";

function Homepage(props) {
    return (
        <div className="mx-8 w-1/2 ml-auto mr-auto overflow-y-hidden">
            <Card 
                content={
                    <div>
                        <HomeWelcome
                        setCurrentPage={props.setCurrentPage} />
                    </div>
                }
            />

           
        </div>
    )
}

export default Homepage;