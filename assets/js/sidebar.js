
//script toggle sidebar
/*var sidebar = false;
 function toggle(){
   if(!sidebar){
       sidebar = true;
       document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("main").style.marginLeft = "250px";
       document.getElementByClass("page-header").style.marginLeft = "250px";
        return;
   }
   
   else if (sidebar){
     sidebar = false;
     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
     document.getElementByClass("page-header").style.marginLeft = "0";
   	}
   } */
  //script for accordion 
  /*var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
	document.getElementById("link");
	
      }
    }
  }*/
	/*$(document).ready(function() {
		    $('#sidebarCollapse').on('click', function() {
		      $('#sidebar').toggleClass('active');
		    });
		  }); */

	$(document).ready( function(){
	$("#sidebarCollapse,#closeSidebar").click( function() {
  	var toggleWidth = $("#sidebar, #main").width() == 280 ? "0" : "280px";
    	$('#sidebar, #main').animate({ width: toggleWidth});
  });
});

	$(document).ready(function () {
	  location.hash && $(location.hash + '.collapse').collapse('show');
	});
/*document.getElementById("path").innerHTML =  window.location.pathname;*/
/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}*/

