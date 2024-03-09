const barraLateral = document.querySelector(".barra-lateral");
const menu = document.querySelector(".menu ");
const main = document.getElementById("main")
const main2 = document.querySelector(".main-2")
const section = document.querySelector(".section-1");
const formulario = document.getElementById("form");
const header = document.querySelector(".header");
let idInput = ["bed","sleep","","exercise","walk","develop","math","english","reed","no-fap"]
let valueInput = [];
let valueEtiqueta = [];
let promedio = [62,63]

function seleccionarHabitosUno() {
    section.firstElementChild.style.animation = "habitos 1.5s";
    section.lastElementChild.style.animation = "desaparecerPositivo 1.5s"
    document.getElementById("shower-dos").setAttribute("hidden","true")
    document.getElementById("cold-shower-1").setAttribute("required","true")
    idInput[2] = "cold-shower-1";
    setTimeout(() => {
        main.setAttribute("hidden","true");
        main2.removeAttribute("hidden")
        form.style.animation = "aparecer-habitos 1s forwards"
        document.getElementById("html").classList.add("htmlCambio")
        document.getElementById("enviar-formulario").removeAttribute("disabled")
    }, 1000);
}

function seleccionarHabitosDos() {
    section.lastElementChild.style.animation = "habitos 1.5s";
    section.firstElementChild.style.animation = "desaparecerNegativo 1.5s"
    document.getElementById("shower-uno").setAttribute("hidden","true")
    document.getElementById("cold-shower-2").setAttribute("required","true")
    idInput[2] = "cold-shower-2";
    setTimeout(() => {
        main.setAttribute("hidden","true");
        main2.removeAttribute("hidden")
        form.style.animation = "aparecer-habitos 1s forwards"
        document.getElementById("html").classList.add("htmlCambio")
        document.getElementById("enviar-formulario").removeAttribute("disabled")
    }, 1000);
}

formulario.addEventListener("submit", e => {
    e.preventDefault()
    child = document.querySelector(".lista")
    for (let i = 0; i < idInput.length; i++) {
        obtenerValor(idInput[i]); 
    }
    intercambio();
})

menu.addEventListener("click", ()=>{
    barraLateral.classList.toggle("max-barra-lateral")
    if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
        section.classList.add("min-main")
        header.classList.add("min-header")
        menu.classList.add("min-menu")
        form.classList.add("min-form")
    } else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
        header.classList.replace("min-header", "header")
        form.classList.replace("min-form", "form")
        section.classList.remove("min-main")
        menu.classList.remove("min-menu")
    }
})

function obtenerValor(id) {
    let habit = parseInt(document.getElementById(id).value);
    for (let i = 0; i < idInput.length; i++) {
        if (id == idInput[2]) {
            if (habit <= 4) {
                valueInput[2] = habit
            } else {
                valueInput[null]
            }
        } else if (id === idInput[4]) {
            if (habit <= 5) {
                valueInput[4] = habit
            } else {
                valueInput[null]
            }
        } else if (id === idInput[6]) {
            if (habit <= 5) {
                valueInput[6] = habit
            } else {
                valueInput[null]
            }
        } else if (id === idInput[i]) {
            if (habit <= 7) {
                valueInput[i] = habit
            } else {
                valueInput[null]
            }
        } 
    }
}

function intercambio () {
    child = document.querySelector(".lista");
    for (let i = 0; i < child.children.length; i++) {
        console.log (child.children[i])
        if (i == 2) {
            child.children[i].innerHTML = valueInput[0]
        } else if (i == 4) {
            child.children[i].innerHTML = valueInput[1]
        } else if (i == 6) {
            child.children[i].innerHTML = valueInput[2]
        } else if (i == 8) {
            child.children[i].innerHTML = valueInput[3]
        } else if (i == 10) {
            child.children[i].innerHTML = valueInput[4]
        } else if (i == 12) {
            child.children[i].innerHTML = valueInput[5]
        } else if (i == 14) {
            child.children[i].innerHTML = valueInput[6]
        } else if (i == 16) {
            child.children[i].innerHTML = valueInput[7]
        } else if (i == 18) {
            child.children[i].innerHTML = valueInput[8]
        } else if (i == 20) {
            child.children[i].innerHTML = valueInput[9]
        } else if (i == 23) {
            child.children[i].innerHTML = sumarInputs();
        } else if (i == 25) {
            if (idInput[2] = "cold-shower-1") {
                child.children[i].innerHTML = promediarInputs(promedio[0]);
            } else {
                child.children[i].innerHTML = promediarInputs(promedio[1]);
            }
        } else {
            continue
        }
    }
    return;
}

function sumarInputs() {
    let suma = 0;
    let promedio = 0
    for (let i = 0; i < valueInput.length; i++) {
        suma = suma + valueInput[i];
    }
    return suma;
}

function promediarInputs(valor) {
    promedio = Math.round((sumarInputs()*10)/valor);
    return promedio
}

