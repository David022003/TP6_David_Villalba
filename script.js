function login() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (password === "1234") {  // Contraseña de ejemplo
        message.innerText = "Ingreso correcto!";
        console.log("Correo enviado: Usuario ingresó con contraseña correcta.");
        window.location.href = "pagina2.html";  // Redireccionar a página principal
    } else {
        message.innerText = "Contraseña incorrecta.";
    }
}

function goToPagina3() {
    const name = prompt("¿Cuál es tu nombre?");
    if (name) {
        document.getElementById('welcomeMessage').innerText = `Bienvenido, ${name}!`;
        window.location.href = "pagina3.html";  // Redireccionar a página 3
    } else {
        alert("Nombre no puede estar vacío");
    }
}

function sendForm(event) {
    event.preventDefault();  // Evitar recarga de página
    const formMessage = document.getElementById('formMessage');
    formMessage.innerText = "Formulario enviado con éxito!";
    console.log("Formulario enviado."); 
}

function clearForm() {
    document.getElementById('form').reset();
    document.getElementById('formMessage').innerText = ""; // Limpiar mensaje también
}

function sendMessage(event) {
    event.preventDefault(); // Evitar recarga de página
    const messageResult = document.getElementById('messageResult');
    messageResult.innerText = "Mensaje enviado con éxito!";
    console.log("Mensaje enviado.");
}

function clearMessageForm() {
    document.getElementById('messageForm').reset();
    document.getElementById('messageResult').innerText = ""; // Limpiar mensaje también
}








