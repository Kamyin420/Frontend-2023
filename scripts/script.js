

  var hamburgermenu = document.querySelector("nav ul li:nth-of-type(4) button");
hamburgermenu.onclick = hamburgermenuKlik;
function hamburgermenuKlik() {
  if (hamburgermenu.ariaExpanded == "false") {
    hamburgermenu.ariaExpanded = "true"
    
  }
  else {
    hamburgermenu.ariaExpanded = "false"
  }
}



//////////////// Voor scroll animatie ///////////////// https://css-tricks.com/books/greatest-css-tricks/scroll-animation////

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

onclick