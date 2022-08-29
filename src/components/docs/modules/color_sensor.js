const color_sensor = {
    moduleName: "color_sensor",
    functions: 
    [

        {
            functionName: "get_color",
            status: "text-blue-500",
            parameters: ["port"],
            parametersTypes:["Integer"],
            parametersDescription: ["Integer representing port on hub."],
            description: "Returns the color detected by the color sensor",
            returns: "An integer color code (see example)",
            code: `import color_sensor, port

colors = {
    -1:'ERR',
    0:"LEGO_BLACK",
    1:"LEGO_MAGENTA",
    2:"LEGO_PURPLE",
    3:"LEGO_BLUE",
    4:"LEGO_AZURE",
    5:"LEGO_TURQUOISE",
    6:"LEGO_GREEN",
    7:"LEGO_YELLOW",
    8:"LEGO_ORANGE",
    9:"LEGO_RED",
    10:"LEGO_WHITE",
    11:"LEGO_DIM_WHITE",
}

colors[color_sensor.get_color(port.PORTC)]`
        },

        {
            functionName: "get_reflection",
            status: "text-blue-500",
            parameters: ["port"],
            parametersTypes:["Integer"],
            parametersDescription: ["Integer representing port on hub."],
            description: "Returns the amount of light reflected from a surface",
            returns: "An integer between 1 and 100",
            code: `import color_sensor, port

color_sensor.get_reflection(port.PORTC)`
        },

        {
            functionName: "get_rgbi",
            status: "text-blue-500",
            parameters: ["port"],
            parametersTypes:["Integer"],
            parametersDescription: ["Integer representing port on hub."],
            description: "Gets the RGB value from the color sensor and intensity",
            returns: "A tuple value with the RGBI value (Red, Green, Blue, Intensity).",
            code: `import color_sensor, port

color_sensor.get_rgbi(port.PORTC)`
        },

    ],

    constants: []
}

export default color_sensor;