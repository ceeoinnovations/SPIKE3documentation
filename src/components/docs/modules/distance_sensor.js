const distance_sensor = {
    moduleName: "distance_sensor",
    functions: 
    [

        {
            functionName: "get_distance",
            status: "text-blue-500",
            parameters: ["port"],
            parametersTypes:["Integer"],
            parametersDescription: ["Integer representing port on hub."],
            description: "Gets the distance (mm) from the sensor to an object",
            returns: "Distance measurements in millimeters (mm)",
            code: `import distance_sensor, port

distance_sensor.get_distance(port.PORTD)`
        },

        {
            functionName: "get_pixel",
            status: "text-blue-500",
            parameters: ["port", "row", "column"],
            parametersTypes:["Integer", "Integer", "Integer"],
            parametersDescription: ["Integer representing port on hub.", "pixel row", "pixel column"],
            description: " Return the brightness value of a specific light on the distance sensor",
            returns: "Brightness of pixel on sensor (0-100)",
            code: `import distance_sensor, port

distance_sensor.get_pixel(port.PORTD, 1, 2)`
        },

        {
            functionName: "set_pixel",
            status: "text-blue-500",
            parameters: ["port", "row", "column", "brightness"],
            parametersTypes:["Integer", "Integer", "Integer", "Integer (0-100)"],
            parametersDescription: ["Integer representing port on hub.", "pixel row", "pixel column", "pixel brightness"],
            description: "Sets the brightness of a distance sensor pixel",
            returns: "Nothing",
            code: `import distance_sensor, port

distance_sensor.set_pixel(port.PORTD, 1, 2)`
        },

        {
            functionName: "set_pixels",
            status: "text-blue-500",
            parameters: ["port", "bytes([TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT])"],
            parametersTypes:["Integer", "Byte Object"],
            parametersDescription: ["Integer representing port on hub.", "Byte array with distance sensor brightness values"],
            description: "Sets the brightness of multiple distance sensor pixels at once",
            returns: "Nothing",
            code: `import distance_sensor, port

# Turn all all lights on distance sensor. 100 = full brightness
distance_sensor.set_pixels(port.PORTD, bytes([100,100,100,100]))`
        },

        {
            functionName: "clear",
            status: "text-blue-500",
            parameters: ["port"],
            parametersTypes:["Integer"],
            parametersDescription: ["Integer representing port on hub."],
            description: "Turns off all lights on the distance sensor",
            returns: "Nothing",
            code: `import distance_sensor, port

distance_sensor.clear(port.PORTD)`
        }

    ]
}

export default distance_sensor;