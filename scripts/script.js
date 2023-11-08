

  var hamburgermenu = document.querySelector("nav ul li:nth-of-type(4) button");
hamburgermenu.onclick = hamburgermenuKlik;
function hamburgermenuKlik() {
  var overlay = document.getElementById("overlay");

  if (hamburgermenu.ariaExpanded == "false") {
    hamburgermenu.ariaExpanded = "true" /* Dit is active*/
    // add disable-scroll class to body (overflow:hidden)
    overlay.style.display = "block";
    document.body.classList.add("disable-scroll");
    
  }
  else {
    hamburgermenu.ariaExpanded = "false"
    // REMOVE disable-scroll class from body
    document.body.classList.remove("disable-scroll");

    
    overlay.style.display = "none";
  }
}



//////////////// Voor scroll animatie ///////////////// https://css-tricks.com/books/greatest-css-tricks/scroll-animation////

// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

