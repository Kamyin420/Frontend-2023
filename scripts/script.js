// JavaScript Document
/*https://css-tricks.com/books/greatest-css-tricks/scroll-animation/*/



  var eersteStreepjesButton = document.querySelector("nav ul li:nth-of-type(4) button");
eersteStreepjesButton.onclick = eersteStreepjesButtonKlik;
function eersteStreepjesButtonKlik() {
  if (eersteStreepjesButton.ariaExpanded == "false") {
    eersteStreepjesButton.ariaExpanded = "true"
  }
  else {
    eersteStreepjesButton.ariaExpanded = "false"
  }
}