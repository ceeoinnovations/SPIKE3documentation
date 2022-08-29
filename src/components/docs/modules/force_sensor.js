const force_sensor = {
    moduleName: "force_sensor",
    functions:
    [
        {
            functionName: "get_force",
            status: "text-blue-500",
            parameters: ["port"],
            parametersTypes:["Integer"],
            parametersDescription: ["Integer representing port on hub."],
            description: "Gets the current force sensor value",
            returns: "Force value in deci-newtons (dN). Max value = 100 = 10N",
            code: `import force_sensor, port

force_sensor.get_force(port.PORTE)`
        },

        {
            functionName: "get_touch",
            status: "text-blue-500",
            parameters: ["port"],
            parametersTypes:["Integer"],
            parametersDescription: ["Integer representing port on hub."],
            description: "Checks if the force sensor is currently pressed",
            returns: "0 if not pressed, 1 if pressed",
            code: `import force_sensor, port

force_sensor.get_touch(port.PORTE)`
        },
    ],

    constants: []
}

export default force_sensor;