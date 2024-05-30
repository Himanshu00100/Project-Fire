// header animation from here

let navbar = document.querySelector("#navbar")
window.addEventListener("scroll", () => {
    let yscroll = window.pageYOffset
    console.log(yscroll)
    if (yscroll > 300) {
        navbar.classList.add("activenav")

    }
    else {
        navbar.classList.remove("activenav")
        

        
    }


})