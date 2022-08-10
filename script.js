class Suscriptor {
  constructor(nombre, apellido, email, comentario, rubro, pais, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.comentario = comentario
    this.rubro = rubro
    this.pais = pais
    this.edad = edad
  }
}
const suscriptores = []
const form = document.getElementById("form")

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function formCheck() {
  let checkBox = document.getElementById("fCheck");
  let text = document.getElementById("text");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

form.addEventListener(`submit`, (event) => {
  event.preventDefault()
  let nombre = document.getElementById("nombre").value
  let apellido = document.getElementById("apellido").value
  let email = document.getElementById("email").value
  let comentario = document.getElementById("comentario").value
  let rubro = document.getElementById("rubro").value
  let pais = document.getElementById("pais").value
  let edad = document.getElementById("edad").value
  if (fCheck.checked == true) {
    btn.onclick = function() {modal.style.display = "none";}
    const suscriptor = new Suscriptor(nombre, apellido, email, comentario, rubro, pais, edad)
    suscriptores.push(suscriptor)
    console.log(suscriptores)
    
  } else {btn.onclick = function() {
    modal.style.display = "block";
  }}

  form.reset()
})
