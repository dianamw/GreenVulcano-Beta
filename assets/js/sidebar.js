 var hidden = false;

function nav()
 {
 if(hidden == false)
 {
     closeNav();
     hidden  = true;
 }
  else
   {
    openNav();
    hidden = false; 
  } 
 }


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
