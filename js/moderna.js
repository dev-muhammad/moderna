// Project: Moderna framework
// Author: Muhammad
// Official repo: github.com/dev-muhammad/moderna

//fix menu in top on scroll
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

//toggle menu in mobile
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

// smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
