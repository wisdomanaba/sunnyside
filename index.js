const burger  = document.querySelector(".mobile-burger")
const navlink  = document.querySelector(".mobile-navlink")

var lstatus = false

burger.addEventListener('click', () => {
    lstatus = !lstatus

    // Trigger when true
    if(lstatus) {
        navlink.classList.toggle('active')
    }

    if(!lstatus){
        navlink.classList.remove('active')
    }

    console.log(lstatus)
})
