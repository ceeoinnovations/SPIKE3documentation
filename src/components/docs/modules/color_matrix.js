const colorMatrix = {
    moduleName: "color_matrix",
    functions:
        [
            {
                functionName: "get_pixel",
                status: "text-yellow-500",
                parameters: ["arg1", "agr2", "arg3"],
                parametersTypes:["Integer", "Integer", "Integer"],
                parametersDescription: ["?", "?", "?"],
                description: "Get some pixel information. Use display.display_get_pixel instead.",
                returns: "(Integer, Integer)",
                code: `import color_matrix

color_matrix.get_pixel(1, 2, 2)`

            },

            {
                functionName: "set_pixel",
                status: "text-yellow-500",
                parameters: ["port", "x", "y", "lego color", "brightness"],
                parametersTypes:["Integer", "Integer (0-2)", "Integer (0-2)", "Integer", "Integer (0-10)"],
                parametersDescription: ["Integer representing port on hub. Use portmodule.", "The horizontal position of the pixel to light up", "The vertical position of the pixel to light up", "What color to show in the LED. See Color sensor for colors.", "How bright should the LED light up"],
                description: "Set a color on a specific pixel with a given brightness.",
                returns: "Nothing",
                code: `import color_matrix
Set the center pixel to red with max brightness
color_matrix.set_pixel(port.PORTA, 1,1, LEGO_RED, 10)`

            },

            {
                functionName: "set_pixels",
                status: "text-yellow-500",
                parameters: ["port", "light_info_for_all_pixels"],
                parametersTypes:["Integer", "Int (0-2)"],
                parametersDescription: ["Integer representing port on hub. Use portmodule.", "A byte list with information about how to light up each pixel."],
                description: "Set all pixels on a color matrix at once.",
                returns: "Nothing",
                code: `import color_matrix
# Light up all pixels in RED with max brightness
brightness = 10
color = LEGO_RED
# generate a list with same setting for each of the 9 pixels.
led_info_list = [(brightness << 4) + color] * 9
# make sure to convert to list to bytes
color_matrix.set_pixel(port.PORTA, bytes(led_info_list))`

            },

            {
                functionName: "clear",
                status: "text-yellow-500",
                parameters: ["port"],
                parametersTypes:["Integer"],
                parametersDescription: ["Integer representing port on hub. Use port module."],
                description: "Turn off all pixels on the matrix display on any given port",
                returns: "Nothing",
                code: `import color_matrix
import port
color_matrix.clear(port.PORTA)`

            },


        ]

}

export default colorMatrix;