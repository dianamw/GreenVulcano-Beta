//Sidebar Open-Close Script
function openNav() {
    document.getElementById("sidebar").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
}
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
//Hash
$(document).ready(function () {
	  if (location.hash){
	    $(location.hash).collapse('show');
	    $(location.hash).parents('.accordion-body').collapse('show');
  }
});
//Animation Script
AOS.init({
  duration: 1200,
})
