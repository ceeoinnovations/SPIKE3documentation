const button = {
    moduleName: "button",
    functions: [
        {
            functionName: "button_isPressed",
            status: "text-yellow-500",
            parameters: ["buttonCode"],
            parametersTypes:["Integer (0-3)"],
            parametersDescription: ["Button code corresponding to a button on the SPIKE Hub"],
            description: "Returns if a specified button is pressed",
            returns: `Integer Tuple Length 2: (pressed, lengthPressed)
            pressed = 0, not pressed
            pressed = 1, pressed
            
            lengthPressed = time pressed (in ms)`,
            code: `import button

btn = {
    0:'power',
    1:'left',
    2:'right',
    3:'connect',
}

# Prints if the left button is pressed or not
print(button.button_isPressed(button.BUTTON_LEFT)[0] == 1)`,

            fullCode: `import button, util

btn = {
    0:'power',
    1:'left',
    2:'right',
    3:'connect',
}

async def main():
    # Prints if the left button is pressed or not
    print(button.button_isPressed(button.BUTTON_LEFT)[0] == 1)
    
    
util.run(main())`
        }
    ],

    constants: [
        "BUTTON_ON_OFF -- 0",
        "BUTTON_LEFT -- 1",
        "BUTTON_RIGHT -- 2",
        "BUTTON_CONNECT -- 3"

    ]
}

export default button;