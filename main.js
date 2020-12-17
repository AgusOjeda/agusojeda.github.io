const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");
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