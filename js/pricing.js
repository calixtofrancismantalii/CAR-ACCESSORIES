function showMenu() {
    
    var ul;
    ul = document.getElementById("ul");
    
    if (ul.style.height === "0px"){
        ul.style.height = "290px";
    }
    else{
        ul.style.height = "0px";
    }
     
    
}




function offOn() {
    var on, off;
    on = document.getElementById("on");
    off = document.getElementById("off");
    
    if(on.style.display == "none"){
        off.style.display = "none";
        on.style.display = "block";
    }
    else{
        off.style.display = "block";
        on.style.display = "none";
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    var off, on;
//    off = document.getElementById("off");
//    on = document.getElementById("on");
//    
//    if(off.style.display == ""){
//        off.style.display = "none";
//        on.style.display = "block";
//    }
//    else{
//        off.style.display = "block";
//        on.style.display = "none";
//    }
    
}


