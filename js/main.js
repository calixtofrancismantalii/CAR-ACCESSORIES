function showMenu() {
    var ul;
    ul = document.getElementById("ul");
    
    if(ul.style.height === "0px"){
        ul.style.height = "290px";
    }
    else {
        ul.style.height = "0px";
    }
}


$(document).ready(function(){
    // window.alert('testS');
});


$('.dropdown').mouseover(function(){

    this.style.backgroundColor = "red";
    $('.dropdown_content[0]').style.height = "100px";

});

$('.dropdown').mouseout(function(){

    this.style.backgroundColor = "";
 });

