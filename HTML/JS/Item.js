// Nav滾動陰影
function scrollshadow() { 
  var topShadow = document.getElementById("top-shadow");
  var y = document.documentElement.scrollTop;
  var nav = document.getElementById("nav");
  var menu = document.getElementById("menu");
  if (y > 40) {
    topShadow.style.display = 'block';
    topShadow.style.opacity =  0.5;
    nav.style.backgroundColor = 'white';
    menu.style.backgroundColor = 'white';
  } else {
    topShadow.style.display = 'none';
    topShadow.style.opacity =  0.5;
    nav.style.backgroundColor = '#fdf1cf';
    menu.style.backgroundColor = '#fdf1cf';
  }
};
window.addEventListener('scroll', scrollshadow, false);

//showHamburger
$(function(){
  showburger();

  $(window).resize(function(){
    showburger();
  });

  function showburger(){
    let menu = $('#menu');
    let barList = $('.barList');
    let winWidth = $(window).width();
    if( winWidth < 768 ){
      menu.css('display','flex'),
      barList.css({
        display : 'none',
        padding : 0,
      })
    }else if( winWidth < 992){
      barList.css('font-size','16px')
    }else{
      barList.css('font-size','20px')
      menu.css('display','none'),
      barList.css('display','flex')
      };       
  };
});

//burgerList
$(function(){
  let burList = $('#burgerList');
  $('#burgerBtn').click(function(){
    burList.toggleClass('show')
  });

});


//



//otherItems
//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//footer pic & font
$(function(){
  potPic();

  $(window).resize(function(){
    potPic();
  });

  function potPic(){
    let winWidth = $(window).width();
    if( winWidth > 768){
      $('.potPic img').css('width','10vw');
      $('.shadow img').css('width','10vw');
      $('footer').css('font-size','16px');
    }else{
      $('.potPic img').css('width','15vw');
      $('.shadow img').css('width','15vw');
      $('footer').css('font-size','12px');      
    };
  };
})


//footer shadow
$(function(){
    $('.potPic').mouseover(function(){
      $(this).next().stop().animate({
        opacity : '1',
      },300);
    })
    $('.potPic').mouseout(function(){
      $(this).next().animate({
        opacity : '0',
      },200);
    });
})