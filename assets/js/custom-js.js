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
jQuery(document).ready(function($) {

$(.accordion).on("click", function() {
    		location.hash && $(location.hash + '.collapse').collapse('show');
	)};
