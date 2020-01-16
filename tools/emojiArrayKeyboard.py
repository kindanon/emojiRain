from pynput.keyboard import Key, Controller, Listener
import time

keyboard = Controller()

def tmp():
    #first quote
    keyboard.press('"')
    time.sleep(.001)
    keyboard.release('"')
    time.sleep(.001)

    #right arrow
    keyboard.press(Key.right)
    time.sleep(.001)
    keyboard.release(Key.right)
    time.sleep(.001)

    #last quote
    keyboard.press('"')
    time.sleep(.001)
    keyboard.release('"')
    time.sleep(.001)

    #comma
    keyboard.press(',')
    time.sleep(.001)
    keyboard.release(',')
    time.sleep(.001)

time.sleep(5)
while(1):
    tmp()