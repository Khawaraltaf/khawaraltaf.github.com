$(document).ready(function(){
    
    /* For the sticky Navigation */
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            
            $('nav').addClass('sticky');
            
             } else {
                 $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
});
    
    /* Scroll on Buttons */
    
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll css (Original jQuery Example) Website: https://css-tricks.com/smooth-scrolling-accessibility/ */
    
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    
    /* Animate on Scroll, using wappoint plugin  (website:https://animate.style/) */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp'); 
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse'); 
    }, {
        offset: '50%'
    });
    
    /* Mobile Nav */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--main-nav i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-android-close');
            icon.removeClass('ion-navicon-round');
        } else { 
             icon.addClass('ion-navicon-round');
             icon.removeClass('ion-android-close');
   
        }
    });
    
    
});