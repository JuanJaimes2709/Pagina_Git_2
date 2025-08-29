function cambiarImagen() {
  document.getElementById("randomImage").src = "https://picsum.photos/600/600?random=" + new Date().getTime();
}
