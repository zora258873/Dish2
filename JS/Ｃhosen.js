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

//BannerPic


//selector
$(function(){
  $('.selectorBtn').fadeTo(200,0.6);
  $('.selectorBtn').mouseover(function(){
    $(this).fadeTo(200,1);
    $('.selectorBtn').not(this).fadeTo(100,0.6);
  });
  $('.selectorBtn').click(function(){
    $(this).fadeTo(200,1).css('border-bottom','2px solid #5d512f').addClass('footprint');
    $('.selectorBtn').not(this).fadeTo(100,0.6).css('border-bottom','none').removeClass('footprint');
  });

  selectorSize();
  $(window).resize(function(){
    selectorSize();
  });
  function selectorSize(){
    let winWidth = $(window).width();
    if(winWidth <= 768){
      $('.selectorBtn').css({
        'font-size':'14px',
      });
    }else{
      $('.selectorBtn').css({
        'font-size':'24px',
      });
    };
  };
});


//Best chosen
$(function(){
  // start
  $('#bestOne img').css({
    opacity:'1',
    transform:'scale(1.1)',
  });
  $('#bestOne').mouseout(function(){
    $('#bestOne').css('transform','scale(1)');
  });
  $('#detailOne').css('display','block');
  //pic fade
  $('.chosenPic img').mouseover(function(){
    $(this).stop().fadeTo(200,1);
    $('.chosenPic img').not(this).stop().fadeTo(100,0.6);
  });
  $('.chosenPic').mouseover(function(){
    $(this).css('z-index','8');
    $('.chosenPic').not(this).css('z-index','7');
  });
  $('.chosenPic img').mouseover(function(){
    $(this).stop().fadeTo(200,1).css('transform','scale(1.1)');
    $('.chosenPic img').not(this).stop().fadeTo(100,0.6).css('transform','scale(1)');
  });
  //show bestdetail
  $('#bestOne').mouseover(function(){
    $('#detailOne').css('display','block');
    $('#detailTwo').css('display','none');
    $('#detailThree').css('display','none');
  })
  $('#bestTwo').mouseover(function(){
    $('#detailTwo').css('display','block');
    $('#detailOne').css('display','none');
    $('#detailThree').css('display','none');  
  })
  $('#bestThree').mouseover(function(){
    $('#detailThree').css('display','block');
    $('#detailOne').css('display','none');
    $('#detailTwo').css('display','none');
  });
});

//bestSmall
$(function(){
  bestSmall();
  $(window).resize(function(){
    bestSmall();
  });
  function bestSmall(){
    let winWidth = $(window).width();
    if(winWidth <= 768){
      $('.chosenProduct').css('display','block');
      $('.picWrap').css({
        display:'flex',
        margin:'auto',
        'justify-content': 'space-evenly',
      });
      $('#bestOne').css('position','static');
      $('#bestTwo').css('position','static');
      $('#bestThree').css('position','static');
      $('.chosenDetail').css({
        width :'50vw',
        margin : 'auto',
      });
    }else{
      $('.chosenProduct').css('display','flex');
      $('.picWrap').css({
        display:'block',
        margin:'auto 50px',
      });
      $('#bestOne').css('position','relative');
      $('#bestTwo').css('position','relative');
      $('#bestThree').css('position','relative');
      $('.chosenDetail').css({
        width :'25vw',
        margin : '25px',
      });
    };
  };
});

//wrapSmall
$(function(){
  wrapSmall();
  $(window).resize(function(){
    wrapSmall();
  });
  function wrapSmall(){
    let winWidth = $(window).width();
    if(winWidth <= 768){
      $('.wrapDetail').css('display','block');
      $('.wrapPic img').css({
        width:'80%',
        margin:'10% 10% 0px',
      })
      $('.wrapContext span').css('display','none');
      $('.wrapContext p').css('display','none');
    }else{
      $('.wrapDetail').css('display','flex');
      $('.wrapPic img').css({
        width:'20vw',
        margin:'25px'
      })
      $('.wrapContext span').css('display','block');
      $('.wrapContext p').css('display','block');
    };
  };
});

//picresize
$(function(){
  picResize();
  $(window).resize(function(){
    picResize();
  });
  function picResize(){
    let winWidth = $(window).width();
    if(winWidth <= 768){
      $('.otherImage').css('width','45%');
    }else if(winWidth <= 992){
      $('.otherImage').css('width','23%');
    }else{
      $('.otherImage').css('width','22.5%');
    };
  };
});

// other chosen fadeTo
$(function () {			
  $('.otherImage img').css('opacity',1);

  $('.otherImage img').mouseover(function(){
    $(this).fadeTo(200,0.6);
    $(this).next().fadeTo(200,1)
    $('.otherImage img').not(this).fadeTo(200,1);
    $('.otherImage img').not(this).next().fadeTo(200,0);
  });
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