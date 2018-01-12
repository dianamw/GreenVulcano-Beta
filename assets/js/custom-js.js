/*$(document).ready(function () {
        var url = window.location;
    // Will only work if string in href matches with location
        $('ul.nav a[href="' + url + '"]').parent().addClass('active');

    // Will also work for relative and absolute hrefs
        $('ul.nav a').filter(function () {
            return this.href == url;
        }).parent().addClass('active').parent().parent().addClass('active');
    });*/

$(document).ready(function () {
    //fetch hash in a variable
    var hash = location.hash;
	  if (hash){
		  //collapse menu
	    $(hash).collapse('show');
		  //collapse submenu
		  $(hash).parents('.collapse').addClass('in');
  }
	
$('#sidebar ul li a[href^="' + hash + '"]')
    		.css({
       		 'background': '#238650',
       		 'color' : '#ffffff'
      });
	
var full_path = location.href.split("#")[0];

    $("#sidebar ul ul a").each(function(){
	var $this = $(this);
	if($this.prop("href").split("#")[0] == full_path) {
	$(this).parent().addClass("active");
        }
    });
	/* test */
	$('#sidebar ul li a').filter(function () {
            return this.href == url;
        }).parent().addClass('active').parent().parent().addClass('active');
	/* fine test */
});

