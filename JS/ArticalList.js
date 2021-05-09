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


//加入收藏 或 取消收藏
function switchFavorite(e){
  if( e.currentTarget.alt =="Like" ){
    e.currentTarget.src="/Pic/Like_red.png";
    e.currentTarget.alt = "Unlike";
  } else {
    e.currentTarget.src = "/Pic/Like_gray.png";
    e.currentTarget.alt = "Like";
  }
}

function init(){
  //設定[加入收藏 或 取消收藏]的點按事件
  let like = document.getElementsByClassName( "like" );
  for( let i=0 ; i<like.length ; i++){
    like[i].onclick = switchFavorite;
  }
}//init
window.addEventListener("load", init, false);
