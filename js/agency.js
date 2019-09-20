/**
 * 
 * 
 * @author Edouard Diep
 */

var skills = $('.page-section .container .skills-bar .progress');
var languages = $('.page-section .container .lang-bar .progress');
var progressSkillsHeader = $('.page-section .container .progress-bar-header');
var progressLangHeader = $('.page-section .container .progress-lang-header');
var timelineNormal = $('.timeline .timeline-normal .timeline-panel');
var timelineInverted = $('.timeline .timeline-inverted .timeline-panel');
var timelineImage = $('.timeline .timeline-image');
var diplomeItem = $('.page-section .container .row .diplomes-item');
var aboutImage = $('#about .container #aboutImage');
var portfolioItem = $('.page-section .container .row .portfolio-item');
var aboutText = $('#about #aboutText');
var lineSkillsVisible = false;
var lineLangVisible = false;

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
$('#btn-about').delay(2200).animate({
  'opacity': '1',
  'margin-top': '15px'
}, 1500);

$(window).scroll(function () {

  var bottom_of_window = $(this).scrollTop() + $(this).outerHeight();
  var bottom_of_skills = skills.offset().top - skills.outerHeight();
  var bottom_of_languages = languages.offset().top - languages.outerHeight();
  var bottom_of_timeline = timelineNormal.offset().top - timelineNormal.outerHeight();
  var bottom_of_diplomeItem = diplomeItem.offset().top - diplomeItem.outerHeight();
  var bottom_of_portfolioItem = portfolioItem.offset().top - portfolioItem.outerHeight();
  var bottom_of_about = aboutImage.offset().top - aboutImage.outerHeight();


  if ((bottom_of_window > bottom_of_skills) && lineSkillsVisible == false) {
    this.skills.each(function () {
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

    this.progressSkillsHeader.each(function () {
      var percent = $(this).find('.percent');
      var dataPercent = parseInt(percent.data('percent'));
      var width = 0;

      var id = setInterval(frame, 30);

      // ANIMATION PERCENTS
      function frame() {

        if (width >= dataPercent) {
          clearInterval(id);
        } else {
          width++;
          percent.html(width + "%");
        }
      }
    });
    lineSkillsVisible = true;
  }

  // ANIMATION LANGUAGES 

  if ((bottom_of_window > bottom_of_languages) && lineLangVisible == false) {

    this.languages.each(function () {
      var progressBar = $(this).find('.progress-bar');
      var dataPercent = parseInt(progressBar.data('percent'));
      var width = 0;

      var id = setInterval(frame, 30);

      // ANIMATION LOGOS IT & PROGRESS BARS 
      function frame() {
        if (width > 10) {
          for (let i = 0; i <= 23; i++) {
            setTimeout(function () {
              $('#language' + i).animate({
                'opacity': '1',
                'left': '0',
              }, 1500);
            }, i * 80);
          }
        }

        if (width >= dataPercent) {
          for(let j = 0; j <= 5; j++){
            setTimeout(function () {
              $('#textLevel' + j).delay(2000).animate({
                'opacity': '1',
                'bottom': '0',
              }, 1500);
            }, j * 250);
          }
          clearInterval(id);
        } else {
          width++;
          progressBar.css('width', width + '%');
          progressBar.html(Math.round(width) + "%");
        }
      }

    });
    lineLangVisible = true;
  }

  // ANIMATION TIMELINE IMAGES & TEXTS 
  if (bottom_of_window > bottom_of_timeline) {
    timelineNormal.each(function () {
      for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
          $('#timelineNormal' + i).animate({
            'opacity': '1',
            'right': '0',
          }, 1500)
        }, i * 600);
      }
    });
    timelineInverted.each(function () {
      for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
          $('#timelineInverted' + i).animate({
            'opacity': '1',
            'left': '0',
          }, 1500)
        }, i * 1000);
      }
    })
    timelineImage.each(function () {
      for (let i = 0; i <= 6; i++) {
        setTimeout(() => {
          $('#timelineimage' + i).animate({
            'opacity': '1',
            'top': '0',
          }, 1000)
        }, i * 500);
      }
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

  // ANIMATION PORTFOLIO ITEMS 

  if (bottom_of_window > bottom_of_portfolioItem) {
    this.portfolioItem.each(function () {
      for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
          $('#portfolioItem' + i).animate({
            'opacity': '1',
            'top': '0',
          }, 2000)
        }, i * 600);
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

    this.aboutText.each(function () {
      $(this).delay(1000).animate({
        'opacity': '1',
        'top': '0'
      }, 1200);
    });
  }
});

// SELECT LANGUAGES

$(function () {
  $('.selectpicker').selectpicker();
});