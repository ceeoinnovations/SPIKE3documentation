const motor = {
    moduleName: "motor",
    functions:
        [
            {
                functionName: "motor_stop",
                status: "text-blue-500",
                parameters: ["port"],
                parametersTypes:["Integer"],
                parametersDescription: ["Optional: Integer representing port on hub, indicates which motor to stop"],
                description: "Stops a running motor. Stops all motors if no port is specified.",
                returns: "Nothing",
                code: `import motor
motor.motor_stop()`
            },

            {
                functionName: "move_at_power",
                status: "text-blue-500",
                parameters: ["port", "power"],
                parametersTypes:["Integer", "Integer"],
                parametersDescription: ["Integer representing port on hub. Use port module.", "Motor Power"],
                description: "Starts the motor at a given power level",
                returns: "Nothing",
                code: `import motor, port, time

# Starts motor at power=10000 and runs for 1 second
motor.motor_move_at_power(port.PORTA, 10000)
time.sleep(1)
motor.motor_stop()`
            },

            {
                functionName: "move_at_speed",
                status: "text-blue-500",
                parameters: ["port", "speed"],
                parametersTypes:["Integer", "Integer"],
                parametersDescription: ["Integer representing port on hub. Use port module.", "Motor Speed"],
                description: "Starts the motor at a given speed",
                returns: "Nothing",
                code: `import motor, port, time

# Runs motor in Port A for 1 sec 
# Runs motor in Port B for 2 sec
motor.motor_move_at_speed(port.PORTA, 10000)
motor.motor_move_at_speed(port.PORTB, 10000)
time.sleep(1)
motor.motor_stop(port.PORTA)
time.sleep(1)
motor.motor_stop(port.PORTB)`
            },

            {
                functionName: "motor_move_for_time",
                status: "text-blue-500",
                parameters: ["port", "time", "speed"],
                parametersTypes:["Integer", "Integer", "Integer"],
                parametersDescription: ["Integer representing port on hub.", "Milliseconds to run the motor for", "Motor speed"],
                description: "Runs a given motor for a specified number of milliseconds",
                returns: "Nothing",
                code: `import motor, port

# Runs motor in Port A for 1 sec 
# Runs motor in Port B for 2 sec
motor.motor_move_for_time(port.PORTA, 1000, 5000)
motor.motor_move_for_time(port.PORTB, 2000, 5000)`
            },

            {
                functionName: "motor_move_by_degrees",
                status: "text-blue-500",
                parameters: ["port", "degrees", "speed"],
                parametersTypes:["Integer", "Integer", "Integer"],
                parametersDescription: ["Integer representing port on hub. Use port module.", "Number of degrees to move the motor", "Speed of the motor"],
                description: "Moves a motor a specified number of degrees. Positive degree values are clockwise, negative are counter clockwise.",
                returns: "Nothing",
                code: `import motor, port

motor.motor_move_by_degrees(port.PORTA, 360, 10000)
motor.motor_move_by_degrees(port.PORTB, 360, 10000)`

            },

            {
                functionName: "motor_move_to_position",
                status: "text-yellow-500",
                parameters: ["port", "position", "speed"],
                parametersTypes:["Integer", "Integer (0-359)", "Integer"],
                parametersDescription: ["Integer representing port on hub.", "Position of the motor (in degrees)", "Speed of the motor (bugs with high/low values)"],
                description: "Move the motor to a specific degree position. Zero is at the top and proceeds clockwise. ",
                returns: "Nothing",
                code: `import motor, port

# Runs motor to zero position 
motor.motor_move_to_position(port.PORTA, 0, 5000)`
            },

            {
                functionName: "motor_move_to_absolute_position",
                status: "text-yellow-500",
                parameters: ["port", "position", "speed"],
                parametersTypes:["Integer", "Integer (0-359)", "Integer"],
                parametersDescription: ["Integer representing port on hub.", "Position of the motor (in degrees)", "Speed of the motor (bugs with high/low values)"],
                description: "Move the motor to a specific degree position. Zero is at the top and proceeds clockwise. ",
                returns: "Nothing",
                code: `import motor, port

# Runs motor to zero position 
motor.motor_move_to_absolute_position(port.PORTA, 0, 5000)`
            },

            {
                functionName: "motor_get_power",
                status: "text-blue-500",
                parameters: ["port"],
                parametersTypes:["Integer"],
                parametersDescription: ["Integer representing port on hub."],
                description: "Retrieves the current power level of a given motor",
                returns: "An integer representing the current power level of a motor",
                code: `import motor, port

motor.motor_get_power(port.PORTA)`
            },

            {
                functionName: "motor_get_status",
                status: "text-blue-500",
                parameters: ["port"],
                parametersTypes:["Integer"],
                parametersDescription: ["Integer representing port on hub."],
                description: "",
                returns: ` An Integer status code
                MOTOR_READY -- 0

                MOTOR_RUNNING -- 1 
                
                MOTOR_STALLED -- 2
                
                MOTOR_ABORTED -- 3
                
                MOTOR_REGULATION_ERROR -- 4
                
                MOTOR_DISCONNECTED -- 5`,
                code: `import motor, port
motor.motor_get_status(port.PORTA)`
            },

            {
                functionName: "motor_acc_get_value",
                status: "text-blue-500",
                parameters: ["port", "enumAcceleration"],
                parametersTypes:["Integer", "enum?"],
                parametersDescription: ["Integer representing port on hub.", "?"],
                description: "Not quite sure yet",
                returns: "An integer",
                code: `import motor, port

motor.motor_acc_get_value(port.PORTA, 100)`
            },

            {
                functionName: "motor_use_permyriads",
                status: "text-blue-500",
                parameters: [],
                parametersTypes:[],
                parametersDescription: [],
                description: "Idk",
                returns: "Nothing",
                code: `import motor, port

motor.motor_use_permyriads()`
            },

            {
                functionName: "motor_use_si_units",
                status: "text-blue-500",
                parameters: [],
                parametersTypes:[],
                parametersDescription: [],
                description: "Sets motor into SI units mode?",
                returns: "Nothing",
                code: `import motor, port

motor.motor_use_si_units()`
            },
        ]
};

export default motor;