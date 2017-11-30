
//script toggle sidebar
var sidebar = false;
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
   } 
  //script for accordion 
  var acc = document.getElementsByClassName("accordion");
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
  }
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

