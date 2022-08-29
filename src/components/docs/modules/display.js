const display = {
    moduleName: "display",
    functions:
        [
            {
                functionName: "display_clear",
                status: "text-blue-500",
                parameters: [],
                parametersTypes:[],
                parametersDescription: [],
                description: "Turn off all pixels on the 5x5 matrix display",
                returns: "Nothing",
                code: `import display

# Clears hub display 
display.display_clear()`
            },

            {
                functionName: "display_set_pixel",
                status: "text-yellow-500",
                parameters: ["column", "row", "brightness"],
                parametersTypes:["Integer (0-4)", "Integer (0-4)", "Integer (0-100)"],
                parametersDescription: ["Pixel column (x-value)","Pixel row (y-value)", "Pixel brightness (percentage out of 100)" ],
                description: "Turns on pixel on 5x5 matrix display to desired brightness",
                returns: "Nothing",
                code: `import display

# Turns on pixel in column 1, row 1, to 100% brightness
display.display_set_pixel(1,1,100)`
            },

            {
                functionName: "display_text_for_time",
                status: "text-yellow-500",
                parameters: ["text", "duration", "brightness"],
                parametersTypes:["String", "Integer (milliseconds)", "Integer (0-100)"],
                parametersDescription: ["Text to be displayed", "Duration of display", "Brightness of text (percentage out of 100)"],
                description: "Write and display a text string on the 5x5 matrix display for a duration with a brightness",
                returns: "Nothing",
                code: `import display

# Write "Hi There" on the 5x5 display.
# Make the animation take 2 seconds.
# Set the brightness of each letter to 100
display.display_text_for_time("Hi There", 2000, 100)`
            },

            {
                functionName: "display_get_pixel",
                status: "text-blue-500",
                parameters: ["column", "row"],
                parametersTypes:["Integer (0-4)", "Integer (0-4)"],
                parametersDescription: ["Pixel column (x-value)", "Pixel row (y-value)"],
                description: "Checks brightness percentage level of a pixel on 5x5 matrix display",
                returns: "Integer (0-100)",
                code: `import display

# Turns on pixel in column 1, row 1, to 73% brightness
display.display_set_pixel(1,1,73)

# Checks brightness percentage level of pixel in column 1, row, 1
# Should return 73
display.display_get_pixel(1,1)`

            },

            {
                functionName: "display_show_image",
                status: "text-blue-500",
                parameters: ["Byte Object"],
                parametersTypes:["Bytes"],
                parametersDescription: ["String of bytes representing on (d) and off (\x00) pixels"],
                description: "Displays an image on the hub using a string of pixel inputs",
                returns: "Nothing",
                code: `import display

# Displays the number 12 on the hub
display.display_show_image(NUMBER_12)`

            },

            {
                functionName: "display_invert",
                status: "text-blue-500",
                parameters: [],
                parametersTypes:[],
                parametersDescription: [],
                description: "Inverts all hub pixels, turns all active pixels off and turns all off pixels on.",
                returns: "Nothing",
                code: `import display

display.display_invert()`

            },

            {
                functionName: "display_show_pictogram",
                status: "text-blue-500",
                parameters: ["pictogram_key"],
                parametersTypes:["Integer (0-66)"],
                parametersDescription: ["Pictorgram key, see docs in code sample"],
                description: "Shows an image of an object, for numbers see display_show_image",
                returns: "Nothing",
                code: `import display
# What numbers map to each pictorgram? Read the docs below!
# https://docs.google.com/document/d/1m2BSe43-q8vxN7as5mN_ojofSZisrvGawrcCIzOj-eI/

# Shows a heart
display.display_show_pictogram(1)`

            },

            {
                functionName: "display_set_orientation",
                status: "text-blue-500",
                parameters: ["angle"],
                parametersTypes:["Integer (0, 90, 180, or 270)"],
                parametersDescription: ["Angle to rotate an image on the hub"],
                description: "Rotates the hub display to a specific degree value (must be a multiple of 90)",
                returns: "Nothing",
                code: `import display

display.display_set_orientation(90)`

            },

            {
                functionName: "display_show_image",
                status: "text-yellow-500",
                parameters: ["image"],
                parametersTypes:["Object"],
                parametersDescription: ["Object with buffer protocol"],
                description: "Shows an image?",
                returns: "Nothing",
                code: `import display

display.display_show_image("Some Image")`

            },




        ],

    constants: [
        "DISPLAY_SHOWING -- 0",
        "DISPLAY_SUCCESS -- 1",
        "DISPLAY_ABORTED -- 2"
    ]
}

export default display;