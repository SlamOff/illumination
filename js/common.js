// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   $('.viewport').attr('content', 'width=1300');
// }

$(document).ready(function() {
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
			$('.top_head').removeClass('fixed');
		} else {
			$('.mob_menu').slideDown(300);
			$('.top_head').addClass('fixed');
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
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 800);
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
		$('.tab').removeClass('active');
		$(this).addClass('active');
	});
	
	//slick carousel
	$('.gallery_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		swipe: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					//swipe: true
				}
			}
		]
	});

	$('.gallery_slider_for').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '.gallery_next',
		prevArrow: '.gallery_prev',
		asNavFor: '.gallery_slider',
		focusOnSelect: true,
		swipe: false,
		dots: true,
		infinite: false,
		dotsClass: 'gallery_digits',
		customPaging: function (slider, i) {
			$('.right').text(slider.slideCount);
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});
	$('.gallery_slider_for').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.left').text(currentSlide + 1);
	});
	$('.gallery_slider_for').on('swipe', function(event, slick, currentSlide, nextSlide){
		$('.left').text(currentSlide + 1);
	});

	/*
	//video player + button
	$('#mainVideo').click(function(){
		if (this.paused) {
			this.play();
			$('#videoButton').fadeOut('fast');
		} else {
			$('#videoButton').fadeIn('fast');
			this.pause();
		}
	});
	$('#videoButton').on('click', function(event) {
		event.preventDefault();
		$('#videoButton').fadeOut('fast');
		$('#mainVideo').get(0).play();
	});
	*/

	
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