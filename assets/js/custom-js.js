function openNav() {
    document.getElementById("sidebar").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
}
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
$(document).ready(function () {
	  if (location.hash){
	    $(location.hash).collapse('show');
	    $(location.hash).parents('.accordion-body').collapse('show');
  }
});
	
