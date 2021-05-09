// Nav滾動陰影
function scrollshadow() { 
  var topShadow = document.getElementById("top-shadow");
  var y = document.documentElement.scrollTop;
  var nav = document.getElementById("nav");
  if (y > 40) {
    topShadow.style.display = 'block';
    topShadow.style.opacity =  0.5;
    nav.style.backgroundColor = 'white';
  } else {
    topShadow.style.display = 'none';
    topShadow.style.opacity =  0.5;
    nav.style.backgroundColor = '#fdf1cf';
  }
};
window.addEventListener('scroll', scrollshadow, false);