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
  nextArrow: $('.js-slider-next'),
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});


$('.js-tab').click(function(){  
  $('.js-tab').attr('aria-selected', 'false');
  $(this).attr('aria-selected', 'true');
  $('.js-tabpanel').attr('aria-hidden', 'true');

  const tabPanelId = $(this).attr('aria-controls');
  const $tabPanel = $("#" + tabPanelId);  
  $tabPanel.attr('aria-hidden', 'false');
});

$('.js-toggle-tab').click(function(){
  const $tab = $(this).parent();
  $('.js-tabpanel').attr('aria-hidden', 'true');
  $tab.attr('aria-hidden', 'false');
});