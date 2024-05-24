function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
 // }

// pegar a tag img e substituir a imagem se tiver light mode adicionar a imagem light. Se tiver sem a imagem, continuar normal.
const img = document.querySelector("#profile img")

if (html.classList.contains("light")) {
img.setAttribute('src','./assets/avatar-light.png')
img.setAttribute(
  "alt",
  "Foto de Mayk Brito sorrindo, usando óculos escuro e camisa preta, barba e fundo amarelo."
)
  } else {
   img.setAttribute('src', './assets/avatar.png')
   img.setAttribute(
     "alt",
     "Foto de Mayk Brito sorrindo, usando óculos e jaqueta preta, barba e fundo azul."
   )
  }
  
}