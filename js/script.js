var deKnop;
deKnop = document.querySelector("header nav button");

function openMenu() {
    var hetMenu = document.querySelector("header nav section");
    hetMenu.classList.toggle("open");
}

function veranderIcoon() {
    deKnop.classList.toggle("verander")
}

deKnop.addEventListener("click", openMenu);

deKnop.addEventListener("click", veranderIcoon)
