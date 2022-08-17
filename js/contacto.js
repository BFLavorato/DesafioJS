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

    Toastify({
      text: "Bienvenido a la familia Mecenas :) \n Gracias por tu critica.",
      duration: 1500,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to top, #757519, #CCCCB2)",
      },
      onClick: function () {}
    }).showToast();
    const suscriptor = new Suscriptor(nombre, apellido, email, comentario, rubro, pais, edad)
    suscriptores.push(suscriptor)
    console.log(suscriptores)
    localStorage.setItem(`suscriptor`, JSON.stringify(suscriptor.nombre))
  } else {
    Toastify({
      text: "Gracias por tu critica.",
      duration: 500,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to top, #757519, #CCCCB2)",
      },
      onClick: function () {}
    }).showToast();
  }

  form.reset()
})


console.log(("Bienvenido de nuevo"), JSON.parse(localStorage.getItem(`suscriptor`)))