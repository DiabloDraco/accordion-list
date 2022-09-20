let accordion = document.querySelectorAll(".accordion__item")
let elModal = document.querySelector(".accordion__main-wrapper")
let elActive = document.querySelector(".activator")
let elCross = document.querySelector(".according__cross")


accordion.forEach(item => 
    item.addEventListener("click" , function () {
        if (item.classList.contains("active")) {
            item.classList.remove("active")
        }else {
            accordion.forEach(element => {
                element.classList.remove("active")
            })
            item.classList.add("active")
        }
    })
)

elActive.addEventListener("click" , function () {
    elModal.classList.add("accordion__main-wrapper-active")
})

elCross.addEventListener("click" , function () {
    elModal.classList.remove("accordion__main-wrapper-active")
})