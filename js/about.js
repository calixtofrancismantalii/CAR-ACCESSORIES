function showMenu(){
    var ul;
    ul = document.getElementById("ul");
    
    if(ul.style.height == "0px"){
        ul.style.height = "290px";
    }
    else{
        ul.style.height = "0px";
    }
}