const buttonImage = document.getElementById("toggle-menu-img");
const linkMenu = document.getElementById("menu");
const mainContent = document.querySelector("main");

const menuBurguerCloseSVG = 'assets/menu-buguer-close.svg'
const menuBurguerOpenSVG = 'assets/menu-buguer-open.svg'

let isToggled = false; //false if menu is not opened, true otherwise

function toggleMenu(){
    if(isToggled == false){
        buttonImage.src = menuBurguerCloseSVG;
        linkMenu.style.display="flex";
        mainContent.style.display="none";
        isToggled = true
    }else{
        buttonImage.src = menuBurguerOpenSVG;
        linkMenu.style.display="none";
        mainContent.style.display="flex";
        isToggled = false
    }
}

window.addEventListener('resize' , () => {
    if(window.innerWidth <= 550 ){
        buttonImage.src = menuBurguerOpenSVG;
        linkMenu.style.display="none";
        mainContent.style.display="flex";
        isToggled = false
    }
    else{
        linkMenu.style.display="flex";
    }
});
