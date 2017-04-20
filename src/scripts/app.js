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


$('.js-tab').click(function(){  
	$('.js-tab').attr('aria-selected', 'false');
 	$(this).attr('aria-selected', 'true');
    $('.js-tabpanel').attr('aria-hidden', 'true');
  
	var tabPanelId = $(this).attr('aria-controls');
    var $tabPanel = $("#" + tabPanelId);  
	$tabPanel.attr('aria-hidden', 'false');
 });