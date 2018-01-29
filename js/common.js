/*
 * ---------------------------------------------------
 * 1. Slide Carousel
 * 2. Scroll to Top
 * 3. Sticky Menu
 * 4. Accordion has icon
 * 5. Hover tag a show ul page Product
 * 6. POPUP order a product - check on info Payment
 * 7. Scroll News Item Tablet & Mobile
 */

  (function($){
    "use strict";
  /* ==================================================== */

  /*
   * 1. Slide Carousel
  */
  $(document).ready(function() {
    $('.owl-carousel').each(function(index, el) {
      var config = $(this).data();
      config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
      config.smartSpeed="800";
      
      if($(this).hasClass('owl-style2')){
        config.animateOut='fadeOut';
        config.animateIn='fadeIn';    
      }
      if($(this).hasClass('dotsData')){
        config.dotsData="true";
      }
      $(this).owlCarousel(config);
    });
  });

  /*
   * 2. Scroll to Top
  */
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  /*
   * 3. Sticky Menu
  */
  $('.fixed').sticky({ topSpacing: 0 });

  /*
   * 3. Show Right Sidebar
  */
  $('.Sidebar_Tab').on('click', function() {
    $(this).addClass('active');
    $('body').addClass('Rightsidebar');
    $('#showSidebar_Tab').addClass('active');
  })

  $('.Sidebar_Card').on('click', function() {
    $(this).addClass('active');
    $('body').addClass('Rightsidebar');
    $('#showSidebar_Card').addClass('active');
  })

  $('.block-rightSidebar .block-title .iconClose, .sidebar-overlay').on('click', function() {
    $('showRightsidebar').removeClass('active');
    $('body').removeClass('Rightsidebar');
    $('.block-rightSidebar').removeClass('active');
  })

  /** Menu, Menu Mega Responsive **/
  $(document).ready(function(){
    $('#nav li a').click(function(){
      $(this).parent().removeClass('open');
      $(this).parent().toggleClass('open').siblings('.submenu').slideToggle();      
    });
  });

  $('.show-more').on('click', function() {
    $(this).parent().addClass('all');
  })

  function toggleIcon(e) {
    $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('fa-caret-right fa-caret-down');
  }
  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);

  /*  [ Main Menu ]
  - - - - - - - - - - - - - - - - - - - - */
  $(".header-mobile .show-menu").on( 'click', function() {
    $(this).toggleClass('has-open');
    $('.header .header-sidebar').toggleClass("has-open");
    $('body').toggleClass("sidebar-open");
  });
  $(".header-sidebar .iconClose-sidebar").on( 'click', function() {
    $('.header-mobile .show-menu').removeClass('has-open');
    $(".header .header-sidebar").removeClass("has-open");
    $("body").removeClass("sidebar-open");
  });

})(jQuery); // End of use strict