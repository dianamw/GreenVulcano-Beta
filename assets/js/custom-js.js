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
if(window.location.hash)
{
    // hash found
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    alert (hash);
    if(hash = 'course'){
        $('#nodes').attr('aria-expanded', 'true');
    }
}
