window.addEventListener('load',()=>{
    let burger = document.querySelector("#burger")

    burger.addEventListener("click",()=>{
        let menu = document.querySelector("#menu")
        menu.classList.toggle("active")
    })
})