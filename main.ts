input.onButtonPressed(Button.A, function () {
    voeding = 0
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let voeding = 0
let knuffel = 20
voeding = 20
let dood = 0
loops.everyInterval(1000, function () {
    voeding += -1
    knuffel += -1
})
basic.forever(function () {
    if (knuffel > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (knuffel < 10 && knuffel > 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffel < 0) {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    if (voeding > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (voeding < 10 && voeding > 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (voeding < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
