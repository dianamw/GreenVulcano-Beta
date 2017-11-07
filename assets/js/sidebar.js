function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

/*$(document).ready(function(){
        $("#slide-toggle").click(function(){
            $(".sidenav").animate({
                width: "toggle"
            });
        });
    }); */
