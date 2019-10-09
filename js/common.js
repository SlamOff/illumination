// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   $('.viewport').attr('content', 'width=1300');
// }

$(document).ready(function() {

	// let timer = setTimeout(function(){
	// 	$('.sliders_container').addClass('unactive');
	// }, 1000);
	// remove placeholder after click
	$(document).ready(function () {
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	});

	$('.toggle_btn').click(function(){
		$('.sandwich').toggleClass('active');
		if($('.mob_menu').is(':visible')) {
			$('.mob_menu').slideUp(300);
			//$('.top_head').removeClass('fixed');
		} else {
			$('.mob_menu').slideDown(300);
			//$('.top_head').addClass('fixed');
		};
	});

	if($(window).width() > 768){
		$('.product_shadow').hover(function(){
			$(this).addClass('shown');
		}, function(){
			$(this).removeClass('shown');
		});
	}
	else {
		$('.product_shadow').hover(function(){
			$(this).addClass('shown');
			$(this).find('p').slideDown();
		}, function(){
			$(this).removeClass('shown');
			$(this).find('p').slideUp();
		});
		$('.menu li').on('click', function(){
			$('.mob_menu').slideUp(300);
			$('.top_head').removeClass('fixed');
		});
	}

	

	function updater(d, h, m, s) {
	  // День сброса - 5 августа 2017 года (и далее каждые три дня)
	  var baseTime = new Date(2017, 07, 8);
	  // Период сброса — 3 дня
	  var period = 2*24*60*60*1000;

	  function update() {
	    var cur = new Date();
	    // сколько осталось миллисекунд
	    var diff = period - (cur - baseTime) % period;
	    // сколько миллисекунд до конца секунды
	    var millis = diff % 1000;
	    diff = Math.floor(diff/1000);
	    // сколько секунд до конца минуты
	    var sec = diff % 60;
	    if(sec < 10) sec = "0"+sec;
	    diff = Math.floor(diff/60);
	    // сколько минут до конца часа
	    var min = diff % 60;
	    if(min < 10) min = "0"+min;
	    diff = Math.floor(diff/60);
	    // сколько часов до конца дня
	    var hours = diff % 24;
	    if(hours < 10) hours = "0"+hours;
	    var days = Math.floor(diff / 24);
	    d.innerHTML = days;
	    h.innerHTML = hours;
	    m.innerHTML = min;
	    s.innerHTML = sec;
	  
	    // следующий раз вызываем себя, когда закончится текущая секунда
	    setTimeout(update, millis);
	  }
	  setTimeout(update, 0);
	}
	// updater(document.getElementById("days"),
	// document.getElementById("hours"), document.getElementById("minutes"),
	// document.getElementById("seconds"));



	

	$('.scroll').click( function(){
	var scrollEl = $(this).attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top - 90}, 800);
			$('.mob_menu').fadeOut();
			$('.sandwich').removeClass('active');
		}
		return false;
	});


	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});


	$('.tab').on('click', function(){
		active = 'active';
		$('.tab').removeClass(active);
		$(this).addClass(active);
		var tab = $(this).data().tab;
		$('.sliders_container').each(function(i, e){
			var slider = $(e).find('.gallery_slider').get(0).classList[1].split('_')[2];
			if(e.dataset.tab == tab){
				$(e).addClass(active);
				
				$('.gallery_slider_' + slider).slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					asNavFor: '.gallery_slider_for_' + slider,
					swipe: false,
					infinite: false,
					dots:true,
					nextArrow: '.gallery_next_' + slider,
					prevArrow: '.gallery_prev_' + slider,
					customPaging: function (slickSlider, i) {
						$('.right_' + slider).text(slickSlider.slideCount);
					},
					responsive: [
						{
							breakpoint: 768,
							settings: {
							}
						}
					]
				});

				$('.gallery_slider_for_' + slider).slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.gallery_slider_' + slider,
					focusOnSelect: true,
					swipe: false,
					dots: true,
					infinite: false,
					dotsClass: 'gallery_digits',
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2
							}
						}
					]
				});
				$('.gallery_slider_' + slider).on('afterChange', function(event, slick, currentSlide, nextSlide){
					$('.left_' + slider).text(currentSlide + 1);
					$('.right_' + slider).text(slick.slideCount);
				});
			}
			else {
				$('.gallery_slider').slick('unslick');
				$('.gallery_slider_for').slick('unslick');
				$(e).removeClass(active);
			}
		});
	});
	
	//slick carousel
	// trc
	$('.gallery_slider_trc').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false,
		asNavFor: '.gallery_slider_for_trc',
		infinite: false,
		dots:true,
		nextArrow: '.gallery_next_trc',
		prevArrow: '.gallery_prev_trc',
		customPaging: function (slickSlider, i) {
			$('.right_trc').text(slickSlider.slideCount);
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
				}
			}
		]
	});

	$('.gallery_slider_for_trc').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.gallery_slider_trc',
		focusOnSelect: true,
		swipe: false,
		dots: true,
		infinite: false,
		dotsClass: 'gallery_digits',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});
	$('.gallery_slider_trc').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.left_trc').text(currentSlide + 1);
		$('.right_trc').text(slick.slideCount);
	});

	// restoraunt
	// $('.gallery_slider_rest').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery_slider_for_rest',
	// 	swipe: false,
	// 	infinite: false,
	// 	dots:true,
	// 	nextArrow: '.gallery_next_rest',
	// 	prevArrow: '.gallery_prev_rest',
	// 	customPaging: function (slider, i) {
	// 		$('.right_rest').text(slider.slideCount);
	// 	},
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 			}
	// 		}
	// 	]
	// });

	// $('.gallery_slider_for_rest').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery_slider_rest',
	// 	focusOnSelect: true,
	// 	swipe: false,
	// 	dots: true,
	// 	infinite: false,
	// 	dotsClass: 'gallery_digits',
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2
	// 			}
	// 		}
	// 	]
	// });
	// $('.gallery_slider_rest').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.left_rest').text(currentSlide + 1);
	// 	$('.right_rest').text(slick.slideCount);
	// });

	// park
	// $('.gallery_slider_park').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery_slider_for_park',
	// 	swipe: false,
	// 	infinite: false,
	// 	dots:true,
	// 	nextArrow: '.gallery_next_park',
	// 	prevArrow: '.gallery_prev_park',
	// 	customPaging: function (slider, i) {
	// 		$('.right_park').text(slider.slideCount);
	// 	},
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 			}
	// 		}
	// 	]
	// });

	// $('.gallery_slider_for_park').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery_slider_park',
	// 	focusOnSelect: true,
	// 	swipe: false,
	// 	dots: true,
	// 	infinite: false,
	// 	dotsClass: 'gallery_digits',
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2
	// 			}
	// 		}
	// 	]
	// });
	// $('.gallery_slider_park').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.left_park').text(currentSlide + 1);
	// 	$('.right_park').text(slick.slideCount);
	// });
	// hotel
	// $('.gallery_slider_hotel').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery_slider_for_hotel',
	// 	swipe: false,
	// 	infinite: false,
	// 	dots:true,
	// 	nextArrow: '.gallery_next_hotel',
	// 	prevArrow: '.gallery_prev_hotel',
	// 	customPaging: function (slider, i) {
	// 		$('.right_hotel').text(slider.slideCount);
	// 	},
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 			}
	// 		}
	// 	]
	// });

	// $('.gallery_slider_for_hotel').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery_slider_hotel',
	// 	focusOnSelect: true,
	// 	swipe: false,
	// 	dots: true,
	// 	infinite: false,
	// 	dotsClass: 'gallery_digits',
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2
	// 			}
	// 		}
	// 	]
	// });
	// $('.gallery_slider_hotel').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.left_hotel').text(currentSlide + 1);
	// 	$('.right_hotel').text(slick.slideCount);
	// });
	// house
	// $('.gallery_slider_house').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery_slider_for_house',
	// 	swipe: false,
	// 	infinite: false,
	// 	dots:true,
	// 	nextArrow: '.gallery_next_house',
	// 	prevArrow: '.gallery_prev_house',
	// 	customPaging: function (slider, i) {
	// 		$('.right_house').text(slider.slideCount);
	// 	},
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 			}
	// 		}
	// 	]
	// });

	// $('.gallery_slider_for_house').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.gallery_slider_house',
	// 	focusOnSelect: true,
	// 	swipe: false,
	// 	dots: true,
	// 	infinite: false,
	// 	dotsClass: 'gallery_digits',
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2
	// 			}
	// 		}
	// 	]
	// });
	// $('.gallery_slider_house').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.left_house').text(currentSlide + 1);
	// 	$('.right_house').text(slick.slideCount);
	// });





	//validation
		var locationURL = window.location.search;
	if ( locationURL == "?p=179&lang=ua" ) {
		var validationName = "Обов'язково для заповнення";
		var validationNameMax = "Від 2 до 16 літер";
		var validationPhone = "Введіть вірний номер";
		var validationEmail = "Введіть вірний E-mail";
	}
	else {
		var validationName = "Обязательно для заполнения";
		var validationNameMax = "От 2 до 16 букв";
		var validationPhone = "Введите корректный номер";
		var validationEmail = "Введите корректный E-mail";
	}


	$('#top_Form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#top_Form2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});

	$('#topForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#mainForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm1').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm3').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm4').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm5').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#pdfForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#advForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#galleryForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});


});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/