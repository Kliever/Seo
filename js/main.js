$(function(){


//Слайдер
  $('.testimonial__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 651,
        settings: {
          arrows: false
        }
      }
    ]
  });




  // Плавно выезжание - заезжание
  $('.menu-btn').on('click', function () {
    $('.menu__list').slideToggle();
  });



  


//Добавление класса при клике на элемент
  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('menu-btn--active');
  })





// загрузка элементов при скролле
// new WOW().init();      
});