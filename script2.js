// menu
var HoverMenu = document.querySelector('.hover-menu');
var HoverIcon = document.querySelector('.icons2 .hover');
const HoverCancel = document.querySelector('.hover-menu .hover-cancel');
const button = document.querySelectorAll('.this');
const menu = document.querySelectorAll('.hundered div .table1');
const menuFirst = document.querySelector('.hundered div .table1');
var img = document.querySelectorAll('.hundered div .this img');
const dropNone = document.querySelector('.table1 .dropnone');
var surinktaE = document.querySelectorAll('.surinkimas option');



//griptape
const grip1 = document.querySelectorAll('.onehundered .firsto');
const griptable = document.querySelector('.flex div.onehundered')
const gripmain = document.querySelector('.bordo2 img.zindex3');
var gripfirst = document.querySelector('.flex .onehundered .firsto')
const arrow2 = document.querySelector(' img.arrow2')
const arrow = document.querySelector(' img.arrow')
var number = document.querySelectorAll('.firsto .number');


//apacia lentos
var numero = document.querySelectorAll('.apacia .numero')
const arro1 = document.querySelector('.flex .first .firsto')
const arro2 = document.querySelector('.flex .first .second')
var apaciatable = document.querySelector('.flex .apacia')
var apaciaBoard = document.querySelector('.bordo .flex .apacia1')
var bottomImages = document.querySelectorAll('.apacia .bottom-img')
const apaciaMains = document.querySelectorAll('.table1 .fonai2 ');
const apaciaTables = document.querySelectorAll('div .fonai');
const apaciaArrows = document.querySelectorAll('div .fonai img.iconplay');
var ratukaiIMG = document.querySelector('.ratukaiBORDER img')

//maketuojama lenta
var texture = document.querySelector('.bordo img.zindex2');
var texture2 = document.querySelector('.bordo2 img.zindex2');
var drop = document.querySelector('.bordo img.droptru');
var drop2 = document.querySelector('.bordo2 img.droptru');
const fixed = document.querySelector('.sixty')

//kainos
var boardImg = document.querySelector('.bordo .boardpng')
var boardImg2 = document.querySelector('.bordo2 .boardpng2')
var MainSum = document.querySelector('.table1 .left-sum .sum')
var chosenGrip = 0;
var chosenBottom = 0;
var boardPrice = 0;
var chosenWood = 0;

var trucks = 0;
var wheels = 0;
var bearings = 0;
var sum = 0;
const boardName = window.location.search.split('?')[1];

const mainArray = {
    lenta: '', mediena: 'klevas', dropTrough: 'nera', WidthHeight: ''
    , apaciaNr: '1', gripNr: '1', asys: 'nera', ratukai: 'nera'
    , guoliai: 'nera', surinkimas: 'surinkta'
}
// var option;


// isklotine
var items = document.querySelectorAll('.hundered-width .items')
const hidButton = document.querySelector('.right-done .display');
const isklotine = document.querySelector('.hundered-width')



// ant loado




if (boardName === 'Untitled-1') {
    menuFirst.insertAdjacentHTML('beforeend', '<div class="flex"> <p class="description word-spacing parameter">RIEDLENTĖS PLOTIS, ILGIS - 25*100cm</p> <img class="info fl marg" src="icons/information.png"</div>');
    mainArray.lenta = '1'
    mainArray.WidthHeight = '25*100cm'
    boardPrice = 102;
    MainSum.textContent = boardPrice + '.oo€';
    items[3].textContent = '25*100cm'
    items[0].textContent = 'Simetrinė, Double kicktail forma'

}
else if (boardName === 'Untitled-2') {
    menuFirst.insertAdjacentHTML('beforeend', '<div class="flex"> <p class="description word-spacing parameter">RIEDLENTĖS PLOTIS, ILGIS - 25*100cm</p> <img class="info fl marg" src="icons/information.png"</div>');
    mainArray.lenta = '2'
    mainArray.WidthHeight = '25*100cm'
    boardPrice = 106;
    MainSum.textContent = boardPrice + '.oo€';
    items[0].textContent = 'Simetrinė, Double kicktail forma'
    items[3].textContent = '25*100cm'

}
else if (boardName === 'Untitled-3') {
    menuFirst.insertAdjacentHTML('beforeend', ' <div class="flex"> <p class="description"> ILGIS, PLOTIS : </p> <div class="fl marg"> <select onchange="changeWH(value)"> <option value="1,100cm*24cm">100cm*24cm</option>   <option value="2,105cm*25cm">105cm*25cm</option>  <option value="2">110cm*25cm</option>  </select> <img class="info" src="icons/information.png"> </div></div> ');
    mainArray.lenta = '3'
    mainArray.WidthHeight = '24*100cm'
    boardPrice = 113;
    MainSum.textContent = boardPrice + '.oo€';
    items[0].textContent = '"U" formos lenkimo simetrinė lenta'
    items[3].textContent = '24*100cm'

}
else if (boardName === 'Untitled-4') {
    menuFirst.insertAdjacentHTML('beforeend', ' <div class="flex"> <p class="description ">ILGIS, PLOTIS :</p> <div class="fl marg"> <select onchange="changeWH(value)"> <option value="0">asas</option> <option value="1">100cm*24cm</option>   <option value="2">105cm*25cm</option>  <option value="2">110cm*25cm</option>  </select> <img class="info" src="icons/information.png"> </div></div> ');
    mainArray.lenta = '4'
    mainArray.WidthHeight = '95cm*23cm';
    boardPrice = 120;
    MainSum.textContent = boardPrice + '.oo€';
    items[3].textContent = '95cm*23cm'
}
else if (boardName === 'Untitled-5') {
    menuFirst.insertAdjacentHTML('beforeend', '<div class="flex"> <p class="description word-spacing parameter">RIEDLENTĖS PLOTIS, ILGIS - 27*90cm</p> <img class="info fl marg" src="icons/information.png"</div>');
    mainArray.lenta = '5'
    mainArray.WidthHeight = '27*90cm'
    boardPrice = 97;
    MainSum.textContent = boardPrice + '.oo€';
    items[0].textContent = 'Downhill'
    items[3].textContent = '27*90cm'
    dropNone.style.display = 'none';


}
else if (boardName === 'Untitled-6') {
    dropNone.style.display = 'none';
    menuFirst.insertAdjacentHTML('beforeend', '<div class="flex"> <p class="description word-spacing parameter">RIEDLENTĖS PLOTIS, ILGIS - 25*60cm</p> <img class="info fl marg" src="icons/information.png"</div>');
    mainArray.lenta = '6'
    mainArray.WidthHeight = '20*60cm'
    boardPrice = 100;
    MainSum.textContent = boardPrice + '.oo€';
    items[3].textContent = '20*60cm'

}
if (boardName === 'Untitled-7') {
    boardImg.src = `sukurksavoempty/${boardName}.png`;
    boardImg2.src = `sukurksavoempty/${boardName}-2.png`;
    menuFirst.insertAdjacentHTML('beforeend', '<div class="flex HW"><p class="description ">ILGIS, PLOTIS :</p><div class="fl marg"><select onchange="changeWH(value)"><option value="24cm*90cm">24cm*90cm</option>  <option value="24cm*95cm">24cm*95cm</option>  <option value="25cm*100cm">25cm*100cm</option>  <option value="25cm*105cm">25cm*105cm</option></select> <img class="info" src="icons/information.png"></div></div> ');
    dropNone.style.display = 'none';

    mainArray.lenta = '7'
    mainArray.WidthHeight = ''
    boardPrice = 99;
    MainSum.textContent = boardPrice + '.oo€';
}
else {
    boardImg.src = `sukurksavoempty/${boardName}.png`;
    boardImg2.src = `sukurksavoempty/${boardName}.png`;
}

const banners = document.querySelectorAll('.banner');
const infos = document.querySelectorAll('.info');
const fonImages = document.querySelectorAll('.fon-img');
const fonLines = document.querySelectorAll('.table1 .fonai');

function changeWH(i) {
    mainArray.WidthHeight = i.split(',')[1];
    items[3].textContent = i.split(',')[1]



}







function changedrop($i) {
    //droptrough pozicionavimas pagal lentas
    if (window.location.search.split('?')[1] === 'Untitled-3') {

        drop.src = `sukurksavoempty/drop${parseFloat($i) + 2}.png`;
        drop2.src = `sukurksavoempty/drop${parseFloat($i) + 2}.png`;
    }
    else if (window.location.search.split('?')[1] === 'Untitled-4') {
        drop.style.marginLeft = 1 + 'px';
        drop2.style.marginLeft = 1 + 'px';
        drop.src = `sukurksavoempty/drop${parseFloat($i)}.png`;
        drop2.src = `sukurksavoempty/drop${parseFloat($i)}.png`;
    }
    else {
        drop.src = `sukurksavoempty/drop${parseFloat($i)}.png`;
        drop2.src = `sukurksavoempty/drop${parseFloat($i)}.png`;
    }

    if (parseFloat($i.split(',')[0]) === 1) {
        items[2].textContent = `YRA `
    }
    else {
        items[2].textContent = `NĖRA `
    }


    mainArray.dropTrough = $i.split(',')[1];

}

hidButton.addEventListener('click', function () {

    isklotine.classList.toggle('hidden')
})

function changeFunc($i) {
    // medienos rinkimasis
    chosenWood = parseFloat($i.split(',')[1])
    sum = chosenGrip + chosenBottom + boardPrice + chosenWood + wheels + trucks + bearings;
    MainSum.textContent = sum + '.oo€'

    texture.src = `sukurksavoempty/1${$i.split(',')[0]}.jpg`;
    texture2.src = `sukurksavoempty/1${$i.split(',')[0]}.jpg`;

    mainArray.mediena = $i.split(',')[2];
    items[1].textContent = $i.split(',')[2];

}

function lengthWidth(value) {
    console.log(value);

}

function changeWheels($i) {
    if ($i.split(',')[0] === '1') {
        ratukaiIMG.style.marginTop = 0 + 'px'
        ratukaiIMG.src = 'design/puente-wheels.jpg'
        items[7].textContent = `PUENTE 82A 70mm wheels`

    }
    else {
        items[7].textContent = `- `
    }
    wheels = parseFloat($i.split(',')[1])
    sum = chosenGrip + chosenBottom + boardPrice + chosenWood + wheels + trucks + bearings;
    MainSum.textContent = sum + '.oo€'
    mainArray.ratukai = $i.split(',')[2];

}

function changeTrucks($i) {
    if ($i.split(',')[0] === '1') {
        ratukaiIMG.style.marginTop = 0 + 'px'
        ratukaiIMG.src = 'design/puente.jpg'
        items[6].textContent = `PUENTE 180mm trucks`
    }

    else if ($i.split(',')[0] === '2') {
        ratukaiIMG.style.marginTop = 0 + 'px'
        ratukaiIMG.src = 'design/bearings.jpg'
    }
    else {
        items[6].textContent = `-`

    }

    trucks = parseFloat($i.split(',')[1])
    sum = chosenGrip + chosenBottom + boardPrice + chosenWood + wheels + trucks + bearings;
    MainSum.textContent = sum + '.oo€'
    mainArray.asys = $i.split(',')[2];

}

function changeBearings($i) {
    if ($i.split(',')[0] === '1') {
        ratukaiIMG.style.marginTop = 0 + 'px'
        ratukaiIMG.src = 'design/bearings.jpg'
        items[8].textContent = `PUENTE ABEC-9`

    }
    else {
        items[8].textContent = `-`

    }
    bearings = parseFloat($i.split(',')[1])
    sum = chosenGrip + chosenBottom + boardPrice + chosenWood + wheels + trucks + bearings;
    MainSum.textContent = sum + '.oo€';
    mainArray.guoliai = $i.split(',')[2];

}

function surinkimas($i) {

    mainArray.surinkimas = surinktaE[$i].textContent
    console.log(mainArray);

    if ($i === '0') {
        items[9].textContent = `Surinkta `
    }
    else {
        items[9].textContent = `Ratukai ir neslystanti juosta atskirai `
    }

}

for (let i = 0; i < bottomImages.length; i++) {
    //ant kliko betkurio nario nulinam viska ir uzdedam patamsinima klikintam
    const bottomImage = bottomImages[i];

    bottomImage.addEventListener('click', function (a) {
        //pasirinktai apatinei nuotraukai uzdedam patamsinima ir bottom-data pridedam prie kainos
        for (let j = 0; j < bottomImages.length; j++) {

            bottomImages[j].style.backgroundColor = 'white'
        }
        bottomImage.style.backgroundColor = 'rgb(220, 220, 220)'
        apaciaBoard.src = `apacia/apacia${i}.jpg`

        if (a.path[1].dataset.bottom) {
            value = parseFloat(a.path[1].dataset.bottom)
            chosenBottom = value;
            sum = chosenGrip + chosenBottom + boardPrice + chosenWood + wheels + trucks + bearings;
            MainSum.textContent = sum + '.oo€'
        }
        else {
            chosenBottom = 0;
            sum = chosenGrip + chosenBottom + boardPrice + chosenWood + wheels + trucks + bearings;
            MainSum.textContent = sum + '.oo€'
        }
        mainArray.apaciaNr = i + 1;
        items[4].textContent = `Nr. ${i + 1}`

    })
}

fonLines.forEach((element, i) => {
    fonLines[i].addEventListener('mouseover', function () {
        fonImages[i].style.marginRight = 7 + 'px';

    })
    fonLines[i].addEventListener('mouseout', function () {
        fonImages[i].style.marginRight = 0;

    })
});

infos.forEach((element, i) => {
    infos[i].addEventListener('mouseover', function () {
        banners[i].style.opacity = 1;

    })
    infos[i].addEventListener('mouseout', function () {
        banners[i].style.opacity = 0;

    })

});

for (let i = 0; i < grip1.length; i++) {

    grip1[i].addEventListener('click', function (a) {
        for (let j = 0; j < grip1.length; j++) {
            //ciklo metu visiems nar nustatom balta spalva
            grip1[j].style.backgroundColor = "white"

        }
        gripmain.src = `sukurksavoempty/grip${i}.png`;
        grip1[i].style.backgroundColor = 'rgb(220, 220, 220)';

        if (a.path[1].dataset.grip) {
            value = parseFloat(a.path[1].dataset.grip);
            chosenGrip = value;
            sum = chosenGrip + chosenBottom + boardPrice + chosenWood + wheels + trucks + bearings;
            MainSum.textContent = sum + '.oo€'
        }

        else {
            chosenGrip = 0;
            sum = chosenGrip + chosenBottom + boardPrice + chosenWood + wheels + trucks + bearings;
            MainSum.textContent = sum + '.oo€'
        }
        mainArray.gripNr = i + 1;
        items[5].textContent = `Nr. ${i + 1}`

    })

}

// menu
HoverCancel.addEventListener('click', function () {
    HoverMenu.classList = 'hidden'
})

HoverIcon.addEventListener('click', function () {
    HoverMenu.classList = 'hover-menu'
})

document.addEventListener('scroll', function () {
    if (window.scrollY > 163) {
        fixed.style.paddingTop = (window.scrollY - 163) + "px"
    }
})

var margin1 = 0;
arro1.addEventListener('click', function () {
    if (margin1 < 0) {
        margin1 += 131;
        apaciatable.style.marginLeft = margin1 + 'px'
        //apacia pirmojo bloko slankymas
    }
})

arro2.addEventListener('click', function () {
    if (margin1 > (bottomImages.length - 3) * (-131)) {
        margin1 -= 131;
        apaciatable.style.marginLeft = margin1 + 'px'
        //apacia pirmojo bloko slankymas
    }
})


for (let i = 0; i < numero.length; i++) {
    numero[i].textContent = `nr.${i + 1}`
    //numeris apacios img bloku
}

for (let i = 0; i < number.length; i++) {
    //numeris gripo
    number[i].textContent = `nr.${i + 1}`
}


for (let i = 0; i < button.length; i++) {
    //meniu bloku pasirodymas ir dingimas

    button[i].addEventListener('click', function () {
        menu[i].classList.toggle('hidden');

        if (menu[i].classList == 'table1 hidden') {
            img[i].src = 'icons/0.png'
        }
        else {
            img[i].src = 'icons/1.png'

        }

    })
}
var margin = 0



arrow2.addEventListener('click', function () {
    if (margin > (grip1.length - 5) * (-78)) {
        margin -= 78
        griptable.style.marginLeft = margin + "px";

    }
})

arrow.addEventListener('click', function () {
    if (margin < 0) {

        margin += 78
        griptable.style.marginLeft = margin + "px";


    }
})

var a = 0;


for (let i = 0; i < apaciaTables.length; i++) {

    //ant paspaustos lenteles vygdyti funkcija
    apaciaTables[i].addEventListener('click', function () {
        a++
        //nunulinam viska
        if (a % 2 == 1) {
            for (let j = 0; j < apaciaTables.length; j++) {
                apaciaTables[j].classList = 'hidden'
                apaciaMains[j].classList = 'hidden'
            }
            //uzdedam paspausta lentele su tekstu atgal
            apaciaTables[i].classList = 'fonai'
            apaciaMains[i].classList = 'fonai2'
            apaciaArrows[i].classList = 'iconplay rotate90';
        }
        else if (a % 2 == 0) {
            for (let j = 0; j < apaciaTables.length; j++) {

                apaciaTables[j].classList = 'fonai'
                apaciaMains[j].classList = 'hidden'
                apaciaArrows[i].classList = 'iconplay';
            }
        }
    })
}

