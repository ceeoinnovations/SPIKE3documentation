function generateCodeBox(rawCode) {
    const rawCodeArray = (rawCode).split("\n");
    return (
        rawCodeArray.map((element, index) => {
            return(<pre data-prefix={index + 1}><code>{element}</code></pre>)
        })
    );
}

function getParametersInfoArray(func) {
    let infoArray = [];
    try {
        for (let i = 0; i < func.parameters.length; i++) {
            infoArray.push([func.parameters[i], func.parametersTypes[i], func.parametersDescription[i]]);
        }
    }
    catch(e) {
        console.error(e);
    }
    
    return infoArray;
}

export {generateCodeBox, getParametersInfoArray};