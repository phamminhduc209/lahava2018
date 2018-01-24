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
  $('.showRightsidebar').on('click', function() {
    $(this).addClass('active');
    $('body').addClass('Rightsidebar');
    $('.block-rightSidebar').addClass('active');
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


})(jQuery); // End of use strict