document.onscroll = function() {
    header = document.getElementById("header") 
    if (window.scrollY > 0){
        header.classList.add("active-header")
    }else{
        header.classList.remove("active-header")
    }
    
}
