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



// share scrips from here

// activesharebar(".share1", ".sharebar1")

// const activesharebar = (el1, el2) => {
//      let element1=document.querySelector(el1)
//      let element2=document.querySelector(el2)
//      element1.classList.remove("hidden")
//      element1.classList.remove("hidden")

// }





