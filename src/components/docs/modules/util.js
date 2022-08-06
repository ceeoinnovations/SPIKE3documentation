const util = {
    moduleName: "util",
    functions: [
        
        {
            functionName: "run",
            status: "text-yellow-500",
            parameters: ["listIterator"],
            parametersTypes:["Iterator"],
            parametersDescription: ["An iterator"],
            description: "Runs a function",
            returns: "Nothing",
            code: `import util
async def main():
    # user program goes here

util.run(main()) 
            `
        },

        {
            functionName: "wait_for_time",
            status: "text-yellow-500",
            parameters: ["ms"],
            parametersTypes:["Integer"],
            parametersDescription: ["Milliseconds to stall program"],
            description: "Waits for a given number of milliseconds. Async function, use with await statement.",
            returns: "Nothing",
            code: `import util

async def main():
    await util.wait_for_time(1000)
    print("1 second has passed")
    await util.wait_for_time(4000)
    print("5 seconds have passed")

util.run(main()) 
            `
        },


    ]
}

export default util;