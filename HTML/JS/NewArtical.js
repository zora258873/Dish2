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

//圖片讀取
function previewFile() {
  const preview = document.getElementById('upload');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}




//評分系統
var divStars = document.getElementById("stars");
  var divComment = document.getElementById("comment");
  var starNum = -1;
  var starArray = Array.from(divStars.children);
  //滑鼠點擊
divStars.onclick = function (e) {
  if (e.target.tagName === "IMG") { 
    e.target.src = "/Pic/star.png";
    var prev = e.target.previousElementSibling;
    while (prev) {
      prev.src = "/Pic/star.png";
      prev = prev.previousElementSibling;
      }
    var next = e.target.nextElementSibling;
    while (next) {
      next.src = "/Pic/star_solid.png";
      next = next.nextElementSibling;
    }
    var index = starArray.indexOf(e.target);
  }
}