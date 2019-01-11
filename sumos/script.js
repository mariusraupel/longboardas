const CUBES = document.querySelectorAll('.a .cube')
const CUBES1 = document.querySelectorAll('.b .cube')
var MainSum = document.querySelector('.sum')

var chosenGrip = 0;
var chosenTexture = 0;
var sum = 0;
var boardPrice = 0;
console.log(CUBES);

for (let i = 0; i < CUBES.length; i++) {
    const CUBE = CUBES[i];

    CUBE.addEventListener('click', function (a) {

        var value = parseFloat(a.target.dataset.texture)
        chosenTexture = value;
        sum = chosenGrip + chosenTexture + boardPrice;
        MainSum.textContent = sum + '$'
    })
}
for (let i = 0; i < CUBES1.length; i++) {
    const CUBE1 = CUBES1[i];

    CUBE1.addEventListener('click', function (a) {

        var value = parseFloat(a.target.dataset.grip)
        chosenGrip = value;
        sum = chosenGrip + chosenTexture + boardPrice;
        MainSum.textContent = sum + '$'

    })
}
window.addEventListener('load', function () {
const boardImg = document.querySelector('.aaa')
boardPrice = parseFloat(boardImg.dataset.board)
MainSum.textContent = boardPrice;
})
