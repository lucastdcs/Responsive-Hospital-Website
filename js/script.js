let menu = document.querySelector("#menu-btn")
let nav = document.querySelector(".nav-bar")

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    nav.classList.toggle("active")
}

menu.onscroll = () => {
    menu.classList.remove("fa-times")
    nav.classList.remove("active")
}