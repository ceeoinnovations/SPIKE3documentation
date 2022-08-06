import React from "react";
import {Button} from "react-daisyui";

function NavButton(props) {
    return (
        <div className="inline-block">
            <Button className="btn btn-md mx-2" color="ghost" onClick={props.onClick}>
                {props.value}
            </Button>
        </div>
    )

}

export default NavButton;