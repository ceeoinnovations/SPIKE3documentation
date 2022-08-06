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
print(button.button_isPressed(Button.BUTTON_LEFT)[0] == 1)`
        }
    ]
}

export default button;