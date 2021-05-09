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
    if( winWidth > 1200 ){
      barList.css('font-size','20px')
      menu.css('display','none'),
      barList.css('display','flex')

    }else if( winWidth > 992){
      barList.css('font-size','16px')
       $('#Logo').css('width','10%')
    }
    else{
      $('#Logo').css('width','150px')      
      menu.css('display','flex'),
      barList.css('display','none')
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

//best
$(function(){
  $('.chosenPic img').mouseover(function(){
    $(this).stop().fadeTo(200,1);
    $('.chosenPic img').not(this).stop().fadeTo(100,0.6);
  });
  $('#bestOne').mouseover(function(){
    $('#detailOne').css('display','block');
  })
  $('#bestOne').mouseout(function(){
    $('#detailOne').css('display','none');
  });
  $('#bestTwo').mouseover(function(){
    $('#detailTwo').css('display','block');
  })
  $('#bestTwo').mouseout(function(){
    $('#detailTwo').css('display','none');
  });
  $('#bestThree').mouseover(function(){
    $('#detailThree').css('display','block');
  })
  $('#bestThree').mouseout(function(){
    $('#detailThree').css('display','none');
  });
})