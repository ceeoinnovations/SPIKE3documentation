import Card from "../Card";
import docs from "../docs/docs";
import ConstantGroup from "./ConstantGroup";

function Constants() {
    return (
    <div className="ml-24 mr-24 my-8">
        <Card 
            content={
                <div className="">
                    <h1 className="text-center text-4xl mx-auto py-4 my-4 font-semibold text-blue-500">Constants</h1>

                    <div className="hidden lg:grid lg:grid-cols-2">
                        <div>
                        {
                            docs.modules.filter((element, index) => {
                                return element.constants !== undefined && element.constants.length > 0 && index % 2 === 0;
                            }).map((element, index) => {
                                return (
                                    <ConstantGroup 
                                        module={element}
                                        key={index}
                                    />
                                )
                            })
                        }
                        </div>

                        <div>
                        {
                            docs.modules.filter((element, index) => {
                                return element.constants !== undefined && element.constants.length > 0 && index % 2 === 1;
                            }).map((element, index) => {
                                return (
                                    <ConstantGroup 
                                        module={element}
                                        key={index}
                                    />
                                )
                            })
                        }
                        </div>
                    </div>

                    <div className="lg:hidden">
                    {
                        docs.modules.filter((element, index) => {
                            return element.constants !== undefined && element.constants.length > 0;
                        }).map((element, index) => {
                            return (
                                <ConstantGroup 
                                    module={element}
                                    key={index}
                                />
                            )
                        })
                    }
                    </div>
                     
                </div>
            }
        />
    </div>
    )
}

export default Constants;