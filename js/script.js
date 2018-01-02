(function($) {
	$(function() {

		var windowScroll_t;
		$(window).scroll(function () {

			clearTimeout(windowScroll_t);
			windowScroll_t = setTimeout(function () {

			if ($(this).scrollTop() > 100) {
				$('#scroll-to-top').fadeIn();
			}
			else {
				$('#scroll-to-top').fadeOut();
			}

			}, 500);

		});

		$(document).ready(function() {
			$('html').niceScroll({zindex: 9999});

			$('#scroll-to-top').click(function () {
				$("html, body").animate({scrollTop: 0}, 600, "easeOutCubic");
				return false;
			});
						
			var ua = navigator.userAgent;
			if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) {
				$('.tel').each(function() {
					var txt = $(this).html();
					var num=$(this).attr('num');
					$(this).html($('<a>').attr('href', 'tel:' + num.replace(/-/g, '')).append(txt + '</a>'));
				});
			}
		});


    $(document).ready(function(){
        $('.category-products .product-image-area').each(function(){
			var inarea = false;
			$(this).mouseenter(function(){
				if(!$(this).parent().parent().parent().parent().parent().hasClass('block') && inarea == false){
					var hover_img = $(this).attr('hover_img');
					var base_img = $(this).attr('base_img');
					var img = $(this).children('a.product-image').children('img');
					//$(img).attr('src', hover_img);
					/********************************/
					var ele = $(img).clone().appendTo($(img).parent()).css({position:"absolute","top":"0px","left":"0px","z-index":"2"}).attr("src",base_img);
					$(img).css("z-index",1);
					$(img).attr('src', hover_img);
					$(ele).fadeOut(400,function(){$(ele).remove(); action=false});
				}
				inarea = true;
			}).mouseleave(function(){
				if(!$(this).parent().parent().parent().parent().parent().hasClass('block') && inarea == true){
					var hover_img = $(this).attr('hover_img');
					var base_img = $(this).attr('base_img');
					var img = $(this).children('a.product-image').children('img');
					//$(img).attr('src', base_img);
					/********************************/
					var ele = $(img).clone().appendTo($(img).parent()).css({position:"absolute","top":"0px","left":"0px","z-index":"2"}).attr("src",hover_img);
					$(img).css("z-index",1);
					$(img).attr('src', base_img);
					$(ele).fadeOut(400,function(){$(ele).remove(); action=false});
				}
				inarea = false;
			});
        });

		$('.header-topbar h1.page-title').html($('.main .page-title h1').html());
 

		$('.a_latest').click(function () {
			if (!$(this).hasClass('active')) {
				$('div.filterproducts').children('div').hide();
				$('.filterproducts').css('left', (($(window).width() - 760) / 2) + "px");
				$('div.filterproducts').children('div').removeClass('active');
				$('div#new_products').addClass('active');
				$('div#new_products').fadeIn();
				$('div.filterproducts').fadeIn();
				$('.special_menu li a').removeClass('active');
				$('.a_latest').addClass('active');
				if ($(window).height() < 925) {
					$('.filterproducts div.category-products').css('height', '394px');
					$('.filterproducts').css('top', (($(window).height() - 479) / 2) + "px");
				} else {
					$('.filterproducts div.category-products').css('height', '788px');
					$('.filterproducts').css('top', (($(window).height() - 873) / 2) + "px");
				}
			}
		});

		$('.a_featured').click(function () {
			if (!$(this).hasClass('active')) {
				$('div.filterproducts').children('div').hide();
				$('.filterproducts').css('left', (($(window).width() - 760) / 2) + "px");
				$('div.filterproducts').children('div').removeClass('active');
				$('div#featured_products').addClass('active');
				$('div#featured_products').fadeIn();
				$('div.filterproducts').fadeIn();
				$('.special_menu li a').removeClass('active');
				$('.a_featured').addClass('active');
				if ($(window).height() < 925) {
					$('.filterproducts div.category-products').css('height', '394px');
					$('.filterproducts').css('top', (($(window).height() - 479) / 2) + "px");
				} else {
					$('.filterproducts div.category-products').css('height', '788px');
					$('.filterproducts').css('top', (($(window).height() - 873) / 2) + "px");
				}
			}
		});

		$('.a_special').click(function () {
			if (!$(this).hasClass('active')) {
				$('div.filterproducts').children('div').hide();
				$('.filterproducts').css('left', (($(window).width() - 760) / 2) + "px");
				$('div.filterproducts').children('div').removeClass('active');
				$('div#special_product').addClass('active');
				$('div#special_product').fadeIn();
				$('div.filterproducts').fadeIn();
				$('.special_menu li a').removeClass('active');
				$('.a_special').addClass('active');
				if ($(window).height() < 925) {
					$('.filterproducts div.category-products').css('height', '394px');
					$('.filterproducts').css('top', (($(window).height() - 479) / 2) + "px");
				} else {
					$('.filterproducts div.category-products').css('height', '788px');
					$('.filterproducts').css('top', (($(window).height() - 873) / 2) + "px");
				}
			}
		});

		$('.filterproducts-link').click(function () {
			$('.a_latest').click();
		});
		$('.filterproducts a.close').click(function () {
			$('div.filterproducts').children('div').fadeOut();
			$('div.filterproducts').fadeOut();
			$('.special_menu li a').removeClass('active');
		});
		var scrollHeight = 788;

		if ($(window).height() < 925) {
			$('.filterproducts div.category-products').css('height', '394px');
			$('.filterproducts').css('top', (($(window).height() - 479) / 2) + "px");
			scrollHeight = 394;
		} else {
			$('.filterproducts div.category-products').css('height', '788px');
			scrollHeight = 788
			$('.filterproducts').css('top', (($(window).height() - 873) / 2) + "px");
		}
		$(window).resize(function () {
			$('.filterproducts').css('left', (($(window).width() - 760) / 2) + "px");
			if ($(window).height() < 925) {
				$('.filterproducts div.category-products').css('height', '394px');
				scrollHeight = 394;
				$('.filterproducts').css('top', (($(window).height() - 479) / 2) + "px");
			} else {
				$('.filterproducts div.category-products').css('height', '788px');
				scrollHeight = 788
				$('.filterproducts').css('top', (($(window).height() - 873) / 2) + "px");
			}
			if ($(window).width() < 768) {
				$('.filterproducts a.close').click();
			}
			/** for SAMSUNG GALAXY TABLET */
			if ($(window).width() >= 768 && $(window).width() <= 1024) {
				$('.header-container').css('width', $(window).width() + "px");
			} else {
				$('.header-container').css('width', '');
			}
			/** for SAMSUNG GALAXY TABLET */
		});
		$('.filterproducts a.page-next').click(function () {
			$(".filterproducts div.active div.category-products").animate({scrollTop: $(".filterproducts div.active div.category-products").scrollTop() + scrollHeight}, 600, "easeOutCubic");
			return false;
		});
		$('.filterproducts a.page-prev').click(function () {
			$(".filterproducts div.active div.category-products").animate({scrollTop: $(".filterproducts div.active div.category-products").scrollTop() - scrollHeight}, 600, "easeOutCubic");
			return false;
		});
		$("html").click(function () {
			if ($(window).width() <= 1024) {
				$("#nav li span.plus").each(function () {
					$(this).removeClass('expanded');
					$(this).parent().removeClass('expanded');
					$(this).parent().children('ul').slideUp('fast');
				});
			}
		});
	});});

	$(document).ready(function(){
		$("#nav ul.level1").each(function(){
			$(this).css('top', $(this).parent().offset().top-$('body').scrollTop());
			var obj = $(this);
			setTimeout(function(){$(obj).css('top', $(obj).parent().offset().top-$('body').scrollTop());},300); //for IE8
		});
		$(window).resize(function(){
			$("#nav ul").each(function(){
				$(this).css('left','');
			});
			$("#nav ul.level1").each(function(){
				$(this).css('top', $(this).parent().offset().top-$('body').scrollTop());
			});
		});
		$("#nav li span.plus").click(function(event){
			event.stopPropagation();
			$(".form-language .select-language .sbOptions").slideUp('fast');
			$(".form-language .select-language .sbToggle").removeClass('sbToggleOpen');
			if($(this).hasClass('expanded')){
				$(this).removeClass('expanded');
				$(this).parent().removeClass('expanded');
				$(this).parent().children('ul').slideUp('fast');
			} else {
				$(this).parent().parent().children('li.expanded').children('ul').hide();
				$(this).parent().parent().children('li.expanded').children('span.expanded').removeClass('expanded');
				$(this).parent().parent().children('li.expanded').removeClass('expanded');
				$(this).addClass('expanded');
				$(this).parent().addClass('expanded');
				$(this).parent().children('ul').slideDown('fast');
				if($(window).width()>=768 && $(window).width()<=1024 ){
					if( $(this).parent().children('ul').offset().left + 170 >= $(window).width() ){
						if($(this).parent().children('ul').hasClass('level1')){
							$(this).parent().children('ul').css('left', ($(window).width() - $(this).parent().children('ul').offset().left - 190) + 'px' );
						} else {
							$(this).parent().children('ul').css('left', '-170px');
						}
					}
				}
			}
		});

		$(".quick_order").click(function () {
			$(".wrap_hidden_message_content").css('display', 'block');
			$(".alert_helper").css('display', 'none');
		});
		$(".hidden_close_icon img").click(function () {
			$(".wrap_hidden_message_content").css('display', 'none');
		});
		$(".alert_helper ").click(function () {
			$(".wrap_hidden_message_content").css('display', 'block');
			$(".alert_helper").css('display', 'none');
		});
		$(setTimeout(function () {
			$(".alert_helper").css('display', 'block');
		}, 15000));
		$('#call_popup2').fancybox();
	});

	function showMessageBox() {
		$(".quick_order").click(function () {
			$(".wrap_hidden_message_content").css('display', 'block');
			$(".alert_helper").css('display', 'none');
		});
	}


	$(document).ready(function(){
		if($("#header .form-search input.input-text#search").val() != 'Search...'){
			$("#mob_search").css('display', 'none');
			$("#header .form-search input.input-text#search").css('display', 'block');
			$("#header .form-search button.button").css('display', 'block');
		}
		$("#mob_search").click(function(){
			$(this).css('display', 'none');
			$("#header .form-search input.input-text#search").css('display', 'block');
			$("#header .form-search button.button").css('display', 'block');
			$("#header .form-search input.input-text#search").focus();
		});
		$(".nav-container #mobnav").click(function(){
			if ($(this).parent().hasClass('expanded')){
				$(this).parent().removeClass('expanded');
				$(this).parent().children('#nav').fadeOut();
			} else {
				$(this).parent().addClass('expanded');
				$(this).parent().children('#nav').fadeIn();
			}
			$("#nav ul.level1").each(function(){
			var scrolltop = 0;
			if($('html').scrollTop()>1)
				scrolltop = $('html').scrollTop();
			else if($('body').scrollTop()>1)
				scrolltop = $('body').scrollTop();
			$(this).css('top', $(this).parent().offset().top-scrolltop);
			});
		});
		if($(window).width()<=1024 && $(window).width()>=768 && $('#nav').height()>40)
			$('#header .header-bground').addClass('menu-expanded');
		$(window).resize(function(){
			if($(window).width()<=1024 && $(window).width()>=768 && $('#nav').height()>40)
				$('#header .header-bground').addClass('menu-expanded');
		});

		$(".text_mobile_home_menu a").click(function () {
			$("#mobile_home_menu").toggleClass("display_block");
			$(".links_categories").removeClass("overflowclear");
		});
	});

	$(document).ready(function(){
		$("select").each(function(){
            $(this).selectbox();
        });

		$('.mini-cart-layer .top-cart .block-title').click(function(){
			var cart = $(this).siblings('#topCartContent');
			cart.slideToggle('fast');
			cart.mouseleave(function(){
				setTimeout(function(){
					cart.slideUp('fast');
				}, 5000);
			});
		});

        $("html").click(function(){
            $(".sbOptions").slideUp('fast');
            $(".sbToggle").removeClass('sbToggleOpen');
        });

    });

})(jQuery);
