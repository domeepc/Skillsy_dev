const nav = document.querySelector(".nav_list")
const menu = document.querySelector(".menu")

menu.addEventListener('click', () =>{
    const visibility = nav.getAttribute('data-visible')

    if(visibility === "false"){
        nav.setAttribute('data-visible', true)
        menu.setAttribute('aria-expanded', true)
        document.body.style.overflow = "hidden"
    }
    else if(visibility === "true"){
        nav.setAttribute('data-visible', false)
        menu.setAttribute('aria-expanded', false)
        document.body.style.overflow = "auto"
    }
})