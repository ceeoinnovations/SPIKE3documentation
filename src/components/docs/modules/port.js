const port = {
    moduleName: "port",
    functions:
        [
            {
                functionName: "port_setPower",
                status: "text-blue-500",
                parameters: ["port", "powerLevel"],
                parametersTypes:["Integer", "Integer"],
                parametersDescription: ["Integer representing port on hub (Ex: port.PORTA)", "Power level to send to a device at the specified port"],
                description: "Sends a new power level to a specified port",
                returns: "Nothing",
                code: `# Can be used to change the speed of motors
import port
port.port_setPower(port.PORTA, 5000)`
            },

            {
                functionName: "port_getSensor",
                status: "text-blue-500",
                parameters: ["port"],
                parametersTypes:["Integer"],
                parametersDescription: ["Integer representing port on hub (Ex: port.PORTA)"],
                description: "Gets information about the sensor plugged in at a specified port",
                returns: "A length 8 Integer tuple with sensor/motor information. See code sample for descriptions of tuple values.",
                code: `# Motors
# Returns: (speed, power, position (-180 to 180), ?, ? ,?, ?, ?)

# Force Sensor
# Returns: (Force (N), isPressed, ?, Force (N)?, ?, ?, ?, ?)

# Distance Sensor 
# Returns: (Distance (cm), 0, 0, 0, 0, 0, 0, 0)
# Nothing Sensed = -1

# Color Sensor
# Returns: (LEGO Color Code, Percent Reflected, Red Value, Green Value, Blue Value, Intensity, 0, 0)

import port
port.port_getSensor(port.PORTA)`
            },

            {
                functionName: "port_getDevice",
                status: "text-blue-500",
                parameters: ["port"],
                parametersTypes:["Integer"],
                parametersDescription: ["Integer representing port on hub (Ex: port.PORTA)"],
                description: "Gets the type of device plugged in at a specified port",
                returns: "An Integer representing a device type, see code sample below",
                code: `import port

# Return Values:
devices = {
    "mediumMotor": 48,
    "colorSensor": 61,
    "distanceSensor": 62,
    "forceSensor": 63,
    "noDevice": 255
}

# Checks if a motor is plugged into Port A
print(port.port_getDevice(port.PORTA) == devices["mediumMotor"])`
            },

            {
                functionName: "port_waitAttached",
                status: "text-blue-500",
                parameters: ["port"],
                parametersTypes:["Integer", "Integer"],
                parametersDescription: ["Integer representing port on hub (Ex: port.PORTA)"],
                description: "Waits until a motor or sensor is connected to a specified port before running any further code",
                returns: "Nothing",
                code: `# Code doesn't print until a device is sensed in Port A
import port
port.port_waitAttached(port.PORTA)
print("Something is plugged into Port A!")`
            }
        ],

    constants: [
        "TIMEOUT_NEVER -- -1",

        "PORTA -- 0",

        "PORTB -- 1",

        "PORTC -- 2",

        "PORTD -- 3",

        "PORTE -- 4",

        "PORTF -- 5"
    ]
}

export default port;

