window.addEventListener("scroll", () => {
    const header = document.getElementById("header")

    if(window.scrollY > 0){
        header.classList.add("scroll-down")
    }
    else{
        header.classList.remove("scroll-down")
    }
})


// menu mobile
const menuBtn = document.getElementById("mbtn")
const closeBtn = document.getElementById("cbtn")
const sideMenu = document.getElementById("smenu")
const overlay = document.getElementById("overlay")

menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active")
    overlay.classList.add("active")
    document.body.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active")
    overlay.classList.remove("active")
    document.body.classList.remove("active")
})