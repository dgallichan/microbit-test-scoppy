input.onButtonPressed(Button.A, function () {
    thisVal = Math.constrain(thisVal - 100, 0, 1023)
})
input.onButtonPressed(Button.B, function () {
    thisVal = Math.constrain(thisVal + 100, 0, 1023)
})
let thisVal = 0
basic.showIcon(IconNames.House)
thisVal = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, Math.map(input.rotation(Rotation.Pitch), -90, 90, 0, 1023))
    pins.analogWritePin(AnalogPin.P2, thisVal)
    basic.pause(500)
})
