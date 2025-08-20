let usuario = "";
let clave = "";
let intentos = 3;

function registrar() {
  while (usuario === "") {
    usuario = prompt("Escribe tu usuario:");
    if (usuario === "") {
      alert("Debes escribir un usuario.");
    }
  }

  while (clave === "") {
    clave = prompt("Escribe tu contraseña:");
    if (clave === "") {
      alert("Debes escribir una contraseña.");
    }
  }

  alert("Usuario registrado: " + usuario);

 
  while (intentos > 0) {
    let user = prompt("Ingresa tu usuario:");
    let pass = prompt("Ingresa tu contraseña:");

    if (user === usuario && pass === clave) {
      alert("Bienvenido " + usuario);
      break;
    } else {
      intentos = intentos - 1;
      alert("Datos incorrectos. Intentos restantes: " + intentos);
    }

    if (intentos === 0) {
      alert("Usuario bloqueado");
    }
  }
}
