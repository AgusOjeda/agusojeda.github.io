const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");
const btnDark = document.querySelector("home");
//Main toggle
menuBtn.addEventListener('click', () => {
    toogle();
});

// toggle on item click if open
menuItem.forEach(item =>{
    item.addEventListener("click", () => {
        if(menuBtn.classList.contains("open")){
            toogle();
        }
    })
})

function toogle(){
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}

btnDark.addEventListener('click',() =>{
    console.log("funciona");
    if(btnDark.classList.contains("hero-section-dark")){
        changeStyle();
    }
})

function changeStyle(){
    console.log("funciona2");
    btnDark.classList.toggle("hero-section-dark");
}
// document.querySelector(".hero-section").style.backgroundColor = this.darkMode ? "#1d0229" : "#DFDBE5";