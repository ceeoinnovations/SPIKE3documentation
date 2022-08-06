const jsonExamples = [
    {
        title: "Color Matrix",
        code: `import color_matrix
import port,time

p1 = port.PORTE

colors = {
    0:"LEGO_BLACK",
    1:"LEGO_MAGENTA",
    2:"LEGO_PURPLE",
    3:"LEGO_BLUE",
    4:"LEGO_AZURE",
    5:"LEGO_TURQUOISE",
    6:"LEGO_GREEN",
    7:"LEGO_YELLOW",
    8:"LEGO_ORANGE",
    9:"LEGO_RED",
    10:"LEGO_WHITE",
    11:"LEGO_DIM_WHITE",
    }

color_matrix.clear(4)  # clears all (why 4?)
(row, col, brightness) = (2, 0, 10)
color_matrix.set_pixel(p1, col, row, LEGO_RED, brightness)

led = []
for color in colors:
    led.append((brightness << 4) + color)
color_matrix.set_pixels(p1, bytes(led))

# make sure to convert to list to bytes`
    },

    {
        title: "Color Sensor",
        code: `import color_sensor
import port

light = port.PORTC

# Get color - see Defines.py for the list of colors
colors = {
    -1:'ERR',
    0:"LEGO_BLACK",
    1:"LEGO_MAGENTA",
    2:"LEGO_PURPLE",
    3:"LEGO_BLUE",
    4:"LEGO_AZURE",
    5:"LEGO_TURQUOISE",
    6:"LEGO_GREEN",
    7:"LEGO_YELLOW",
    8:"LEGO_ORANGE",
    9:"LEGO_RED",
    10:"LEGO_WHITE",
    11:"LEGO_DIM_WHITE",
    }

colors[color_sensor.get_color(light)]
color_sensor.get_reflection(light)
color_sensor.get_rgbi(light)  #RGBI`
    },

    {
        title: "Distance",
        code: `import distance_sensor as ds
import port,time

p1 = port.PORTB

# Get distance from object of distance sensor connected to port A
for i in range(100):
    print(ds.get_distance(p1))
    time.sleep(0.1)
    
ds.clear(p1)

max_bright = 100
ds.set_pixels(p1, bytes([max_bright]*4))

(row,col) = (1,0)
ds.get_pixel(p1,row,col)
ds.set_pixel(p1,row,col,80)

for b in range(100):
    ds.set_pixels(p1, bytes([b]*4))
    time.sleep(0.1)`
    },

    {
        title: "Force Sensor",
        code: `import force_sensor as fs
import port,time

p1 = port.PORTA

fs.get_touch(p1)

while True:
    print(fs.get_force(p1))
    time.sleep(0.1)`
    },

    {
        title: "Hub Buttons",
        code: `import button
import time

fred = button.button_isPressed(button.BUTTON_RIGHT)
if fred[0]:   # fred is (0 or 1,time)
    print('pressed for %d msec'% (fred[1]))

if fred > (1,2000):
    print('let go of the button')
    
btn = {
    0:'power',
    1:'left',
    2:'right',
    3:'connect',
    }

while True:
    for press in btn:
        if button.button_isPressed(press)[0]:
            print('The %s button is pressed' % btn[press])
    time.sleep(0.1)
            `
    },

    {
        title: "Hub Display",
        code: `import display, time

display.display_clear()

(row,col,bright) = (1,2,100)
display.display_set_pixel(col,row,bright)
print(display.display_get_pixel(row,col))
display.display_text_for_time('fred',1000,100)  # sort of works


#display.display_invert() not working
#display.display_set_orientation(90) not working
#display.display_show_pictogram(3) not working`
    },

    {
        title: "Hub IMU",
        code: `import imu

faces = {
    0:'HUB_FACE_TOP',
    1:'HUB_FACE_FRONT',
    2:'HUB_FACE_RIGHT',
    3:'HUB_FACE_BOTTOM',
    4:'HUB_FACE_BACK',
    5:'HUB_FACE_LEFT',
    }

imu.getTemperature()
imu.getGesture()
imu.getGyro()
faces[imu.getUpFace()]
imu.getQuaternion()
imu.getOrientation()
imu.getAcceleration()
#imu.setImpact()
#setOrientationYawFace()
#setYawValue()`
    },

    {
        title: "Hub Stuff",
        code: `import hub

hub.config
hub.device_uuid()
hub.getHardwareID()
hub.getBatteryTemperature()
hub.getBatteryCurrent()
hub.getBatteryVoltage()
hub.getPortVoltage()

'''
not working
hub.getgetCurrSlotProgram()
hub.startSlotProgram
'''`
    },

    {
        title: "Motors",
        code: `import motor, port

(p1,p2) = (port.PORTD, port.PORTF)

position = port.port_getSensor(p2)[1]
speed = port.port_getSensor(p2)[0]
angle = port.port_getSensor(p2)[2]

motor.motor_move_by_degrees(p1, 180, 2000)
motor.motor_move_by_degrees(p2, 180, 2000)

power = 1000
speed = 1000
motor.motor_move_at_power(p1, power)
motor.motor_move_at_speed(p1, speed)
duration = 1000
motor.motor_move_for_time(p1, duration, speed,motor.MOTOR_END_STATE_BRAKE)
degrees = 360
motor.motor_move_by_degrees(p1, speed, degrees, motor.MOTOR_END_STATE_HOLD)
motor.motor_move_to_position(p1, speed, degrees,motor.MOTOR_END_STATE_FLOAT)
motor.motor_move_to_absolute_position(p1, speed, degrees,
            motor.MOTOR_MOVE_DIRECTION_CCW,
            motor.MOTOR_END_STATE_HOLD)

motor.motor_stop(p1)

motor.motor_move_for_time((p1, p2), speed, duration)
motor.motor_move_for_time((p1, p2), (1000, 4000),
        (5000, 2000),motor.MOTOR_END_STATE_FLOAT)

#motor.motor_move_for_time(p1, speed, duration,
#                        endstate = motor.MOTOR_END_STATE_BRAKE,
#                        defer= True )

import util

async def main():
    await motor.motor_move_by_degrees(p1, 180, 2000,motor.MOTOR_END_STATE_FLOAT)
    motor.motor_move_by_degrees(p2, 180, 2000,motor.MOTOR_END_STATE_FLOAT)

util.run(main())`
    },

    {
        title: "Simple Parallel",
        code: `import util
import motor
import port
import display

(p1,p2) = (port.PORTD,port.PORTF)

async def motor_stack():
    degrees = 180
    speed = 1000
    await motor.motor_move_by_degrees(p1, degrees, speed)
    await motor.motor_move_by_degrees(p2, degrees, speed,motor.MOTOR_END_STATE_FLOAT)
    await motor.motor_move_by_degrees(p1, -1 * degrees, speed,motor.MOTOR_END_STATE_FLOAT)
    
async def hub_pixel_stack():
    display.display_set_pixel(1,1, 100)
    await util.wait_for_time(2000)
    display.display_clear()
    await util.wait_for_time(1000)
    display.display_set_pixel(2,2, 100)
    
util.run(motor_stack(), hub_pixel_stack())`
    },

    {
        title: "Smart Motor",
        code: `'''
SmartMotor

Run this program then move the motor and cover 
the light sensor and hit the right button for each training point.
When you are done, hit the center button - the motor should
move to the closest training point.  Hit the center button
again to stop.
'''

import hub, utime, port
import color_sensor, display, sound, motor, button

ledBright = 7
motorSpeed = 5000

class SmartPlot():
    def __init__(self, motorPort, lightPort):
        self.motorPort = motorPort
        self.angle = lambda : port.port_getSensor(motorPort)[2]
        self.light = lambda :color_sensor.get_reflection(lightPort)
        self.beep = sound.beepPlay
#        self.led = hub.led
        self.clearscreen = display.display_clear
        self.pixel = display.display_set_pixel
        self.save = lambda : button.button_isPressed(button.BUTTON_RIGHT)[0]
        self.done = lambda : button.button_isPressed(button.BUTTON_ON_OFF)[0]
        self.quit = lambda : button.button_isPressed(button.BUTTON_LEFT)[0]
        self.training = []

    def Setup(self):
        self.beep()
        self.clearscreen()
        return
            
    def Map(self,x=-1,y=-1,bar = True):
        X,Y=0,0
        self.clearscreen()
        for (a,l) in self.training:
            Y = round(l /100 * 4)
            X = round((a + 180) / 360 * 4)
            X = 5-X if X < 0 else X
            if bar:
                for i in range(5):
                    self.pixel(i,Y,50)
                    self.pixel(X,i,50)
            self.pixel(X,Y,ledBright)
        if (x<0):
            return
        Y = round(x /100 * 4)
        X = round((y + 180) / 360 * 4)
        X = 5-X if X < 0 else X
        self.pixel(X,Y,90)

    def Train(self):
#        self.led(3)
        self.Map()   
        while not self.done():
            while not self.save() and not self.done(): 
                if self.quit():   #did they want to quit?
                    return 
                utime.sleep(.1) # debounce 
                self.Map(self.light(),self.angle())
            if not self.done():
                angle = self.angle()
                print(angle)
                bright = self.light()
                while self.save():
                    utime.sleep(.1)
                self.training.append((angle,bright))
                print('(%d,%d)'%(angle,bright))
        while self.done(): 
            utime.sleep(.1) # debounce        
        self.beep()
#        self.led(0)
        self.clearscreen()
        
    def Run(self):
#        self.led(2)
        self.Map()   
        # grab reading
        while not self.done():
            if self.quit():
                return  #did they want to quit?
            bright = self.light()
            min = 1000
            pos = 0
            for (a, l) in self.training:
                dist = abs(bright - l)
                if dist < min:
                    min = dist
                    pos = a
            self.Map(bright,pos)
            motor.motor_move_to_position(self.motorPort, motorSpeed, pos, motor.MOTOR_END_STATE_HOLD)
            utime.sleep(.1)
            #print('(%d,%d)'%(pos,bright)) 
        while self.done(): 
            utime.sleep(.1) # debounce     
        self.beep()
#        self.led(0)
        self.clearscreen()

SP = SmartPlot(port.PORTF,port.PORTC)

SP.Setup()
while not SP.quit():
    SP.Train()
    SP.Run()
SP.beep()
#SP.led(10)
SP.clearscreen()
motor.motor_stop(SP.motorPort)

# hub.power_off()`
    },

    {
        title: "Sound",
        code: `import sound
        
sound.beepPlay()

#sound.soundPlay(440) will crash the brick`
    },

    {
        title: "Twinkle Twinkle",
        code: `import time, sound

def playNote(frequency, length):
    sound.beepPlay(frequency, length)
    time.sleep_ms(length)

def twinkle(length):
    
    playNote(523, length) # C
    playNote(523, length)
    playNote(784, length) # G
    playNote(784, length) 
    playNote(880, length) # A
    playNote(880, length)
    playNote(784, length * 2) # G
    
    playNote(699, length) # F
    playNote(699, length)
    playNote(660, length) # E
    playNote(660, length)
    playNote(587, length) # D
    playNote(587, length)
    playNote(523, length * 2) # C
    
    playNote(784, length) # G
    playNote(784, length) # G
    playNote(699, length) # F
    playNote(699, length) # F
    playNote(660, length) # E
    playNote(660, length) # E
    playNote(587, length * 2) # D
    
    playNote(784, length) # G
    playNote(784, length) # G
    playNote(699, length) # F
    playNote(699, length) # F
    playNote(660, length) # E
    playNote(660, length) # E
    playNote(587, length * 2) # D
    
    playNote(523, length) # C
    playNote(523, length)
    playNote(784, length) # G
    playNote(784, length) 
    playNote(880, length) # A
    playNote(880, length)
    playNote(784, length * 2) # G
    
    playNote(699, length) # F
    playNote(699, length)
    playNote(660, length) # E
    playNote(660, length)
    playNote(587, length) # D
    playNote(587, length)
    playNote(523, length * 2) # C
    
    
twinkle(400)`

    },

    {
        title: "Template",
        code: `import util

async def main():
    # user program goes here
    
    
util.run(main())`
    }

    

    
]

export default jsonExamples;