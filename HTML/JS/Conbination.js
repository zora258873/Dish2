// Nav滾動陰影
function scrollshadow() {
  var topShadow = document.getElementById("top-shadow");
  var y = document.documentElement.scrollTop;
  var nav = document.getElementById("nav");
  var menu = document.getElementById("menu");
  if (y > 40) {
    topShadow.style.display = 'block';
    topShadow.style.opacity = 0.5;
    nav.style.backgroundColor = 'white';
    menu.style.backgroundColor = 'white';
  } else {
    topShadow.style.display = 'none';
    topShadow.style.opacity = 0.5;
    nav.style.backgroundColor = '#fdf1cf';
    menu.style.backgroundColor = '#fdf1cf';
  }
};
window.addEventListener('scroll', scrollshadow, false);

//showHamburger
$(function () {
  showburger();

  $(window).resize(function () {
    showburger();
  });

  function showburger() {
    let menu = $('#menu');
    let barList = $('.barList');
    let winWidth = $(window).width();
    if (winWidth < 768) {
      menu.css('display', 'flex'),
        barList.css({
          display: 'none',
          padding: 0,
        })
    } else if (winWidth < 992) {
      barList.css('font-size', '16px')
    } else {
      barList.css('font-size', '20px')
      menu.css('display', 'none'),
        barList.css('display', 'flex')
    };
  };
});

//burgerList
$(function () {
  let burList = $('#burgerList');
  $('#burgerBtn').click(function () {
    burList.toggleClass('show')
  });

});

//selector
$(function () {
  $('.selectorBtn').fadeTo(200, 0.6);
  $('.selectorBtn').mouseover(function () {
    $(this).fadeTo(200, 1);
    $('.selectorBtn').not(this).fadeTo(100, 0.6);
  });
  $('.selectorBtn').click(function () {
    $(this).fadeTo(200, 1).css('border-bottom', '2px solid #5d512f').addClass('footprint');
    $('.selectorBtn').not(this).fadeTo(100, 0.6).css('border-bottom', 'none').removeClass('footprint');
  });

  selectorSize();
  $(window).resize(function () {
    selectorSize();
  });
  function selectorSize() {
    let winWidth = $(window).width();
    if (winWidth <= 768) {
      $('.selectorBtn').css({
        'font-size': '14px',
      });
    } else {
      $('.selectorBtn').css({
        'font-size': '24px',
      });
    };
  };
});

//Combination sum
$(function () {
  let meatPrice = 0;
  $('.foodmeat').click(function () {debugger;
    meatPrice = Number($(this).prev().val());
    $('.meatprice').text(meatPrice);
  });
});
$(function(){
  let oilPrice = 0;
  $('.foodoil').click(function () {
    oilPrice = Number($(this).next().val());
    $('.oilprice').text(oilPrice);
  });
})

//Conbination changePic
$(function(){
  let showLarge = $('#meatLarge');
  $('.smallmeatPic').mouseover(function(){
    showLarge.attr('src',$(this).attr('src'));
  });
  let showoilLarge = $('#oilLarge');
  $('.smalloilPic').mouseover(function(){
    showoilLarge.attr('src',$(this).attr('src'));
  });
});






//footer pic & font
$(function () {
  potPic();

  $(window).resize(function () {
    potPic();
  });

  function potPic() {
    let winWidth = $(window).width();
    if (winWidth > 768) {
      $('.potPic img').css('width', '10vw');
      $('.shadow img').css('width', '10vw');
      $('footer').css('font-size', '16px');
    } else {
      $('.potPic img').css('width', '15vw');
      $('.shadow img').css('width', '15vw');
      $('footer').css('font-size', '12px');
    };
  };
})
//footer shadow
$(function () {
  $('.potPic').mouseover(function () {
    $(this).next().stop().animate({
      opacity: '1',
    }, 300);
  })
  $('.potPic').mouseout(function () {
    $(this).next().animate({
      opacity: '0',
    }, 200);
  });
})