input.onButtonPressed(Button.AB, function () {
    basic.showString("Base menor=")
    basic.showNumber(base_menor)
    basic.showString("Base mayor=")
    basic.showNumber(base_mayor)
    basic.showString("Altura=")
    basic.showNumber(altura)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio=")
    area_del_trapecio = (base_mayor + base_menor) / 2 * altura
    basic.showNumber(area_del_trapecio)
})
let area_del_trapecio = 0
let altura = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Michelle Cantu A01285327")
base_mayor = 20
base_menor = base_mayor * (3 / 5)
altura = randint(1, 200)
