const barIcon = document.getElementById("barsIcon");
const xmarkIcon = document.getElementById("xmarkIcon");
const dropMenu = document.getElementById("dropMenu");
barIcon.addEventListener('click', ()=> {
    barIcon.style.display = "none";
    xmarkIcon.style.display = "block";
    dropMenu.style.display = "block";
});
xmarkIcon.addEventListener('click', ()=> {
    barIcon.style.display = "block";
    xmarkIcon.style.display = "none";
    dropMenu.style.display = "none";
});

// Get the button
var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
