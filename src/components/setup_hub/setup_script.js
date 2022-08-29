export default function setup_script(hubName, writeToPort) {
    const script = `import os

ROOT = "/flash"

# Default Files
README_TXT_CODE = """This is a MicroPython board
You can get started right away by writing your Python code in 'main.py'.
For a serial prompt:
- Windows: you need to go to 'Device manager', right click on the unknown device,
then update the driver software, using the 'pybcdc.inf' file found on this drive.
Then use a terminal program like Hyperterminal or putty.
- Mac OS X: use the command: screen /dev/tty.usbmodem*
- Linux: use the command: screen /dev/ttyACM0
Please visit http://micropython.org/help/ for further help.
"""

README_TXT = {
    "name": "README.txt",
    "code": README_TXT_CODE
}

BOOT_PY_CODE = """# boot.py -- run on boot to configure USB and filesystem
# Put app code in main.py
import hub
hub.config["enable_hub_os"] = True
"""

BOOT_PY = {
    "name": "boot.py",
    "code": BOOT_PY_CODE
}

MAIN_PY = {
    "name": "main.py",
    "code": "# main.py -- Put your own code here!"
}

HEART_PY_CODE = """import button, time, motor, port, sound, display, math, util, rgb
display.display_clear()
sound.beepPlay(500, 125)
time.sleep_ms(125)
sound.beepPlay(750, 125)
# Map of Button integer keys to string descriptions
btn = {
    0:'power',
    1:'left',
    2:'right',
    3:'connect',
}
# Map of Device Types
devices = {
    "mediumMotor": 48,
    "largeMotor": 49,
    "colorSensor": 61,
    "distanceSensor": 62,
    "forceSensor": 63,
    "noDevice": 255
}
# Global variables
ports = [port.PORTA, port.PORTB, port.PORTC, port.PORTD, port.PORTE, port.PORTF]
currentPower = 0
MIN_THRESHOLD = 3000 # minimum value to power motors
MAX_THRESHOLD = 10000
def isMotor(portInput):
    return (port.port_getDevice(portInput) == devices["mediumMotor"] or port.port_getDevice(portInput) == devices["largeMotor"])
# Changes the power sent to all ports by a given value
def changePortPower(value):
    global ports, currentPower
    currentPower = adjustPowerLevel(value)
    for i in range(len(ports)):
        if (i % 2 == 0 and isMotor(i)):
            port.port_setPower(ports[i], currentPower)
        elif (isMotor(i)):
            port.port_setPower(ports[i], -currentPower)
        
# Logic for power level adjustment
def adjustPowerLevel(value):
    global currentPower
    
    if (abs(currentPower + value) > MAX_THRESHOLD):
        return currentPower
    
    # Zero power if going below the threshold value
    if (abs(currentPower + value) <= MIN_THRESHOLD and abs(currentPower) >= MIN_THRESHOLD):
        return 0
    
    # Set to threshold value if coming from below the threshold
    if (abs(currentPower) < MIN_THRESHOLD):
        print(currentPower)
        if (value > 0):
            return MIN_THRESHOLD
        return -MIN_THRESHOLD
    
    return currentPower + value
    
        
# Turns off power to all ports
def zeroPortPower():
    global ports, currentPower
    currentPower = 0
    for i in ports:
        port.port_setPower(i, 0)
        
def displayConnections():
    for i in range(len(ports)):
        if (i%2 == 0):
            if (port.port_getDevice(i) != devices["noDevice"]):
                display.display_set_pixel(0, math.floor(i),100)
                display.display_set_pixel(1, math.floor(i),100)
            else:
                display.display_set_pixel(0, math.floor(i),0)
                display.display_set_pixel(1, math.floor(i),0)
        else:
            if (port.port_getDevice(i) != devices["noDevice"]):
                display.display_set_pixel(3, i-1,100)
                display.display_set_pixel(4, i-1,100)
            else:
                display.display_set_pixel(3, i-1,0)
                display.display_set_pixel(4, i-1,0)
                
def setButtonColor(color):
    rgb.rgb_setColor(rgb.RGB_BUTTON_RIGHT, color)
    rgb.rgb_setColor(rgb.RGB_BUTTON_LEFT, color)
leftPressed, rightPressed = False, False
increment = 600
delay = 0.05
CENTER_BUTTON = 0
LEFT_BUTTON = 1
RIGHT_BUTTON = 2
async def main():
    setButtonColor(rgb.LEGO_PURPLE)
    while (button.button_isPressed(CENTER_BUTTON)[0] == 0):
        
        displayConnections()
        
        if (button.button_isPressed(LEFT_BUTTON)[0] == 0):
            leftPressed = False
        elif (not leftPressed):
            leftPressed = True
            changePortPower(-increment)
            print(currentPower)
            
        if (button.button_isPressed(RIGHT_BUTTON)[0] == 0):
            rightPressed = False
        elif (not rightPressed):
            rightPressed = True
            changePortPower(increment)
            print(currentPower)
            
        time.sleep(delay)
        
    zeroPortPower()
        
    sound.beepPlay(750, 125)
    time.sleep_ms(125)
    sound.beepPlay(500, 125)
    
    display_clear()
    setButtonColor(rgb.LEGO_GREEN)
    
    
util.run(main())"""

HEART_PY = {
    "name": "heart.py",
    "code": HEART_PY_CODE
}

MYSTERY_PY_CODE = """import sound, time
BEAT = 529 # ms per beat
notes = {
    "C": 524,
    "C#": 554,
    "D": 587,
    "D#": 622,
    "E": 659,
    "F": 698,
    "F#": 740,
    "G": 784,
    "G#": 831,
    "A": 880,
    "A#": 932,
    "B": 988,
    "C2": 1047,
    "C2#": 1109,
    "D2": 1175,
}
def playNote(frequency, length):
    sound.beepPlay(frequency, (length))
    time.sleep_ms(length)
    
def rest(length):
    time.sleep_ms(round(length))
def intro():
    global BEAT, notes
    
    # Bar 1
    playNote(notes["G"], round(BEAT*1.5))
    playNote(notes["A"], round(BEAT*1.5))
    playNote(notes["D"], (BEAT))
    
    # Bar 2
    playNote(notes["A"], round(BEAT*1.5))
    playNote(notes["B"], round(BEAT*1.5))
    playNote(notes["D2"], round(BEAT*0.25))
    playNote(notes["C2"], round(BEAT*0.25))
    playNote(notes["B"], round(BEAT*0.5))
    
    # Bar 3
    playNote(notes["G"], round(BEAT*1.5))
    playNote(notes["A"], round(BEAT*1.5))
    playNote(notes["D"], round(BEAT*2.5)) # continues to next bar
    
    # Bar 4
    rest(BEAT)
    playNote(notes["D"], round(BEAT*0.25))
    playNote(notes["D"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["G"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.25))
    
    
def body1():
    global BEAT, notes
    
    # Bar 5
    rest(BEAT)
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.5))
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.75))
    
    # Bar 6
    playNote(notes["E"], round(BEAT*0.25))
    #playNote(notes["D"], round(BEAT*0.5))
    playNote(notes["D"], round(BEAT*2.5))
    rest(BEAT)
    
    # Bar 7
    rest(BEAT*0.5)
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.5))
    playNote(notes["E"], round(BEAT))
    playNote(notes["D"], round(BEAT *0.5))
    
    # Bar 8
    playNote(notes["D2"], round(BEAT *0.5))
    rest(BEAT*0.5)
    playNote(notes["D2"], round(BEAT *0.5))
    playNote(notes["A"], round(BEAT *1.5))
    rest(BEAT)
    
    # Bar 9
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.5))
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.5))
    rest(BEAT*0.5)
    
    # Bar 10
    playNote(notes["F#"], round(BEAT*0.5))
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["D"], round(BEAT*1.5))
    rest(BEAT *0.5)
        
    
    # Bar 11
    rest(BEAT *0.5)
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.5))
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["D"], round(BEAT))
    
    # Bar 12
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["B"], round(BEAT*0.5))
    playNote(notes["A"], round(BEAT))
    rest(BEAT)
    
    # Bar 13
    playNote(notes["G"], round(BEAT*2.5))
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["B"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.5))
    
    # Bar 14
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["B"], round(BEAT*0.5))
    playNote(notes["A"], round(BEAT))
    playNote(notes["D"], round(BEAT))
    
    # Bar 15
    rest(BEAT * 2)
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.5))
    playNote(notes["E"], round(BEAT*0.5))
    
    # Bar 16
    rest(BEAT * 0.5)
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["B"], round(BEAT*0.5))
    playNote(notes["A"], round(BEAT*1.5))
    
    
def body2():
    global notes, BEAT
    
    # Bar 16
    playNote(notes["D"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["G"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    
    # Bar 17
    playNote(notes["B"], round(BEAT*0.75))
    playNote(notes["B"], round(BEAT*0.75))
    playNote(notes["A"], round(BEAT*1.5))
    playNote(notes["D"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["G"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    
    # Bar 18
    playNote(notes["A"], round(BEAT*0.75))
    playNote(notes["A"], round(BEAT*0.75))
    playNote(notes["G"], round(BEAT*0.75))
    playNote(notes["F#"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["D"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["G"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    
    # Bar 19
    playNote(notes["G"], round(BEAT))
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.75))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["D"], round(BEAT*0.5))
    playNote(notes["D"], round(BEAT*0.5))
    playNote(notes["D"], round(BEAT*0.5))
    
    # Bar 20
    playNote(notes["A"], round(BEAT))
    playNote(notes["G"], round(BEAT*2))
    playNote(notes["D"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["G"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    
    # Bar 21
    playNote(notes["B"], round(BEAT*0.75))
    playNote(notes["B"], round(BEAT*0.75))
    playNote(notes["A"], round(BEAT*1.5))
    playNote(notes["D"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["G"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    
    # Bar 22
    playNote(notes["D2"], round(BEAT))
    playNote(notes["F#"], round(BEAT*0.5))
    playNote(notes["G"], round(BEAT*0.75))
    playNote(notes["F#"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.5))
    playNote(notes["D"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["G"], round(BEAT*0.25))
    playNote(notes["E"], round(BEAT*0.25))
    
    # Bar 23
    playNote(notes["G"], round(BEAT))
    playNote(notes["A"], round(BEAT*0.5))
    playNote(notes["F#"], round(BEAT*0.75))
    playNote(notes["E"], round(BEAT*0.25))
    playNote(notes["D"], round(BEAT))
    playNote(notes["D"], round(BEAT*0.5))
    
    # Bar 24
    playNote(notes["A"], round(BEAT))
    playNote(notes["G"], round(BEAT*2))
    rest(BEAT)
    
    
    
def mystery():
    '''
    intro()
    intro()
    '''
    body1()
    body2()
    
    
mystery()"""

MYSTERY_PY = {
    "name": "mystery.py",
    "code": MYSTERY_PY_CODE
}

INIT_FILES = [README_TXT, BOOT_PY, MAIN_PY, HEART_PY, MYSTERY_PY]

# Removes if an object, removes folder if an OS Error occurs
def deleteObject(objectName):
    try:
        os.remove(objectName)
    except OSError:
        deleteFolder(objectName)
    except:
        print("An error occurred: " + objectName)
        
# Deletes all files in a folder and then deletes the folder
def deleteFolder(folderName):
    os.chdir(folderName)
    for file in os.listdir():
        deleteObject(file)
    os.chdir("..")
    os.remove(folderName)
    
# Creates a new file in the current folder
def createFile(fileName, fileContents):
    f = open(fileName, 'w')
    f.write(fileContents)
    f.close()

# Creates a new folder with a hello world program
def createDefaultFolder(folderNumber):
    strFolder = str(folderNumber)
    os.mkdir(strFolder)
    
# Changes the hub name
def changeHubName(name):
    os.chdir(ROOT + "/misc")
    f = open('hubname', 'w')
    f.write(name)
    f.close()
    os.chdir("..")
    
# Adds default files on freshly wiped hub
def addDefaultFiles(files):
    for file in files:
        createFile(file["name"], file["code"])
        
    # Creates hubname file in misc
    os.mkdir('misc')
    os.chdir('misc')
    createFile('hubname', 'SPIKE')
    os.chdir("..")
    
def initSlots(numberOfSlots):
    os.chdir("/flash")
    for i in range(numberOfSlots):
        createDefaultFolder(i)
        
def addHeartProgram(slotNumber):
    slotStr = str(slotNumber)
    os.chdir(slotStr)
    f = open('program.py', 'w')
    f.write('exec(open("' + ROOT + '/heart.py").read())')
    f.close()
    os.chdir("..")
        
        
def setup(hubName):
    # Step 1: Get all files on hub 
    os.chdir(ROOT)
    rootFiles = os.listdir()
    
    # Step 2: Delete all files/folders (wipe file system)
    for path in rootFiles:
        deleteObject(path)
        
    # Step 3: Reload default files onto hub
    addDefaultFiles(INIT_FILES)
    initSlots(10)
    
    # Step 4: Set Hub Name
    changeHubName(hubName)
    
    # Step 5: Load other default Programs
    addHeartProgram(0)
    
    
setup("SPIKE")
changeHubName("${hubName}")`;

    writeToPort(['\x05']);
    writeToPort(script);
    writeToPort(['\x04']);

}