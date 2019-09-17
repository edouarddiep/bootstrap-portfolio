var progress = $('.page-section .container .progress');
var timelineNormal = $('.timeline .timeline-normal .timeline-panel');
var timelineInverted = $('.timeline .timeline-inverted .timeline-panel');
var timelineImage = $('.timeline .timeline-image');
var diplomeItem = $('.page-section .container .row .diplomes-item');
var aboutImage = $('#about .container #aboutImage');
var aboutText = $('#about #aboutText');
var lineProgressVisible = false;

(function ($) {
  "use strict"; // Start of use strict


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 800, "easeInOutCubic");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });


  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// typing animation
(function ($) {
  $.fn.delay(1000).writeText = function (content) {
    var contentArray = content.split(""),
      current = 0,
      elem = this;
    setInterval(function () {
      if (current < contentArray.length) {
        elem.text(elem.text() + contentArray[current++]);
      }
    }, 75);
  };

})(jQuery);

// input text for typing animation 
$("#title-writer").writeText("Bienvenue sur mon portfolio");

// button about animation
$('#btn-about').delay(2500).animate({
  'opacity': '1',
  'margin-top': '15px'
}, 1500);

$(window).scroll(function () {


  console.log('lol');
  var bottom_of_window = $(this).scrollTop() + $(this).outerHeight();
  var bottom_of_progress = progress.offset().top - progress.outerHeight();
  var bottom_of_timeline = timelineNormal.offset().top - timelineNormal.outerHeight();
  var bottom_of_diplomeItem = diplomeItem.offset().top - diplomeItem.outerHeight();
  var bottom_of_about = aboutImage.offset().top - aboutImage.outerHeight();
  var windowVal = $(window).scrollTop();


  if ((bottom_of_window > bottom_of_progress) && lineProgressVisible == false) {
    this.progress.each(function () {
      var progressBar = $(this).find('.progress-bar');
      var dataPercent = parseInt(progressBar.data('percent'));
      var width = 0;

      var id = setInterval(frame, 30);

      // ANIMATION LOGOS IT & PROGRESS BARS 
      function frame() {
        if (width > 10) {
          for (let i = 0; i <= 23; i++) {
            setTimeout(function () {
              $('#skill' + i).animate({
                'opacity': '1',
                'left': '0',
              }, 1500);
            }, i * 80);
          }
        }

        if (width >= dataPercent) {
          clearInterval(id);
        } else {
          width += 1.2;
          progressBar.css("width", width + "%");
        }
      }
    });
    lineProgressVisible = true;
  }

  console.log('Bottom of timeline = ' + bottom_of_timeline);
  // ANIMATION TIMELINE IMAGES & TEXTS 
  if (bottom_of_window > bottom_of_timeline) {
    timelineNormal.each(function () {
      for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
          $('#timelineNormal' + i).animate({
            'opacity': '1',
            'right': '0',
          }, 1500)
        }, i * 300);
      }
    });
    timelineInverted.each(function () {
      for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
          $('#timelineInverted' + i).animate({
            'opacity': '1',
            'left': '0',
          }, 1500)
        }, i * 600);
      }
    })
    timelineImage.each(function () {
      $(this).animate({
        'opacity': '1',
        'top': '0',
      }, 2500)
    })
  }

  // ANIMATION DIPLOME & CERTIFICATS 

  if (bottom_of_window > bottom_of_diplomeItem) {
    this.diplomeItem.each(function () {
      for (let i = 0; i <= 6; i++) {
        setTimeout(() => {
          $('#diplomeItem' + i).animate({
            'opacity': '1',
            'top': '0',
          }, 2000)
        }, i * 400);
      }
    })
  }

  // ANIMATION ABOUT ME

  if (bottom_of_window > bottom_of_about) {
    this.aboutImage.each(function () {
      $(this).animate({
        'opacity': '1',
        'zoom': '100%'
      }, 2000);
      $(this).css('transform', 'rotate(0deg)');
    })

    this.aboutText.each(function (){
      $(this).delay(1500).animate({
        'opacity': '1',
      }, 2500);
    });
  }
});
