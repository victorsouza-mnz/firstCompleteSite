const menu = document.querySelector(".menu-list")
const cancelBtn = document.querySelector(".cancel-btn")
const menuBtn = document.querySelector(".menu-btn")
menuBtn.onclick = ()=> {
    menu.classList.add("active")
    menuBtn.classList.add("hide")
}
cancelBtn.onclick = ()=> {
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
}