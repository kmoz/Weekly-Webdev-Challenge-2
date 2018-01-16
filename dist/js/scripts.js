$(document).ready(function(){
  // smooth scrolling
    $('a[data-scroll]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 600);
          return false;
        }
      }
    });

    // Auto-hide collapse nav
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

   // Galerry view more button
   $('.gallery .hidden-item').hide();
   $('#btn-view-more').click(function(){
     $('.hidden-item').fadeIn(1200);
     $('#btn-view-more').fadeOut(500);
   });
});
