/*
  Project: Tabula Rasa
  Author: angie
 */

var $ = require('jquery');
require('slick-carousel');


$('.js-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.js-slider-prev'),
  nextArrow: $('.js-slider-next')
});


