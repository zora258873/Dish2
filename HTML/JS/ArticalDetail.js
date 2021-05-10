// Nav滾動陰影
function scrollshadow() {
  var topShadow = document.getElementById("top-shadow");
  var y = document.documentElement.scrollTop;
  var nav = document.getElementById("nav");
  if (y > 40) {
    topShadow.style.display = 'block';
    topShadow.style.opacity = 0.5;
    nav.style.backgroundColor = 'white';
  } else {
    topShadow.style.display = 'none';
    topShadow.style.opacity = 0.5;
    nav.style.backgroundColor = '#fdf1cf';
  }
};
window.addEventListener('scroll', scrollshadow, false);


//切換圖片
function showLarge(e) {
  ;
  document.getElementById("large").src = e.target.src;
}
function init() {
  let smalls = document.querySelectorAll(".small");
  console.log(smalls);

  smalls.forEach(e => e.classList.remove('active'))
  for (let i = 0; i < smalls.length; i++) {
    smalls[i].onclick = showLarge;
    smalls[i].classList.add('active')
  }
}
window.onload = init;
