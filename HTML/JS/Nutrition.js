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

//banner
$(document).ready(function(){
  let setArea = $('.banner'),
      showHeight = 0;

  setArea.css({
    display: 'block',
    opacity: 0,

  });

  $(window).on('load scroll resize',function(){
    setArea.each(function(){
      let setThis = $(this);
      areaHeight = $(this).offset().top;

      if($(window).scrollTop() >= areaHeight + showHeight - $(window).height()){
        setThis.stop().animate({ 
          opacity: 1
        },500);

      }else{
        setThis.stop().animate({
          opacity: 0
        },500);
      }
    });
  });
});

//nutrition
var controller = new ScrollMagic.Controller();

var nuto = new TimelineMax();
nuto.to('.text', 1 ,{
  x:100
})

new ScrollMagic.Scene({
  triggerElement : '#kp1',
  triggerHook : 0,
  duration : '200px',
}).setPin('.nutrition').setTween(nuto).addIndicators().addTo(controller);
//



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