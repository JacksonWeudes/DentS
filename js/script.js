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

menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active")
})