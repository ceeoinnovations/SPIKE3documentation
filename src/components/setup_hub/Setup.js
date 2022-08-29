import { useState } from "react";
import { Button } from "react-daisyui";
import Card from "../Card";
import SerialSetup from "./SerialSetup";

export default function Setup(props) {

    return (
        <div className="mx-8 my-8 lg:w-1/2 w-96 ml-auto mr-auto overflow-y-hidden">
            <Card 
                content={
                    <div className="p-4">
                        <h1 className=" my-4 text-center font-semibold text-3xl text-blue-500 block"> Tufts EN 1 Hub Setup</h1>
                        <SerialSetup 
                            writeToPort={props.writeToPort}
                        />
                    </div>
                }
            />
        </div>
    )
}