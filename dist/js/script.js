$(document).ready(function(){
  "use strict";

  var myElement = document.querySelector(".header .nav");
  var headroom  = new Headroom(myElement);
  headroom.init();

  // Nav List
  var windowHeight = $(window).height(),
      headerHeight = $('.top-bar').innerHeight(),
      footerHeight = $('.footer').innerHeight();

  $('.nav-list').height(windowHeight - (headerHeight + footerHeight));

  $('.open-nav').on('click', function() { 
    $(this).toggleClass('fa-bars');
    $(this).toggleClass('fa-times');
    $('.top-bar').toggleClass('header-fixed');
    $('.footer').toggleClass('footer-fixed').toggleClass('animated').toggleClass('bounceInDown').toggleClass('bounceInUp');
    $('.header .nav').addClass('animated').toggleClass('bounceInDown').toggleClass('bounceInUp').fadeToggle();
    $('.nav-list').addClass('animated').toggleClass('bounceInDown').toggleClass('bounceInUp').fadeToggle();
    $('.slider').addClass('animated').toggleClass('bounceInDown');
  });

  // Intro Slider

  (function autoSlider() {
    $('.slider .active-slide').each(function () {
      if(!$(this).is(':last-child')) {
          setTimeout(function() {
            $('.slider .active-slide').removeClass('active-slide').next().addClass('active-slide');
            if ($('.wow').hasClass('animated')) {
              $(this).removeClass('animated');
              $(this).removeAttr('style');
              new WOW().init();
            }
            autoSlider()
            },7000);
      } else {
        setTimeout(function() {
          $('.slider .active-slide').removeClass('active-slide');
          $('.slider .slide').eq(0).addClass('active-slide').fadeIn();
          if ($('.wow').hasClass('animated')) {
            $(this).removeClass('animated');
            $(this).removeAttr('style');
            new WOW().init();
          }
          autoSlider()
          },7000);

      }
    });
  }());
  
  // use wow js
  new WOW().init();

  // Horizontal Slider

  var slideWidth = 0,
  currentSlide = 0;

  function arrows () {
    if (currentSlide != 0 && currentSlide != 3) {
      $('.left-button, .right-button').removeClass('disabled-button')
    } else if (currentSlide == 0) {
      $('.left-button').addClass('disabled-button');
      $('.right-button').removeClass('disabled-button')
    } else if (currentSlide == 3) {
      $('.right-button').addClass('disabled-button');
      $('.left-button').removeClass('disabled-button')
    }
  }

  $('.right-button').on('click', function () {
    if (currentSlide != 3) {
      slideWidth -= 1125;
      console.log(currentSlide);
      $('.h-slider').css('transform',  'translateX(' + slideWidth + 'px)');
      $('.h-slider .slide').eq(currentSlide).removeClass('active-slide').next().addClass('active-slide');
      currentSlide++; 
    }

    arrows();
  });

  $('.left-button').on('click', function () {
    if (currentSlide != 0) {
      slideWidth += 1125;
      console.log(currentSlide);
      $(this).removeClass('disabled-button');
      $('.h-slider').css('transform',  'translateX(' + slideWidth + 'px)');
      $('.h-slider .slide').eq(currentSlide).removeClass('active-slide').prev().addClass('active-slide');
      currentSlide--;
    }

    arrows();
    
  });

  $('.post-title').mouseover(function () {
    $(this).parent().find('.post-img img').css('transform', 'scale(1.2)');
    });
    $('.post-title').mouseleave(function () {
      $(this).parent().find('.post-img img').css('transform', 'scale(1)');
  });

});