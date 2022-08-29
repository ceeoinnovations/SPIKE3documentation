const sound = {
    moduleName: "sound",
    functions: [
        {
            functionName: "soundPlay",
            status: "text-red-500",
            parameters: ["sound"],
            parametersTypes:["Object"],
            parametersDescription: ["File Path?"],
            description: "Plays a sound from the file system?",
            returns: "Nothing",
            code: `import sound
sound.soundPlay("Some Sound")`
        },

        {
            functionName: "beepPlay",
            status: "text-blue-500",
            parameters: ["beepFrequency", "time"],
            parametersTypes:["Integer", "Integer"],
            parametersDescription: ["Frequency of the beep sound", "Length of beep (in ms)"],
            description: "Plays a beep sound off of the SPIKE Hub",
            returns: "Nothing",
            code: `import sound
sound.beepPlay(500, 1000)`
        },

        {
            functionName: "soundStop",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Stops playing any hub sounds/beeps",
            returns: "Nothing",
            code: `# Stops a beepPlay early
import sound 

sound.beepPlay(500, 5000)
            
time.sleep(1)
            
sound.soundStop()`
        },

        {
            functionName: "soundPause",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Stops playing any hub sounds/beeps",
            returns: "Nothing",
            code: `# Stops a beepPlay early
import sound 

sound.beepPlay(500, 5000)
            
time.sleep(1)
            
sound.soundStop()`
        },
    ],

    constants: []
}
    

export default sound;