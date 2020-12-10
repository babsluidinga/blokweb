var deKnop;
deKnop = document.querySelector("header nav button");
var hetMenu = document.querySelector("header nav section");
var nav = document.querySelector("header nav");


function openMenu() {
    hetMenu.classList.toggle("open");
    nav.classList.toggle("opensolid");
}

function veranderIcoon() {
    deKnop.classList.toggle("verander")
}

deKnop.addEventListener("click", openMenu);

deKnop.addEventListener("click", veranderIcoon);


//stack overflow heeft me bijgebracht over de onscroll function en pageYOffset... Dit omdat ik geen jQuery wilde gebruiken :) //
window.onscroll = function () {
    if (window.pageYOffset > 10) {
        nav.classList.add("solid");
    } else {
        nav.classList.remove("solid");
    }
}
