
Logowrapper = document.querySelector(".menu-bar");

Logowrapper.onclick = function () {
  var navBar = document.querySelector(".menu03");
  navBar.classList.toggle("click-nav");
  var headerclass = document.querySelector(".menu-header ");
  headerclass.classList.toggle("new-header-class");

  // navBar =  document.querySelector(".bar");
  // navBar.classList.toggle("xmark");
  //ican.classList.remove("fa-bars");
};

