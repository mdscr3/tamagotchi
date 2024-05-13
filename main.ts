input.onButtonPressed(Button.A, function () {
    knuffel += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let knuffel = 20
let voeding = 20
let dood = 0
loops.everyInterval(1000, function () {
    voeding += -1
    knuffel += -1
})
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (knuffel < 10 && knuffel > 0 && (voeding < 10 && voeding > 0)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (knuffel < 0 && voeding < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
