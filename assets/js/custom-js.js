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
	
	$(function(){
    var current = location.pathname;
    current = current.substring(current.lastIndexOf('/'));
    $('.sidenav li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
   		 });
	});

});

