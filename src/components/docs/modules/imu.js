const imu = {
    moduleName: "imu",
    functions: 
    [
        {
            functionName: "getTemperature",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns the temperature of the SPIKE Hub",
            returns: "Integer Temperature (in Kelvin)",
            code: `import imu

imu.getTemperature()`
        },

        {
            functionName: "getAcceleration",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Gets the acceleration state of the SPIKE Hub",
            returns: "Length 6 Tuple with hub integer acceleration values?",
            code: `import imu

imu.getAcceleration()`
        },

        {
            functionName: "getGyro",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns the hub gyroscope values",
            returns: "Length 6 Tuple with Integer gyro position values",
            code: `import imu

imu.getGyro()`
        },

        {
            functionName: "getOrientation",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Gets orientation of the SPIKE Hub",
            returns: "Length 4 Tuple with Integer orientation values (yaw, pitch, roll, hubFace)",
            code: `import imu

imu.getOrientation()`
        },

        {
            functionName: "getUpFace",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns which face on the SPIKE Prime is face-up",
            returns: "Integer corresponding to a SPIKE Hub position",
            code: `import imu

faces = {
    0:'HUB_FACE_TOP',
    1:'HUB_FACE_FRONT',
    2:'HUB_FACE_RIGHT',
    3:'HUB_FACE_BOTTOM',
    4:'HUB_FACE_BACK',
    5:'HUB_FACE_LEFT',
}

faces[imu.getUpFace()]`
        },

        {
            functionName: "stable",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Checks if the SPIKE Prime Hub is in a stable position (not moving)",
            returns: "1 if stable, 0 otherwise",
            code: `import imu

imu.stable()`
        },

        {
            functionName: "getQuaternion",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Gets the Quaternion representation of the SPIKE Hub's orientation",
            returns: "Length 4 Tuple with Float Quaternion values (x, y, z, w)",
            code: `import imu

imu.getQuaternion()`
        },

        {
            functionName: "getGesture",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Gets the current gesture state from the hub",
            returns: "Length 3 Tuple with Integer values (?, ?, numberOfTapsOnHub)",
            code: `import imu

imu.getGesture()`
        },

        {
            functionName: "setImpact",
            status: "text-blue-500",
            parameters: ["arg1"],
            parametersTypes:["Integer"],
            parametersDescription: ["An unknown setImpact value"],
            description: "Unknown",
            returns: "A boolean value (True/False)",
            code: `# No Code Example Avaliable`
        },

        {
            functionName: "setImpactConfig",
            status: "text-blue-500",
            parameters: ["arg1", "arg2"],
            parametersTypes:["Integer", "Integer"],
            parametersDescription: ["An unknown setImpact value"],
            description: "Unknown",
            returns: "True if arg1 is positive, False otherwise",
            code: `# No Code Example Avaliable`
        },

        {
            functionName: "setOrientationYawFace",
            status: "text-blue-500",
            parameters: ["IMU_FACE_CODE"],
            parametersTypes:["Integer (0-5), see imu.getOrientation"],
            parametersDescription: ["A face code to orient the yaw axis around"],
            description: "Sets the yaw axis to a given hub face",
            returns: "True if the face code is valid, False otherwise",
            code: `import imu

imu.setOrientationYawFace(1)`
        },

        {
            functionName: "zeroOrientation",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Sets the current hub position as the zero point for yaw/pitch/roll values",
            returns: "Nothing",
            code: `import imu

imu.zeroOrientation()`
        },

        {
            functionName: "setYawValue",
            status: "text-blue-500",
            parameters: ["position"],
            parametersTypes:["Integer"],
            parametersDescription: ["A degree position of the hub"],
            description: "Sets the yaw value of the hub to a given degree value",
            returns: "Nothing",
            code: `import imu

imu.setYawValue(90)`
        }
    ],

    constants: [
        "HUB_FACE_TOP -- 0",

        "HUB_FACE_FRONT -- 1",

        "HUB_FACE_RIGHT -- 2",

        "HUB_FACE_BOTTOM -- 3",

        "HUB_FACE_BACK -- 4",

        "HUB_FACE_LEFT -- 5",

        "HUB_FACES -- 6"
    ]
}

export default imu;