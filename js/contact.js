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



function myMap() {
    
    var mapProp = {
        center:new google.maps.LatLng(51.047310, -114.057968),
        zoom:5,
    };
    
    var map = new google.maps.Map(document.getElementById("makeupArtist"),mapProp);
}


/*Google Map*/
//function myMap(){
//    
//    var mapProp = {
//        center: new google.maps.LatLng(51.047310, -114.057968),
//        zoom: 5;
//    };
//    
//    var map = new google.maps.Map(document.getElementById("mapa"), mapProp);
//}
