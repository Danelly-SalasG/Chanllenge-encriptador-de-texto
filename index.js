function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textEnc = document.getElementById("textEnc");
    let btnCopy = document.getElementById("copy");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = "";
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      textEnc.textContent = textoCifrado;
      btnCopy.style.display = "block";
      muñeco.src = "./img/encriptado.png";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      textEnc.textContent = "";
      btnCopy.style.display = "none";
      parrafo.textContent =
        "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");
    }
  }
  
  function copy() {
    let copyText = document.querySelector("#textEnc");
    copyText.select();
    document.execCommand("copy");
}
    browser.alarms.create({
        delayInMinutes: 0.1
      });
      
      browser.alarms.onAlarm.addListener(copy);
      
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textEnc = document.getElementById("textEnc");
    let btnCopy = document.getElementById("copy");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = "";
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      textEnc.textContent = textoCifrado;
      btnCopy.style.display = "block";
      muñeco.src = "./img/desencriptado.png";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      textEnc.textContent = "";
      btnCopy.style.display = "none";
      alert("Debes ingresar algún texto");
    }
  }