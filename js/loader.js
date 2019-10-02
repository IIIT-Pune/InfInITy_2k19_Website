var body = document.getElementsByTagName('body')[0];
var navbar = document.getElementsByClassName('navbar')[0];
var div = document.getElementById('preloader');

function showpreloader()
{
    console.log("Hello");
    
    navbar.style.visibility = 'hidden';
    body.style.overflow = 'hidden';

    setTimeout(hidepreloader, 5000);
}

function hidepreloader()
{
    body.style.overflow = 'visible';
    navbar.style.visibility = 'visible';
    div.remove();
}

showpreloader();