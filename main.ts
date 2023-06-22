basic.showIcon(IconNames.Duck)
let Count = 1
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    while (pins.digitalReadPin(DigitalPin.P2) == 1 && false) {
        serial.writeLine("Pin 2 has charge!")
    }
})
