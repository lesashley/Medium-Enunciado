var iconos = [{parent:"icon-menu",n:0,clase: "icon-twitter", link: "https://twitter.com/LaboratoriaLA"},
{parent:"icon-menu",n:0,clase: "icon-facebook", link:"https://www.facebook.com/laboratoria.la/"},
{parent:"icon-menu",n:1,clase: "icon-Search", link:"#"},
{parent:"icon-menu",n:1,clase: "icon-bell-o", link:"#"},
{parent:"footer-left",n:0,clase: "icon-like1", link:"#"},
{parent:"footer-left",n:0,clase: "icon-Speech-Bubble", link:"#"},
{parent:"footer-rigth",n:0,clase: "icon-twitter", link: "https://twitter.com/LaboratoriaLA"},
{parent:"footer-rigth",n:0,clase: "icon-facebook", link:"https://www.facebook.com/laboratoria.la/"},
{parent:"footer-rigth",n:0,clase: "icon-ribbon", link:"#"}]


window.addEventListener("load", function () {
  var content = document.createElement("div");
  var header = document.createElement("header");
  var menuLeft = document.createElement("div");
  menuLeft.classList.add("menu-left");

  var logoMedium = document.createElement("span");
  logoMedium.classList.add("icon-medium","logo-principal");
  for(var i = 0; i < 4; i++){
    var span = document.createElement("span");
    span.classList.add("path"+(i+1));
    logoMedium.appendChild(span);
  }
  var stripe1 = document.createElement("span");
  stripe1.classList.add("slash1");

  var imgLab = document.createElement("img");
  imgLab.classList.add("menu-lab");
  imgLab.src="assets/images/lab.png";
  var btnFollowHeader = document.createElement("a");
  btnFollowHeader.setAttribute("href","#");
  btnFollowHeader.classList.add("button-follow");
  btnFollowHeader.addEventListener("click",function (e) {
    e.preventDefault();
    btnFollowHeader.classList.toggle("following");
  })
  var btnFollowHeaderText = document.createTextNode("Follow");
  var contentIcon1 = document.createElement("div");
  contentIcon1.classList.add("icon-menu");

  var menuRigth = document.createElement("div");
  menuRigth.classList.add("menu-rigth");
  var contentIcon2 = document.createElement("div");
  contentIcon2.classList.add("icon-menu");
  var imgUser = document.createElement("img");
  imgUser.classList.add("sesion");
  imgUser.src="assets/images/sesion.jpg"

  var nav = document.createElement("div");
  nav.classList.add("nav");
  var navLeft = document.createElement("div");
  navLeft.classList.add("nav-left");
  var imgAuthor = document.createElement("img");
  imgAuthor.src="assets/images/author.jpeg";
  imgAuthor.alt="Belen Recabal";
  var navRigth = document.createElement("div");
  navRigth.classList.add("nav-rigth");
  var author = document.createElement("a");
  var authorText = document.createTextNode("Belen Recabal");

  var btnFollow=document.createElement("a");
  btnFollow.classList.add("button-follow");
  btnFollow.setAttribute("href","");
  var btnFollowText = document.createTextNode("Follow");
  btnFollow.addEventListener("click",function (e) {
    e.preventDefault();
    btnFollow.classList.toggle("following");
  })

  var authorEstatus = document.createElement("p");
  var authorEstatusText=document.createTextNode("Teaching Assistant at Laboratoria. Trabajando para ver más mujeres en el mundo de la programación");
  var authorEstatusTime = document.createElement("span");
  var authorEstatusTimeText = document.createTextNode("Mar 21 . 6 min read");

  var section = document.createElement("section");
  var contentSection = document.createElement("div");
  contentSection.classList.add("content-section");
  var title = document.createElement("h1");
  var titleText = document.createTextNode("Hazlo con estilo : Tipografías, iconos y sprite");
  var contentText1 = document.createElement("p");
  var text1 = document.createTextNode("Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!! Vamos paso a paso…");
  var contentText2 = document.createElement("p");

  var footer = document.createElement("footer");
  var footerLeft = document.createElement("div");
  footerLeft.classList.add("footer-left");
  var likeCounter = document.createElement("span");
  var footerRigth = document.createElement("div");
  footerRigth.classList.add("footer-rigth");
  var stripe2 = document.createElement("span");
  stripe2.classList.add("slash2");
  var footerEnlace = document.createElement("span");
  footerEnlace.classList.add("enlace");
  var titleEnlace = document.createElement("h6");
  titleEnlaceText=document.createTextNode("Next Story");
  var contentEnlace = document.createElement("h5");
  var enlace = document.createElement("a");
  enlace.setAttribute("href","https://medium.com/laboratoria-how-to/loops-f8e8c2228a24");
  var enlaceText = document.createTextNode("LOOPS");

  document.body.appendChild(header);
  document.body.appendChild(nav);
  document.body.appendChild(section);
  document.body.appendChild(footer);
  header.appendChild(menuLeft);
  header.appendChild(menuRigth);
  menuLeft.appendChild(logoMedium);
  menuLeft.appendChild(stripe1);
  menuLeft.appendChild(imgLab);
  menuLeft.appendChild(contentIcon1);
  contentIcon1.appendChild(btnFollowHeader);
  btnFollowHeader.appendChild(btnFollowHeaderText);
  menuRigth.appendChild(contentIcon2);

  nav.appendChild(navLeft);
  nav.appendChild(navRigth);
  navLeft.appendChild(imgAuthor);
  navRigth.appendChild(author);
  author.appendChild(authorText);
  navRigth.appendChild(btnFollow);
  btnFollow.appendChild(btnFollowText);
  navRigth.appendChild(authorEstatus);
  authorEstatus.appendChild(authorEstatusText);
  navRigth.appendChild(authorEstatusTime);
  authorEstatusTime.appendChild(authorEstatusTimeText);

  section.appendChild(contentSection);
  contentSection.appendChild(title);
  title.appendChild(titleText);
  contentSection.appendChild(contentText1);
  contentSection.appendChild(contentText2);
  contentText1.appendChild(text1);

  footer.appendChild(footerLeft);
  footer.appendChild(footerRigth);
  footerLeft.appendChild(likeCounter);

  iconos.forEach(function (e) {
    var a = document.createElement("a");
    a.classList.add(e.clase);
    a.classList.add("icon-menu-margin")
    a.setAttribute("href",e.link);
    if (e.link != "#") {
      a.setAttribute("target","_blank");
    }
    var contentParent = document.getElementsByClassName(e.parent)[e.n];
    contentParent.appendChild(a);
  });
  contentIcon2.appendChild(imgUser);
  footerRigth.appendChild(stripe2);
  footerRigth.appendChild(footerEnlace);
  footerEnlace.appendChild(titleEnlace);
  titleEnlace.appendChild(titleEnlaceText);
  footerEnlace.appendChild(document.createElement("br"));
  footerEnlace.appendChild(contentEnlace);
  contentEnlace.appendChild(enlace);
  enlace.appendChild(enlaceText);
})
