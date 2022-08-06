const hub = {
    moduleName: "hub",
    functions: 
    [
        {
            functionName: "getBatteryVoltage",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns voltage of battery (mV)",
            returns: "Integer",
            code: `import hub

# Get battery voltage (mV)  
getBatteryVoltage`
        },

        {
            functionName: "getBatteryTemperature",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns battery temperature (K)",
            returns: "Integer",
            code: `import hub

# Get battery temperature (K)  
hub.getBatteryTemperature()`
        },


        {
            functionName: "getBatteryCurrent",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns battery current (mA)",
            returns: "Integer",
            code: `import hub

# Get battery current (mA)  
hub.getBatteryCurrent()`
        },

        {
            functionName: "getUSBChargeCurrent",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns USB charge current (mA)",
            returns: "Integer",
            code: `import hub

# Get USB charge current (mA)  
hub.getUSBChargeCurrent()`
        },


        {
            functionName: "getPortVoltage",
            status: "text-red-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns (??)",
            returns: "Integer",
            code: `import hub

# Get port voltage (??)  
hub.getPortVoltage()`
        },


        {
            functionName: "getHardwareID",
            status: "text-yellow-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns hardware ID (what does this mean??)",
            returns: "String",
            code: `import hub

# Get hardware ID (??)  
hub.getHardwareID()`
        },

        {
            functionName: "device_uuid",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns device UUID",
            returns: "String",
            code: `import hub

# Get device UUID 
hub.device_uuid()`
        },




    ]

}

export default hub