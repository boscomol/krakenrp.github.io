// Navbar Animation
window.onscroll = changePos;

function changePos() {
	var header = document.getElementById("header");
	if (window.pageYOffset > 100) {
		header.style.position = "absolute";
		header.style.top = pageYOffset + "px";
		header.style.height = "70px";
	}else {
		header.style.position = "";
		header.style.top = "";
		header.style.height = "";
	}
}



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


