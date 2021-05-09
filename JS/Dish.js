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

//
function showfootprint(){
  var foot1 = document.getElementsByClassName("dogFootprint")[0];
  var foot2 = document.getElementsByClassName("dogFootprint")[1];
  var foot3 = document.getElementsByClassName("dogFootprint")[2];
  var foot4 = document.getElementsByClassName("dogFootprint")[3];
  var foot5 = document.getElementsByClassName("dogFootprint")[4];
  var foot6 = document.getElementsByClassName("dogFootprint")[5];
  var foot7 = document.getElementsByClassName("dogFootprint")[6];
  var foot8 = document.getElementsByClassName("dogFootprint")[7];
  var foot9 = document.getElementsByClassName("dogFootprint")[8];
  var foot10 = document.getElementsByClassName("dogFootprint")[9];
  var foot11 = document.getElementsByClassName("dogFootprint")[10];
  var foot12 = document.getElementsByClassName("dogFootprint")[11];
  var height = document.documentElement.scrollTop;
  console.log(height);
  if( height > 200){
    foot1.style.display = 'block';
  }
  if ( height > 250){
    foot2.style.display = 'block';
  }
  if ( height > 300 ){
    foot3.style.display = 'block';
  }
  if( height<200 || height>400){
    foot1.style.display = 'none';
    foot2.style.display = 'none';
    foot3.style.display = 'none';
  }

  if( height > 600){
    foot4.style.display = 'block'
  }
  if ( height > 650){
    foot5.style.display = 'block';
  }
  if ( height > 700 ){
    foot6.style.display = 'block';
  }
  if( height<600 || height>800){
    foot4.style.display = 'none';
    foot5.style.display = 'none';
    foot6.style.display = 'none';
  }

  if( height > 1000){
    foot7.style.display = 'block';
  }
  if ( height > 1050){
    foot8.style.display = 'block';
  }
  if ( height > 1100 ){
    foot9.style.display = 'block';
  }
  if( height<1000 || height>1200){
    foot7.style.display = 'none';
    foot8.style.display = 'none';
    foot9.style.display = 'none';
  }
  if( height > 1400){
    foot10.style.display = 'block'
  }
  if ( height > 1450){
    foot11.style.display = 'block';
  }
  if ( height > 1500 ){
    foot12.style.display = 'block';
  }
  if( height<1400 || height>1600){
    foot10.style.display = 'none';
    foot11.style.display = 'none';
    foot12.style.display = 'none';
  }
};
window.addEventListener('scroll', showfootprint, false);