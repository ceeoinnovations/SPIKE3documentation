const drivebase = {
    moduleName: "drivebase",
    functions:
        [
            {
                functionName: "drivebase_init",
                status: "text-blue-500",
                parameters: ["drivebase_id", "Port1", "Port2"],
                parametersTypes:["Integer (0-2)", "Integer", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Integer representing port on hub.", "Integer representing port on hub."],
                description: "Creates a new drivebase instance in a drivebase id slot",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)`
            },

            {
                functionName: "drivebase_free",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Frees drivebase slot, deletes initialized drivebase instance",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_free(0)`
            },

            {
                functionName: "drivebase_get_steer_from_arc",
                status: "text-blue-500",
                parameters: ["arg1", "arg2", "arg3", "arg4"],
                parametersTypes:["Float", "Float", "Float", "Float"],
                parametersDescription: ["The absolute value of arc_radius must be larger than half the wheel distance", "The absolute value of arc_radius must be larger than half the wheel distance", "The absolute value of arc_radius must be larger than half the wheel distance", "The absolute value of arc_radius must be larger than half the wheel distance"],
                description: "Unknown",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)

drivebase.drivebase_get_steer_from_arc(500, 500, 500, 500)`
            },

            {
                functionName: "drivebase_tank_move_for_degrees",
                status: "text-yellow-500",
                parameters: ["drivebase_id", "motor1Speed", "motor2Speed", "degrees"],
                parametersTypes:["Integer (0-2)", "Integer", "Integer", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Speed of Motor 1", "Speed of Motor 2", "Degrees to turn motors"],
                description: "Turns both motors a specified number of degrees (if speeds are equal)",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                
drivebase.drivebase_tank_move_for_degrees(0, 10000, 10000, 360)`
            },

            {
                functionName: "drivebase_tank_move_for_time",
                status: "text-blue-500",
                parameters: ["drivebase_id", "motor1Speed", "motor2Speed", "degrees"],
                parametersTypes:["Integer (0-2)", "Integer", "Integer", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Speed of Motor 1", "Speed of Motor 2", "Time (in ms) to run motors"],
                description: "Runs the drivebase motors for a specified amount of time",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                
# Run drivebase for 3 seconds
drivebase.drivebase_tank_move_for_time(0, 10000, 10000, 3000)`
            },

            {
                functionName: "drivebase_tank_move_forever",
                status: "text-blue-500",
                parameters: ["drivebase_id", "motor1Speed", "motor2Speed", "degrees"],
                parametersTypes:["Integer (0-2)", "Integer", "Integer", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Speed of Motor 1", "Speed of Motor 2", "Time (in ms) to run motors"],
                description: "Runs the drivebase motors until stopped",
                returns: "Nothing",
                code: `import drivebase, port
import time
                
# Runs drivebase forever
drivebase.drivebase_tank_move_forever(0, 10000, 10000)

# Uncomment to stop motor
'''
time.sleep(1)
drivebase.drivebase_stop(0)
'''`
            },

            {
                functionName: "drivebase_steering_move_for_degrees",
                status: "text-yellow-500",
                parameters: ["drivebase_id", "steering_factor", "degrees", "mystery?"],
                parametersTypes:["Integer (0-2)", "Integer(-100 to 100)", "Integer", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Direction to steer drivebase", "Number of degrees to turn motors", "Unknown"],
                description: "Moves drivebase motors a specified number of degrees with a steeing factor",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                
drivebase.drivebase_steering_move_for_degrees(0, 0, 360, 360)`
            },

            {
                functionName: "drivebase_steering_move_for_time",
                status: "text-yellow-500",
                parameters: ["drivebase_id", "steering_factor", "time", "mystery?"],
                parametersTypes:["Integer (0-2)", "Integer(-100 to 100)", "Integer", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Direction to steer drivebase", "Time (in ms) to run motors", "Unknown"],
                description: "Moves the drivebase motors for a specified number of milliseconds",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)

# Moves drivebase for 1 second
drivebase.drivebase_steering_move_for_time(0, 0, 1000, 1000)`
            },

            {
                functionName: "drivebase_steering_move_forever",
                status: "text-blue-500",
                parameters: ["drivebase_id", "steering_factor"],
                parametersTypes:["Integer (0-2)", "Integer(-100 to 100)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Direction to steer drivebase"],
                description: "Steers the drivebase with a specified steering factor until stopped.",
                returns: "Nothing",
                code: `import drivebase, port, time

drivebase.drivebase_init(0, port.PORTA, port.PORTB)

drivebase.drivebase_steering_move_forever(0, 100)

# Uncomment to stop motor
'''
time.sleep(1)
drivebase.drivebase_stop(0)
'''`
            },

            {
                functionName: "drivebase_stop",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Stops drivebase motors",
                returns: "Nothing",
                code: ``
            },

            
            {
                functionName: "drivebase_set_acceleration",
                status: "text-blue-500",
                parameters: ["drivebase_id", "acceleration"],
                parametersTypes:["Integer (0-2)", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Acceleration factor when motors increase in speed"],
                description: "Change the rate at which the drivebase motors accelerate",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                
drivebase.drivebase_set_acceleration(0, 1000)
                
drivebase.drivebase_tank_move_for_time(0, 10000, 10000, 3000)`
            },

            
            {
                functionName: "drivebase_set_speed",
                status: "text-blue-500",
                parameters: ["drivebase_id", "speed"],
                parametersTypes:["Integer (0-2)", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Motor Speed"],
                description: "Function to set the default motor speed?",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                
drivebase.drivebase_set_speed(0, 10000)
                
drivebase.drivebase_tank_move_for_time(0, 10000, 10000, 3000)`
            },

            
            {
                functionName: "drivebase_set_deceleration",
                status: "text-blue-500",
                parameters: ["drivebase_id", "deceleration"],
                parametersTypes:["Integer (0-2)", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Acceleration factor when motors decrease in speed"],
                description: "Change the rate at which the drivebase motors decelerate",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                
drivebase.drivebase_set_deceleration(0, 1000)
                
drivebase.drivebase_tank_move_for_time(0, 10000, 10000, 3000)`
            },

            
            {
                functionName: "drivebase_set_wheel_diameter",
                status: "text-blue-500",
                parameters: ["drivebase_id", "Integer"],
                parametersTypes:["Integer (0-2)", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Wheel diameter"],
                description: "Change wheel diameter (steering mode)",
                returns: "Nothing",
                code: `import drivebase, port
drivebase.drivebase_init(0, port.PORTA, port.PORTB)
drivebase.drivebase_set_wheel_diameter(0, 10)`
            },

            {
                functionName: "drivebase_set_axle_track",
                status: "text-blue-500",
                parameters: ["drivebase_id", "axle_track"],
                parametersTypes:["Integer (0-2)", "Integer"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2", "Axle Track"],
                description: "Change axle track (steering mode)",
                returns: "Nothing",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                                
drivebase.drivebase_set_axle_track(0, 10)`
            },

            {
                functionName: "drivebase_get_acceleration",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Gets the acceleration of the drivebase motors",
                returns: "Acceleration of drivebase motors",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                                
print(drivebase.drivebase_get_acceleration(0))`
            },

            {
                functionName: "drivebase_get_speed",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Gets the speed of the drivebase motors",
                returns: "Speed of drivebase motors",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                                
print(drivebase.drivebase_get_speed(0))`
            },

            {
                functionName: "drivebase_get_deceleration",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Gets the deceleration of the drivebase motors",
                returns: "Deceleration of drivebase motors",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                                
print(drivebase.drivebase_get_deceleration(0))`
            },

            {
                functionName: "drivebase_get_wheel_diameter",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Gets the wheel diameter of the drivebase",
                returns: "Wheel diameter of the drivebase",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                                
print(drivebase.drivebase_get_wheel_diameter(0))`
            },

            {
                functionName: "drivebase_get_axle_track",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Gets the axle track drivebase motors",
                returns: "Axle Track Value",
                code: `import drivebase, port

drivebase.drivebase_init(0, port.PORTA, port.PORTB)
                                
print(drivebase.drivebase_get_axle_track(0))`
            },

            {
                functionName: "drivebase_set_wheel_diameter",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Change wheel diameter (steering mode)",
                returns: "Nothing",
                code: ``
            },

            {
                functionName: "drivebase_set_wheel_diameter",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Change wheel diameter (steering mode)",
                returns: "Nothing",
                code: ``
            },

            {
                functionName: "drivebase_set_wheel_diameter",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Change wheel diameter (steering mode)",
                returns: "Nothing",
                code: ``
            },

            {
                functionName: "drivebase_set_wheel_diameter",
                status: "text-blue-500",
                parameters: ["drivebase_id"],
                parametersTypes:["Integer (0-2)"],
                parametersDescription: ["DRIVEBASE1 -- 0, DRIVEBASE2 -- 1, DRIVEBASE3 -- 2"],
                description: "Change wheel diameter (steering mode)",
                returns: "Nothing",
                code: ``
            },
        ]
}

export default drivebase;