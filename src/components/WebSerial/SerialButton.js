/*
 * SerialButton.js
 * By: Gabriel Sessions
 * Last Edit: 8/2/2022
 * 
 * UI Buttons to interact with various serial functions in Serial.js
 * 
 */ 

import React from "react";
import Fab from '@mui/material/Fab';
import CableIcon from '@mui/icons-material/Cable';
import Tooltip from "@mui/material/Tooltip";


function SerialButton(props) {
    
    const offColor = props.offColor;
    const onColor = props.onColor;

    return (
        <div className="flex">
            <p className={props.on ? "hidden" :  "mt-2 mx-2"}>{props.connectText}</p>

            {/* Displayed when SPIKE is NOT connected */}
            <div className={props.on ? "hidden" : null}>
                <Tooltip title="Connect Device" placement="top">
                    <Fab onClick={() => {props.onClick()}} color={offColor} aria-label="add" size="small">
                        <CableIcon />
                    </Fab>
                </Tooltip>
            </div>

            {/* RESTART Displayed when SPIKE IS connected */}
            <div className={!props.on ? "hidden" : null}>
                <Tooltip title="Device Connected" placement="top">
                    <Fab onClick={() => {props.restartClick()}} color={onColor} aria-label="add" size="small">
                        <CableIcon />
                    </Fab>
                </Tooltip>
            </div>

            
            
        </div>
        
    )

}

export default SerialButton;

