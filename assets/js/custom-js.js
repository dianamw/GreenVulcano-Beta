//Sidebar Open-Close Script
/*function openNav() {
    document.getElementById("sidebar").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
}
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}*/

$('button').toggle(

function() {
    $('#sidebar').css('right', '0')
}, function() {
    $('#main').css('right', '0')
})


$(document).ready(function () {
    //fetch hash in a variable
    var hash = location.hash;
	  if (hash){
		  //collapse menu
	    $(hash).collapse('show');
		  //collapse submenu
		  $(hash).parents('.collapse').addClass('in');
  }
});

