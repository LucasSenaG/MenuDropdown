function exibemenu(menu) {
    document.getElementById(menu).style.display = 'flex';
}

function escondemenu(menu) {
    document.getElementById(menu).style.display = 'none';
}

function abremenumobile() {
    let menu = document.querySelector("#menu-mb");

    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function fechamenumobile() {
    let menu = document.querySelector("#menu-mb");
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    }
}

function acaomenumoblie(menuid) {
    let menu = document.querySelector(menuid);
    let btnabre = document.querySelectorAll('.iconeabre');
    let btnfecha = document.querySelectorAll('.iconefecha');

    if (menu.style.display == "" || menu.style.display == 'none'){
        menu.style.display = 'flex';
        if (menuid == '#features-mb'){
            btnabre[0].style.display = 'none';
            btnfecha[0].style.display = 'flex';
        } else {
            btnabre[1].style.display = 'none';
            btnfecha[1].style.display = 'flex';
        }
    } else if (menu.style.display == 'flex'){
        menu.style.display = 'none';
        if (menuid == '#features-mb'){
            btnabre[0].style.display = 'flex';
            btnfecha[0].style.display = 'none';
        } else {
            btnabre[1].style.display = 'flex';
            btnfecha[1].style.display = 'none';
        }
    }
}