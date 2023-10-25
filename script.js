function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Pegar a TAG img
    const img = document.querySelector("#profile img")

   
    if(html.classList.contains('light')) {  // substituir a imagem
        img.setAttribute("src", "assets/avatar.png")  // se tiver light mode, adicionar a imagem avatar
    }
    else {
        img.setAttribute("src", "assets/avatar2.png") // se não tiver light mode, manter imagem
    }
}