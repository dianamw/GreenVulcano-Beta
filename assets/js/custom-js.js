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

 /* open panel when linked from external link */
  location.hash && $(location.hash + '.collapse').collapse('show');


  /* open panel when linked from same page - requires double click?? */
        $("#").on("click", function() {
    		location.hash && $(location.hash + '.collapse').collapse('show');
		});

	/* ensure any open panels are closed before showing selected */
		$('.accordion-group').on('show.bs.collapse', function () {
    		$('.accordion-group .in').collapse('hide');
		});
		
});
