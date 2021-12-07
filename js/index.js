const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button")
const article = document.querySelectorAll(".content")

tabs.addEventListener('click', (event) => {
    const id = event.target.dataset.id

    //Con este IF quitamos y ponemos la clase "live" en los botones y articulos
    if (id) {
        //aqui trabajamos los botones
        btns.forEach((btns) => {
            btns.classList.remove("live")
        });
        event.target.classList.add("live")

        //aqui trabajamos el contenido
        article.forEach((article) => {
            article.classList.remove("live")
        });
        const element = document.getElementById(id)
        element.classList.add("live")
    }
    console.log(event.target.dataset.id)
})