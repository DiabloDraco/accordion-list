let accordion = document.querySelectorAll(".accordion__item")

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