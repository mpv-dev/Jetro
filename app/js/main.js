$(function(){
  
  $('.slider').slick({
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icon/previous.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icon/next.png" alt=""></button>',
    asNavFor: '.preview',
  });

  $('.preview').slick({
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 741,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 441,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 301,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.meyu__list').slideToggle();
  });

});


