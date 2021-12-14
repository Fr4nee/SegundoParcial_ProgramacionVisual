let userVal = "juanperez@gmail.com"
let passwordVal = "1787742836863899"



let user = document.getElementById("user")
let password = document.getElementById("password")


function Validator() {
    if (userVal == user.value && passwordVal == password.value) {
        window.location.href = 'app.html';
    } else {
        if (userVal != user.value) {
            alert("Usuario incorrecto. Vuelva a ingresar el usuario")
        } else if (passwordVal != password.value) {
            alert("Contraseña incorrecta. Vuelva a ingresar la contraseña")
        } else if (userVal != user.value && passwordVal != password.value) {
            alert("Usuario y contraseña incorrectos. Intente nuevamente")
        }
    }
}

function LogIn() {
    Validator()
}

/********************************************/

const apiurl = 'https://swapi.dev/api/people'


const res = document.querySelector('#res')
const tpl_name = document.createElement('td')
const tpl_height = document.createElement('td')
const tpl_mass = document.createElement('td')
const tpl_hair_color = document.createElement('td')
const tpl_eye_color = document.createElement('td')
const tpl_birth_year = document.createElement('td')
const tpl_gender = document.createElement('td')


var boton = document.getElementById("boton");

let num;

function gvi() {
    let inputValue = document.getElementById("buscar").value;

    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 10) {
        getData(inputValue);
    } else if (isNaN(inputValue) || inputValue == "") {
        alert("Ingrese un numero")
    } else {
        alert("El personaje no existe! intente con un numero del 1 al 10.")
    }
}

function getData(inputValue) {
    fetch(`${apiurl}/${inputValue}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(people => {
            console.log(people)

            let td_name = document.createElement('tr');
            td_name.appendChild(document.createTextNode(`${people.name}`));

            let td_height = document.createElement('tr');
            td_height.appendChild(document.createTextNode(`${people.height}`));

            let td_mass = document.createElement('tr');
            td_mass.appendChild(document.createTextNode(`${people.mass}`));

            let td_hair_color = document.createElement('tr');
            td_hair_color.appendChild(document.createTextNode(`${people.hair_color}`))

            let td_eye_color = document.createElement('tr');
            td_eye_color.appendChild(document.createTextNode(`${people.eye_color}`));

            let td_birth_year = document.createElement('tr');
            td_birth_year.appendChild(document.createTextNode(`${people.birth_year}`));

            let td_gender = document.createElement('tr');
            td_gender.appendChild(document.createTextNode(`${people.gender}`));

            tpl_name.appendChild(td_name)
            tpl_height.appendChild(td_height)
            tpl_mass.appendChild(td_mass)
            tpl_hair_color.appendChild(td_hair_color)
            tpl_eye_color.appendChild(td_eye_color)
            tpl_birth_year.appendChild(td_birth_year)
            tpl_gender.appendChild(td_gender)

            res.appendChild(tpl_name)
            res.appendChild(tpl_height)
            res.appendChild(tpl_mass)
            res.appendChild(tpl_hair_color)
            res.appendChild(tpl_eye_color)
            res.appendChild(tpl_birth_year)
            res.appendChild(tpl_gender)
        })
}