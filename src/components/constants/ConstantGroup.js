import React from "react";

export default function ConstantGroup(props) {
    let firstThird = Math.ceil(props.module.constants / 3);
    let secondThird = Math.ceil(2*props.module.constants / 3);
    let fullLength = props.module.constants.length;

    return (
        <div>
            <h3 className="text-center block text-3xl my-4">{props.module.moduleName}</h3>
            <div className="flex justify-center my-4">
            
                <div className="block">
                    {
                        props.module.constants.map((element, index) => {
                            return (
                                <p key={index}>{element}</p>
                            )
                        })
                    }
                </div>
                

            </div>
        </div>
    )
}