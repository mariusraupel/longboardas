var boardImages = document.querySelectorAll('.twenty img.full-width');
var boardWindows = document.querySelectorAll('.twenty');


//hover menu
var HoverMenu = document.querySelector('.hover-menu')
var HoverIcon = document.querySelectorAll('.search1')
const HoverCancel = document.querySelector('.hover-menu .hover-cancel');


HoverIcon[1].addEventListener('click', function () {
    HoverMenu.classList = 'hover-menu'
})

HoverCancel.addEventListener('click', function () {
    HoverMenu.classList = 'hidden'
})

//apie mus
var arrows = document.querySelectorAll('.about-us-box img');
var aboutUs = document.querySelector('.about-us');
var OFhidden = document.querySelector('.of-hid');
var textBox = document.querySelectorAll('.object1')
var dots = document.querySelectorAll('.balls .balll')
var windowX = OFhidden.offsetWidth;


textBox.forEach(element => {
    element.style.width = windowX + 'px'

});

var margin = 0;
var dotI = 0;

dots[dotI].style.backgroundColor = "rgb(150, 150, 150)"

arrows[1].addEventListener('click', () => {
    if (dotI < 2) {

        dotI++;

        dots.forEach(i => {
            i.style.backgroundColor = "white"
        });

        dots[dotI].style.backgroundColor = "rgb(150, 150, 150)";

        margin -= windowX ;
        aboutUs.style.marginLeft = margin + 'px';
    }
})

arrows[0].addEventListener('click', () => {
    if (dotI > 0) {

        dotI--;

        dots.forEach(i => {
            i.style.backgroundColor = "white"
        });

        dots[dotI].style.backgroundColor = "rgb(150, 150, 150)";

    margin += windowX ;
    aboutUs.style.marginLeft = margin + 'px';
    }
})




boardWindows[0].addEventListener('mouseover', function () {
    boardImages[0].src = "models/boardup.png"

})
boardWindows[0].addEventListener('mouseout', function () {
    boardImages[0].src = "models/example.png"

})





