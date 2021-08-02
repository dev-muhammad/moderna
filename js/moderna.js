// Project: Moderna framework
// Author: Muhammad
// Official repo: github.com/dev-muhammad/moderna
document.onscroll = function() {
    header = document.getElementById("header") 
    if (window.scrollY > 0){
        header.classList.add("active-header")
    }else{
        header.classList.remove("active-header")
    }
}
document.getElementById("showMenuBtn").onclick = function(){
    toogleMenu();
}
document.getElementById("menu").onclick = function(){
    toogleMenu();
}
function toogleMenu(){
    menu = document.getElementById("menu");
    menuButton = document.getElementById("showMenuBtn");
    if (menu.classList.contains("show-menu")){
        menu.classList.remove("show-menu");
        menuButton.classList.add("closed")
        menu.classList.add("menu");
    }else{
        menu.classList.add("show-menu");
        menu.classList.remove("menu");
        menuButton.classList.remove("closed")
    }
}
