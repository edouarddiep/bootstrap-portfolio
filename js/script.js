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
var mainPicture = $('.mainPicture');
var aboutImage = $('#about .container #aboutImage');
var arrowAbout = $('#about .container #arrowAbout');
var portfolioItem = $('.page-section .container .row .portfolio-item');
var aboutText = $('#about #aboutText');
var aboutInfos = $('#about #profilInfos');
var aboutQualifier = $('#about #profilQualifier');
var lineSkillsVisible = false;
var lineLangVisible = false;

(function ($) {
  "use strict"; // Start of use strict

  // set default window hash
  if (!window.location.hash || window.location.hash !== "#en") {
    window.location.hash = "#fr";
  }

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
    }, 65);
  };

})(jQuery);


// main picture animation

mainPicture.delay(200).animate({
  'opacity': '1',
  'bottom': '0'
}, 2500);

// button about animation
$('#btn-about').delay(2200).animate({
  'opacity': '1',
  'margin-top': '15px'
}, 1500);


// Modal inside modal animation
$('#bulletinsLink').click(function (e) {
  e.preventDefault();
  $('#diplomesModal1')
    .modal('hide')
    .on('hidden.bs.modal', function (e) {
      $('#diplomesModal10').modal('show');
      $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
    });
});

$('#diplomesModal10Close').click(function (e) {
  e.preventDefault();
  $('#diplomesModal10')
    .modal('hide')
    .on('hidden.bs.modal', function (e) {
      $('#diplomesModal1').modal('show');
      $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
    });
});

// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

// Scrolling event
$(window).scroll(function () {

  var bottom_of_window = $(this).scrollTop() + $(this).outerHeight();
  var bottom_of_skills = skills.offset().top - skills.outerHeight();
  var bottom_of_languages = languages.offset().top - languages.outerHeight();
  var bottom_of_timeline = timelineNormal.offset().top - timelineNormal.outerHeight();
  var bottom_of_diplomeItem = diplomeItem.offset().top - diplomeItem.outerHeight();
  var bottom_of_portfolioItem = portfolioItem.offset().top - portfolioItem.outerHeight();
  var bottom_of_about = aboutImage.offset().top - aboutImage.outerHeight();


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

    this.aboutQualifier.delay(1300).animate({
      'opacity': '1',
      'bottom': '0'
    }, 1200);

    this.aboutInfos.delay(1400).animate({
      'opacity': '1',
      'bottom': '0'
    }, 1200);

  }


  if ((bottom_of_window > bottom_of_skills) && lineSkillsVisible == false) {
    this.skills.each(function () {
      var progressBar = $(this).find('.progress-bar');
      var dataPercent = parseInt(progressBar.data('percent'));
      var width = 0;

      var id = setInterval(frame, 30);

      // ANIMATION LOGOS IT & PROGRESS BARS 
      function frame() {
        if (width > 10) {
          for (let i = 0; i <= 24; i++) {
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

  // ANIMATION LANGUAGES 

  if ((bottom_of_window > bottom_of_languages) && lineLangVisible == false) {

    this.languages.each(function () {
      var progressBar = $(this).find('.progress-bar');
      var dataPercent = parseInt(progressBar.data('percent'));
      var width = 0;

      var id = setInterval(frame, 30);

      // ANIMATION LOGOS LANGUAGES & PROGRESS BARS 
      function frame() {
        if (width > 10) {
          for (let i = 0; i <= 5; i++) {
            setTimeout(function () {
              $('#language' + i).animate({
                'opacity': '1',
                'left': '0',
              }, 1500);
            }, i * 80);
            setTimeout(function () {
              $('#textFlag' + i).delay(1500).animate({
                'opacity': '1',
                'left': '0',
              }, 1500);
            }, i * 100);
          }
        }

        // ANIMATION LANGUAGES TEXT 
        if (width >= dataPercent) {
          for (let j = 0; j <= 5; j++) {
            setTimeout(function () {
              $('#textLevel' + j).delay(250).animate({
                'opacity': '1',
                'right': '0',
              }, 1500);
            }, j * 130);
          }
          clearInterval(id);
        } else {
          width += 2;
          progressBar.css('width', width + '%');
        }
      }

    });
    lineLangVisible = true;
  }



  // ANIMATION DIPLOME & CERTIFICATS 

  if (bottom_of_window > bottom_of_diplomeItem) {
    this.diplomeItem.each(function () {
      for (let i = 0; i <= 9; i++) {
        setTimeout(() => {
          $('#diplomeItem' + i).animate({
            'opacity': '1',
            'top': '0',
          }, 1500)
        }, i * 200);
      }
    })
  }

  // ANIMATION PORTFOLIO ITEMS   

  if (bottom_of_window > bottom_of_portfolioItem) {
    this.portfolioItem.each(function () {
      for (let i = 0; i <= 4; i++) {
        setTimeout(() => {
          $('#portfolioItem' + i).animate({
            'opacity': '1',
            'top': '0',
          }, 2000)
        }, i * 500);
      }
    })
  }

});

// SELECT LANGUAGES


// define language reload anchors

$('#locale_fr').click(function () {
  window.location.hash = '#fr';
  location.reload(true);
});

$('#locale_en').click(function () {
  window.location.hash = '#en';
  location.reload(true);
});

$('#desktopLocale_fr').click(function () {
  window.location.hash = '#fr';
  location.reload(true);
});

$('#desktopLocale_en').click(function () {
  window.location.hash = '#en';
  location.reload(true);
});

// Languages translations 
var language = {
  en: {
    skill: "Skills",
    profil: "About me",
    lang: "Languages",
    formation: "Education",
    diplomes: "Diplomas",
    about: "About me",
    profilQualifier: "Full Stack Developer",
    profilInfos: "born 28th April 1994 / Swiss citizenship / Single",
    skillsTitle: "Skills",
    skillsSubtitle: "Units below are originally based on a scale from 1% (poor knowledge) to 100% (mastery)",
    clickImagesSubtitle: "Click on the illustrations below for more details",
    portfolioDescr: "Responsive web application developped using web technologies (HTML 5, CSS 3 and JavaScript 8) and Bootstrap 4 Framework",
    vaudvinDescr: "Hybrid mobile application programmed with Ionic 4 (Front End) and Laravel PHP 5 (Back End) Frameworks technologies",
    fndDescr: "Responsive Web Application coded using Angular 7 (Front End) and DjangoREST (Back End) Frameworks technologies",
    biblTitle: "Virtual Library",
    biblDescr: "Thick Client Application developped using Vaadin 10 Framework based on Java EE language. Datas are stored using JPA as local storage",
    gcbDescr: "Thick Client Application fully developped using Java SE 8 programming language. Datas are stored on an Oracle database",
    formationTitle: "Education & Training",
    textFormation1: "Business Computing",
    textFormation2: "Reception and restaurant service internship",
    datesFormation2: "2015",
    datesFormation3: "2014",
    textFormation3: "Ranked military service",
    lieuFormation3: "Bière's military barracks",
    textFormation4: "Commercial Professional Maturity",
    lieuFormation4: "Nicolas-Bouvier Business School",
    textFormation5: "Final year internship (VET)",
    textFormation6: "Federal Certificate of Capacity",
    languageTitle: "Languages",
    languageSubtitle: "Below skills levels are based on <a href='https://www.coe.int/fr/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale' target='_blank' data-title='Click to follow the link'>CECRL european referential</a>",
    textFlag1: "French",
    textLevel1: "Mother tongue",
    textFlag2: "English",
    textLevel2: "B2",
    textFlag3: "Italian",
    textLevel3: "B2",
    textFlag4: "German",
    textLevel4: "A2",
    textFlag5: "Modern Greek",
    textLevel5: "A1",
    aboutDescription: "Recently graduated from a Bachelor of Science HES-SO in Business Computing, through my achieved know-how as a true information architect into software development, I am looking for a job that would give me the opportunity to expand my acquired skills throughout four years of Bachelor's education and training. <br/> By nature I am dynamic, patient, persevering, optimistic, selfless, self-taught, passionate about new technologies, self-taught while having a significant team spirit, I am ready to integrate a work group in an evolving domain such as Front End, Back End or Full Stack development.",
    diplomesTitle: "Diplomas and certificates",
    diplome1Title: "Bachelor's Degree in Business Computing",
    diplome3Title: "Commercial Professional Maturity",
    diplome3Subtitle: "Business School Nicolas-Bouvier",
    diplome4Title: "Commercial Certificate of Capacity",
    diplome5Title: "Advanced commercial diploma",
    diplome6Title: "Sergeant's promotion certificate",
    diplome6Subtitle: "Swiss Army",
    workCertificateTitle: "Work certificate",
    hegTitle: "Haute Ecole de Gestion - Geneva",
    schulzTitle: "Ecole Schulz - Geneva",
    diplome7Subtitle: "Calvy Hotel - Geneva",
    diplome8Subtitle: "Olexco SA - Geneva",
    contactTitle: "Contact me",
    contactSubtitle: "To contact me, please fill in all the fields of the form below",
    namePlaceholder: "Name*",
    nameRequired: "Please enter your name.",
    emailPlaceholder: "E-mail address*",
    emailRequired: "Please enter an e-mail address.",
    phonePlaceholder: "Phone number*",
    phoneRequired: "Please enter a phone number.",
    msgPlaceholder: "Message*",
    msgRequired: "Please enter a message.",
    sendMessageButton: "Send message",
    knowMoreTitle: "Click for more informations",
    moreDetailsTitle: "Click for more details",
    seeProjectTitle: "Click to see the project",
    diplomeText1: "Click to see the diploma",
    diplomeText2: "Click to see the certificate",
    linkedinText: "Linkedin Page",
    githubText: "Github Page",
    emailText: "Send an email",
    lieuFormation1: "HEG - Geneva",
    lieuFormation2: "Calvy Hotel",
    lieuFormation6: "Ecole Schulz",
    closeText: "<i class='fas fa-times' ></i> Close preview",
    // LES MODALES DE FORMATION
    formationModal1Title: "Business Computing",
    formationModal1Subtitle1: "Advanced studies' level - Bachelor",
    formationModal1Subtitle2: "HEG - Geneva | Campus de Battelle, Rue de la Tambourine 17, 1227 Carouge - Geneva",
    formationModal1Descr: "Acquired knowledge during Bachelor's education years are the following :<ul style='text-align: left'><li>Web programming languages : HTML, CSS/SASS, JS/TypeScript</li><li>Server-oriented languages : Java 8, PHP 5, Python 3</li><li>Front-End Frameworks : Angular 7, Ionic 4</li><li>Back-End Frameworks : Laravel PHP, Django REST Framework</li><li>Collaborating tools and Git versionning</li><li>Agile delivery methods : SCRUM et DAD</li><li>Windows Server 2016's Active Directory installation</li><li>Basics Shell scripts under Ubuntu 16.04</li><li>Cisco Networking administration and configuration</li></ul>",
    formationModal1Date: "End-of-studies : 21st June 2019",
    formationModal2Title: "Calvy Hotel",
    formationModal2Subtitle1: "Hotel Internship",
    formationModal2Subtitle2: "Reception and restaurant service",
    formationModal2Subtitle3: "Calvy Hotel | Ruelle du Midi 5, 1207 Geneva",
    formationModal2Descr: "As an internship apprentice at Calvy Hotel, I was in charge of the following tasks :<ul style='text-align: left'><li>Customer reception at the office (check-in/check-out)</li><li>Restaurant lunch service</li><li>Management of the Fund</li><li>Phone and e-mail's booking management</li><li>Updating receivables and entry of accounting documents</li></ul>",
    formationModal2Date: "End-of-internship : 31st July 2015",
    formationModal3Title: "Ranked military service as sergeant",
    formationModal3Subtitle1: "Bière's military barracks | Swiss Army",
    formationModal3Descr: "I accomplished my recruit school, non-commissioned officers' school and my ranked military service at Bière's military barracks. I was affected as a transmission's non-commissionned officier in the artillery troupe. I learned how to handle soldiers under my command as an MG64 12.7mm weapon's instructor and SE-235/135 radio communication systems. I held the rank of sergeant and assumed the role of group leader incorporated into \"Dir Feu\" battery of the Artillery Group 1 from the Armoured Brigade 1.",
    formationModal3Date: "End-of-service : 21st November 2014",
    formationModal4Title: "Training as commercial employee",
    formationModal4Subtitle1: "Professional Maturity's degree",
    formationModal4Subtitle2: "Nicolas Bouvier Business School | Rue de Saint-Jean 60, 1203 Geneva",
    formationModal4Descr: "Professional Maturity provided me strong skills in the following areas : <ul style='text-align: left; margin-left:20px;'><li>Management accounting</li><li>Cost accounting</li><li>Swiss legislation</li><li>Mathematics, statistics</li><li>Common and literary Italian (B2 level)</li><li>General and business English (B2 level)</li></ul>",
    formationModal4Date: "End-of-studies : 20th June 2014",
    formationModal5Title: "Olexco SA",
    formationModal5Subtitle1: "Final year internship - VET level",
    formationModal5Subtitle2: "Olexco SA | Place de l'Université 6, 1205 Geneva",
    formationModal5Descr: "This internship allowed me to put into practice my school knowledge acquired during my VET's education. During this year, I have been dealing with the following tasks :<ul style='text-align: left' class='col-lg-14 ml-2'><li>Mail management</li><li>Client reception</li><li>Reception of incoming phone calls</li><li>Preparation of yearly folders and customers' directories</li><li>Creation and update of the existing customers' files</li><li>Small correspondence</li><li>Entry of accounting documents</li><li>Preparation of closing entries</li><li>Handling Excel reporting</li><li>Archiving and folders's filing</li><li>Miscellaneous administrative tasks</li></ul>",
    formationModal5Date: "End-of-internship : 31st July 2012",
    formationModal6Title: "Training of Federal VET Diploma in commerce - Type E",
    formationModal6Subtitle2: "Ecole Schulz | Rue du 31 Décembre 8, 1207 Geneva",
    formationModal6Descr: "Throughout my VET training and education I received, after two years, an advanced commercial diploma in computing and management with Honours (\"Mention : Bien\"), and studied the following areas :<ul style='text-align: left'><li>General enterprise accounting</li><li>Commercial arithmetic</li><li>Enterprise economy</li><li>French commercial letters</li><li>General English (B2 level) and business basics</li><li>Microsoft Office 365</li><li>Swiss legislation and civic education</li></ul>",
    formationModal6Date: "End-of-studies : 22nd June 2012",
    // LES MODALES DE PORTFOLIO
    portfolioModal0Title: "My e-Portfolio",
    portfolioModal0Subtitle: "Responsive web application developped using web technologies (HTML 5, CSS 3 and JavaScript 8) and Bootstrap 4 Framework as part of a private and personal project",
    portfolioModal0Descr: "This project has been developped right after the end of my studies in view to keep updated my online personnal profile including acquired skills, all IT projects, my achieved formation, known languages and also delivered diplomas and certificates. This portfolio was made in view to create a professionnal profile which allows me to always keep my information up-to-date and build a custom graphic interface for my digital identity, in addition to existing social networks.",
    portfolioModal0StartDate: "Production date : September 2019",
    portfolioModal0Source: "Source code : <a target='_blank' href='https://github.com/edouarddiep/bootstrap-portfolio'>ePortfolio Project</a>",
    portfolioModal1Title: "VaudVin Project",
    portfolioModal1Subtitle: "Hybrid mobile application developed as part of my Bachelor's final work",
    portfolioModal1Descr: "This project has been thought, conceived and introduced as part of my Bachelor's final work. Indeed, I collaborated with a principal who co-owned a wine contests' company and wished to expand its existing services. The purpose of this application was to introduce to local consumers a brand new rating and evaluation's platform for swiss wines, in order to encourage them to consume local grape varieties instead of foreign imported products. This software has been developed using Ionic 4 Framework (Front End) and Laravel PHP 5 (Back End). It uses a PostGreSQL database as global data storage.",
    portfolioModal1StartDate: "Start date : June 2019",
    portfolioModal1EndDate: "End date : September 2019",
    portfolioModal1Source: "Source code : <a target='_blank' href='https://github.com/edouarddiep/VaudVin-front'>VaudVin Project</a>",
    portfolioModal2Title: "FoodNextDoor Project",
    portfolioModal2Subtitle: "Responsive Web Application developed using Angular 7 Framework (Front End) and DjangoREST Framework (Back End) as part of a group project.",
    portfolioModal2Descr: "This project was built on the basis of an agile methodology named DAD (Disciplined Agile Delivery). From inception phase to construction, followed by transition and finally unit tests, every step was rigorously followed by all four members of the project board. Indeed, we were mandated to create a responsive web application, cross-platform compatible, from which the purpose was to allow individuals to generate additional incomes while making a transaction without the need of a business actor (such as a restaurant or a delivery company). This project was built using Angular 7 Framework (Front End) and DjangoREST (Back End). Both were linked with the help of a PostGreSQL database which was used as a global data storage.",
    portfolioModal2StartDate: "Start date : September 2018",
    portfolioModal2EndDate: "End date: May 2019",
    portfolioModal2Source: "Source code : <a target='_blank' href='https://github.com/edouarddiep/foodnextdoor-front'>FoodNextDoor Project</a>",
    portfolioModal3Title: "Virtual Library Project",
    portfolioModal3Subtitle: "Heavy application built using Vaadin 10 Framework based on Java Enterprise Edition coded using IntelliJ IDEA's IDE as part of a school project achieved individually.",
    portfolioModal3Descr: "The purpose of this project was to get acquainted with developement Frameworks, in view to assist native coding. Indeed, it was conceived as part of an intermediate school exam and I was asked to build a virtual book library using Vaadin 10 Framework based on Java EE 8 language. At the end of this project, the user was able to create, save and update his own books thanks to JPA (Java Persistance API) which was used as a local data storage.",
    portfolioModal3StartDate: "Start date : September 2018",
    portfolioModal3EndDate: "End date : January 2019",
    portfolioModal3Source: "Source code : <a target='_blank' href='https://github.com/edouarddiep/BibliothequeVaadin'>Vaadin Library Project</a>",
    portfolioModal4Title: "GlobalClassBooking Project",
    portfolioModal4Subtitle: "Heavy application fully built using Java SE 8 programming language as part of a very first school project achieved individually.",
    portfolioModal4Descr: "This project represents my very first practical experiment in software developement. Indeed, it was conceived as part of an intermediate school exam and I was free to choose the application's topic. Therefore, I imagined a platform which allows the registered user to subscribe to free slots' group classes using his personnal account, among several sport clubs located in Geneva city. All clubs and classes are locally stored in a database. The purpose was to give the user the possibility to check which courses are currently availables and give his own opinion on those to which he participated, or check other customers' opinions. This project has been fully built using Java SE 8 programming language, based on JDK 1.8 and using an Oracle local database.",
    portfolioModal4StartDate: "Start date : September 2017",
    portfolioModal4EndDate: "End date : January 2018",
    portfolioModal4Source: "Source code : <a target='_blank' href='https://github.com/edouarddiep/GlobalClassBooking'>GlobalClassBooking Project</a>",
    // LES MODALES DE DIPLOMES ET CERTIFICATS
    diplomesModal1Title: "BACHELOR OF SCIENCE HES-SO",
    diplomesModal1Subtitle1: "In Business Information Systems",
    diplomesModal1Subtitle2: "HEG - Geneva | Campus de Battelle, Rue de la Tambourine 17, 1227 Carouge - Geneva",
    diplomesModal1Subtitle3: "See marks report",
    diplomesModal1Date: "Delivery date : 11th September 2019",
    diplomesModal2Title: "CISCO CCENT CERTIFICATE OF ACHIEVEMENT",
    diplomesModal2Subtitle: "HEG - Geneva | Campus de Battelle, Rue de la Tambourine 17, 1227 Carouge - Geneva",
    diplomesModal2Date: "Delivery date : 22nd June 2017",
    diplomesModal3Title: "Professional Maturity Diploma",
    diplomesModal3Subtitle: "Nicolas Bouvier Business School | Rue de Saint-Jean 60, 1203 Geneva",
    diplomesModal3Date: "Delivery date : 2nd September 2014",
    diplomesModal4Title: "Federal VET Diploma in Commerce - Type E",
    diplomesModal4Subtitle: "Ecole Schulz | Rue du 31 Décembre 8, 1207 Geneva",
    diplomesModal4Date: "Delivery date : 25th September 2012",
    diplomesModal5Title: "Advanced Commercial Diploma with Honours (\"MENTION : BIEN\")",
    diplomesModal5Subtitle: "Ecole Schulz | Rue du 31 Décembre 8, 1207 Geneva",
    diplomesModal5Date: "Delivery date : 30th June 2011",
    diplomesModal6Title: "Ranked military Certificate (Sergeant)",
    diplomesModal6Subtitle: "Bière's military barracks | Swiss Army",
    diplomesModal6Date: "Promotion date : 27th September 2014",
    diplomesModal7Title: "Calvy Hôtel",
    diplomesModal7Subtitle1: "Work Certificate",
    diplomesModal7Subtitle2: "Calvy Hotel | Ruelle du Midi 5, 1207 Geneva",
    diplomesModal7Date: "Delivery date : 18th August 2015",
    diplomesModal8Title: "OLEXCO SA",
    diplomesModal8Subtitle1: "Work Certificate",
    diplomesModal8Subtitle2: "Olexco SA | Place de l'Université 6, 1205 Geneva",
    diplomesModal8Date: "Delivery date : 31st July 2012",
    diplomesModal9Title: "CROSSFIT LEVEL 1 CERTIFICATION",
    diplomesModal9Subtitle: "CrossFit GVA | Rue de Lyon 27BIS, 1201 Geneva",
    diplomesModal9Date: "Delivery date : 9th August 2015",
    diplomesModal10Title: "Marks report | Bachelor's degree",
    diplomesModal10Subtitle: "HEG - Geneva | Campus de Battelle, Rue de la Tambourine 17, 1227 Carouge - Geneva",
    diplomesModal10Date: "Delivery date : 17th September 2019",
    seeNotesText: "Click to see the report",
    copyrightText: "Copyright &copy; E. Diep 2019 ",
    siteLanguage: "Select language",
  },
  fr: {
    skill: "Compétences",
    profil: "A propos",
    lang: "Langues",
    formation: "Formation",
    diplomes: "Diplômes",
    about: "A propos",
    profilQualifier: "Développeur Full-Stack",
    profilInfos: "né le 28 avril 1994 / Suisse / Célibataire",
    skillsTitle: "Compétences",
    skillsSubtitle: "Les unités ci-dessous sont basées sur une échelle de 1% (faible connaissance) à 100% (maîtrise)",
    clickImagesSubtitle: "Cliquez sur les illustrations pour plus de détails",
    portfolioDescr: "Web responsive application développée avec les technologies web (HTML 5, CSS 3 et JavaScript 8) et utilisant le Framework Bootstrap 4",
    vaudvinDescr: "Application mobile hybride développée avec les Frameworks Ionic 4 (Front End) et Laravel PHP 5 (Back End). Utilise une base PostGreSQL pour le stockage local des données",
    fndDescr: "Responsive WebApp développée à l'aide des Frameworks Angular 7 (Front End) et DjangoREST (Back End)",
    biblTitle: "Bibliothèque Virtuelle",
    biblDescr: "Application lourde développée avec le Framework Vaadin 10 basé sur le langage Java. Les données sont stockées localement à l'aide de JPA",
    gcbDescr: "Application lourde entièrement développée en langage Java SE 8 et utilisant une base de données Oracle",
    formationTitle: "Formation",
    textFormation1: "Informatique de gestion",
    textFormation2: "Stage à la réception et service en salle",
    datesFormation2: "2015",
    datesFormation3: "2014",
    textFormation3: "Paiement de galons",
    lieuFormation3: "Caserne militaire de Bière",
    textFormation4: "Maturité Professionnelle Commerciale",
    lieuFormation4: "EC Nicolas-Bouvier",
    textFormation5: "Stage pratique de dernière année (CFC)",
    textFormation6: "CFC d'Employé de Commerce - Profil E",
    languageTitle: "Langues",
    languageSubtitle: "Les niveaux ci-dessous sont décrits selon <a href='https://www.coe.int/fr/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale' target='_blank' data-title='Cliquez pour suivre le lien'>le cadre européen de référence CECRL</a>",
    textFlag1: "Français",
    textLevel1: "Langue maternelle",
    textFlag2: "Anglais",
    textLevel2: "B2",
    textFlag3: "Italien",
    textLevel3: "B2",
    textFlag4: "Allemand",
    textLevel4: "A2",
    textFlag5: "Grec moderne",
    textLevel5: "A1",
    aboutDescription: "Récemment diplômé d'un Bachelor HES en Informatique de gestion et véritable architecte de l'information grâce à mon savoir-faire en tant qu'informaticien de gestion, je suis à la recherche d'un emploi qui me permettrait de développer mes compétences assimilées durant mes quatre ans de formation. <br/> De nature dynamique, patient, persévérant, optimiste, altruiste, passionné par les nouvelles technologies, autodidacte et avec un bon esprit d'équipe, je suis prêt à intégrer un team dans un domaine évolutif comme le développement applicatif Front-End, Back-End ou Full-Stack.",
    diplomesTitle: "Diplômes et certificats",
    diplome1Title: "Bachelor HES-SO <br/> <h6>en Informatique de Gestion<h6>",
    diplome3Title: "Maturité professionnelle commerciale",
    diplome3Subtitle: "École de commerce Nicolas-Bouvier",
    diplome4Title: "CFC d'Employé de Commerce - Profil E",
    diplome5Title: "Diplôme supérieur de commerce",
    diplome6Title: "Brevet de promotion Sergent",
    diplome6Subtitle: "Armée Suisse",
    workCertificateTitle: "Certificat de travail",
    hegTitle: "Haute école de gestion - Genève",
    schulzTitle: "École Schulz - Genève",
    diplome7Subtitle: "Hôtel Calvy - Genève",
    diplome8Subtitle: "Olexco SA - Genève",
    contactTitle: "Contactez-moi",
    contactSubtitle: "Pour me contacter, veuillez remplir tous les champs du formulaire ci-dessous",
    namePlaceholder: "Nom*",
    nameRequired: "Veuillez saisir votre nom.",
    emailPlaceholder: "Adresse e-mail*",
    emailRequired: "Veuillez saisir une adresse e-mail.",
    phonePlaceholder: "Numéro de téléphone*",
    phoneRequired: "Veuillez saisir un numéro de téléphone.",
    msgPlaceholder: "Message*",
    msgRequired: "Veuillez saisir un message.",
    sendMessageButton: "Envoyer le message",
    knowMoreTitle: "Cliquez pour en savoir plus",
    moreDetailsTitle: "Cliquez pour plus de détails",
    seeProjectTitle: "Cliquez pour voir le projet",
    seeDiplomeTitle: "Cliquez pour voir le diplôme",
    seeCertificateTitle: "Cliquez pour voir le certificat",
    linkedinText: "Page Linkedin",
    githubText: "Page Github",
    emailText: "Envoyer un e-mail",
    lieuFormation1: "HEG - Genève",
    lieuFormation2: "Hôtel Calvy",
    lieuFormation6: "École Schulz",
    diplomeText1: "Cliquez pour voir le diplôme",
    diplomeText2: "Cliquez pour voir le certificat",
    diplomeText3: "Cliquez pour voir le brevet",
    closeText: "<i class='fas fa-times' ></i> Fermer l'aperçu",
    // LES MODALES DE FORMATIONS
    formationModal1Title: "Informatique de gestion",
    formationModal1Subtitle1: "Niveau HES - Bachelor",
    formationModal1Subtitle2: "HEG - Genève | Campus de Battelle, Rue de la Tambourine 17, 1227 Carouge - Genève",
    formationModal1Descr: "Les connaissances acquises durant le cursus du Bachelor HES sont les suivantes :<ul style='text-align: left'><li>Langages de programmation web : HTML, CSS/SASS, JS/TypeScript</li><li>Langages serveurs : Java 8, PHP 5, Python 3</li><li>Frameworks Front-End : Angular 7, Ionic 4</li><li>Frameworks Back-End : Laravel PHP, Django REST Framework</li><li>Outils de collaboration et versionning Git</li><li>Méthodes agiles de gestion de projet : SCRUM et DAD</li><li>Installation d'active directory sous Windows Server 2016</li><li>Introduction aux scripts shell sous Ubuntu 16.04</li><li>Administration de réseaux Cisco</li></ul>",
    formationModal1Date: "Fin des études : 21 juin 2019",
    formationModal2Title: "Hôtel Calvy",
    formationModal2Subtitle1: "Stage en hôtellerie",
    formationModal2Subtitle2: "Réception & service en salle",
    formationModal2Subtitle3: "Hôtel Calvy | Ruelle du Midi 5, 1207 Genève",
    formationModal2Date: "Fin de stage : 31 juillet 2015",
    formationModal2Descr: "En tant que stagiaire à l'hôtel Calvy, j'ai eu pour mission les tâches suivantes :<ul style='text-align: left'><li>Accueil des clients à la réception (check-in/check-out)</li><li>Service au restaurant</li><li>Tenue de la caisse</li><li>Prises des réservations par téléphone et e-mail</li><li>Mise à jour des débiteurs et saisie des pièces comptables</li></ul>",
    formationModal3Title: "Paiement de galons en tant que sergent",
    formationModal3Subtitle1: "Caserne militaire de Bière | Armée Suisse",
    formationModal3Descr: "J'ai fait mon école de recrue, école de sous-officier ainsi que mon paiement de galons dans la caserne militaire de Bière. J'avais comme fonction le rôle de sous-officier de transmission à l'école d'artillerie 31-1. J'ai acquis le sens du commandement de troupe en tant qu'instructeur MG64 12.7mm et radio SE-235/135. J'étais chef de groupe au grade de sergent, incorporé dans la batterie Dir Feu du Groupe Art. 1 de la Brigade Blindée 1.",
    formationModal3Date: "Fin de service : 21 novembre 2014",
    formationModal4Title: "Formation d'Employé de commerce",
    formationModal4Subtitle1: "Niveau maturité professionnelle",
    formationModal4Subtitle2: "Ecole de Commerce Nicolas Bouvier | Rue de Saint-Jean 60, 1203 Genève",
    formationModal4Descr: "La maturité professionnelle m'a offert de solides compétences dans les domaines suivants : <ul style='text-align: left; margin-left:20px;'><li>Comptabilité de gestion</li><li>Comptabilité analytique d'entreprise</li><li>Droit suisse</li><li>Mathématiques statistiques</li><li>Italien courant et littéraire (niveau B2)</li><li>Anglais général et commercial (niveau B2)</li></ul>",
    formationModal4Date: "Fin des études : 20 juin 2014",
    formationModal5Title: "Olexco SA",
    formationModal5Subtitle1: "Stage de dernière année - Niveau CFC",
    formationModal5Subtitle2: "Olexco SA | Place de l'Université 6, 1205 Genève",
    formationModal5Descr: "Ce stage m'a permis de mettre en pratique les connaissances scolaires acquises durant mon CFC. Durant cette année de travail, j'ai été amené à gérer les tâches suivantes :<ul style='text-align: left' class='col-lg-14 ml-2'><li>Gestion du courrier</li><li>Accueil des clients</li><li>Réception des appels téléphoniques</li><li>Préparation des classeurs annuels et répertoires clients</li><li>Création et mise à jour des fichiers clients existants</li><li>Petite correspondance</li><li>Saisie de pièces comptables</li><li>Préparation des écritures de bouclement</li><li>Tenue du reporting Excel</li><li>Archivage et classement des dossiers</li><li>Tâches administratives diverses</li></ul>",
    formationModal5Date: "Fin de stage : 31 juillet 2012",
    formationModal6Title: "Formation d'Employé de Commerce",
    formationModal6Subtitle1: "Niveau CFC - Profil E",
    formationModal6Subtitle2: "Ecole Schulz | Rue du 31 Décembre 8, 1207 Genève",
    formationModal6Descr: "Tout au long de ce cursus CFC en formation élargie, j'ai obtenu après deux ans, un diplôme supérieur de commerce en informatique et gestion mention bien et étudié les domaines suivants : <ul style='text-align: left'><li>Comptabilité générale d'entreprise</li><li>Arithmétique commerciale</li><li>Économie d'entreprise</li><li>Correspondance française</li><li>Anglais général (niveau B2) et bases commerciales</li><li>Microsoft Office 365</li><li>Droit et instruction civique</li></ul>",
    formationModal6Date: "Fin des études : 22 juin 2012",
    // LES MODALES DE PORTFOLIO
    portfolioModal0Title: "Mon e-Portfolio",
    portfolioModal0Subtitle: "Web responsive application développée avec les technologies web (HTML 5, CSS 3 et JavaScript 8) et utilisant le Framework Bootstrap 4 dans le cadre d'un projet personnel et privé",
    portfolioModal0Descr: "Ce projet a été réalisé de manière individuelle à la suite de mes études dans le but de tenir à jour un profil en ligne contenant mes compétences acquises, tous mes projets informatiques, ma formation terminée, les langues et également les diplômes et certificats acquis. Ce portfolio a été développé afin de créer un profil professionnel qui me permet de toujours conserver mes informations à jour et me construire une interface visuelle personnalisée pour mon identité digitale, en plus des réseaux sociaux traditionnels.",
    portfolioModal0StartDate: "Date de production : Septembre 2019",
    portfolioModal0Source: "Code source : <a target='_blank' href='https://github.com/edouarddiep/bootstrap-portfolio'>Projet ePortfolio</a>",
    portfolioModal1Title: "Projet VaudVin",
    portfolioModal1Subtitle: "Application mobile hybride développée dans le cadre de mon travail de fin d'études.",
    portfolioModal1Descr: "Ce projet a été pensé, réalisé et présenté dans le cadre de mon travail de bachelor. En effet, j'ai collaboré avec un client qui avait pour idée d'étendre les services déjà existants dans sa société. Le but de l'application était de proposer une plateforme de notation et d’évaluation de vins suisses aux consommateurs locaux, afin de les inciter à vouloir consommer des cépages de la région aux dépens des importations étrangères. Ce projet a été développé à l'aide des frameworks Ionic 4 (Front-End) et Laravel PHP 5 (Back-End). Il utilise une base de données PostGreSQL comme stockage global des données.",
    portfolioModal1StartDate: "Date de début : Juin 2019",
    portfolioModal1EndDate: "Date de fin : Septembre 2019",
    portfolioModal1Source: "Code source : <a target='_blank' href='https://github.com/edouarddiep/VaudVin-front'>Projet VaudVin</a>",
    portfolioModal2Title: "Projet FoodNextDoor",
    portfolioModal2Subtitle: "Responsive WebApp développée à l'aide des Frameworks Angular 7 (Front End) et DjangoREST (Back-End) dans le cadre d'un projet d'études en groupe.",
    portfolioModal2Descr: "Ce projet a été conçu sur la base d'une méthode agile de gestion de projet : DAD (Disciplined Agile Delivery). De la phase investigation à la construction, puis la transition en passant par les tests unitaires, chacune des étapes a été scrupuleusement suivie par chacun des quatre membres constituant le comité du projet. En effet, nous avions été mandaté afin de réaliser une web application responsive, compatible multi-plateforme, dont l'objectif était de pouvoir proposer une plateforme de mise en relation entre un particulier et un autre, afin de leur permettre de générer des revenus annexes en préparant des plats à domicile. L'objectif était d'effectuer une transaction sans passer par un professionnel (restaurant ou société de livraison par exemple). Ce projet a été développé à l'aide des Frameworks Angular 7 (Front-End) et DjangoREST (Back-End). Les deux étaient reliés à l'aide d'une base de données PostGreSQL qui servait de stockage global.",
    portfolioModal2StartDate: "Date de début : Septembre 2018",
    portfolioModal2EndDate: "Date de fin : Mai 2019",
    portfolioModal2Source: "Code source : <a target='_blank' href='https://github.com/edouarddiep/foodnextdoor-front'>Projet FoodNextDoor</a>",
    portfolioModal3Title: "Projet Bibliothèque Virtuelle",
    portfolioModal3Subtitle: "Application lourde développée à l'aide du Framework Vaadin 10 basé sur le language Java Edition Entreprise construire sur l'IDE IntelliJ IDEA dans le cadre d'un projet d'études réalisé de manière individuelle.",
    portfolioModal3Descr: "L'objectif de ce projet était de se familiariser avec les Frameworks de développement qui permettent d'assister le développement natif en Java. En effet, il a été réalisé dans le cadre d'un examen demandé par l'école et dont le but était de construire une bibliothèque virtuelle de livres en utilisant le Framework Vaadin 10 basé sur le langage Java EE 8. A la fin de ce projet, l'utilisateur pouvait créer, sauvegarder et modifier ses propres livres à l'aide d'une persistance JPA (Java Persistance API) qui était utilisée comme stockage local de données.",
    portfolioModal3StartDate: "Date de début : Septembre 2018",
    portfolioModal3EndDate: "Date de fin : Janvier 2019",
    portfolioModal3Source: "Code source : <a target='_blank' href='https://github.com/edouarddiep/BibliothequeVaadin'>Projet Bibliothèque Virtuelle</a>",
    portfolioModal4Title: "Projet GlobalClassBooking",
    portfolioModal4Subtitle: "Application lourde entièrement développée en langage Java SE 8 dans le cadre d'un premier projet d'études réalisé de manière individuelle.",
    portfolioModal4Descr: "Ce projet constitue ma toute première expérience pratique individuelle dans le développement applicatif. En effet, il a été réalisé dans le cadre d'un examen demandé par l'école avec la possibilité de choisir librement le thème de l'application. J'ai donc imaginé une plateforme permettant de s'inscrire à des cours de sport collectifs à l'aide d'un compte personnel et des créneaux à choix, dans une liste de clubs de la ville de Genève, stockés localement dans une base de données. L'objectif était de donner la possibilité à l'utilisateur de pouvoir consulter les cours disponibles et donner son avis sur ceux auxquels il a déjà participé, ou voir les avis des autres clients. Ce projet a été entièrement développé en Java SE 8, dépendant du JDK 1.8 et utilisait une base de données Oracle locale.",
    portfolioModal4StartDate: "Date de début : Septembre 2017",
    portfolioModal4EndDate: "Date de fin : Janvier 2018",
    portfolioModal4Source: "Code source : <a target='_blank' href='https://github.com/edouarddiep/GlobalClassBooking'>Projet GlobalClassBooking</a>",
    // LES MODALES DE DIPLOMES ET CERTIFICATS
    diplomesModal1Title: "BACHELOR OF SCIENCE HES-SO",
    diplomesModal1Subtitle1: "EN INFORMATIQUE DE GESTION",
    diplomesModal1Subtitle2: "HEG - Genève | Campus de Battelle, Rue de la Tambourine 17, 1227 Carouge - Genève",
    diplomesModal1Subtitle3: "Consulter les notes",
    diplomesModal1Date: "Date de remise : 11 Septembre 2019",
    diplomesModal2Title: "CISCO CCENT CERTIFICATE OF ACHIEVEMENT",
    diplomesModal2Subtitle: "HEG - Genève | Campus de Battelle, Rue de la Tambourine 17, 1227 Carouge - Genève",
    diplomesModal2Date: "Date de remise : 22 juin 2017",
    diplomesModal3Title: "MATURITÉ PROFESSIONNELLE COMMERCIALE",
    diplomesModal3Subtitle: "Ecole de Commerce Nicolas Bouvier | Rue de Saint-Jean 60, 1203 Genève",
    diplomesModal3Date: "Date de remise : 2 septembre 2014",
    diplomesModal4Title: "CFC D'EMPLOYÉ DE COMMERCE",
    diplomesModal4Subtitle: "Ecole Schulz | Rue du 31 Décembre 8, 1207 Genève",
    diplomesModal4Date: "Date de remise : 25 septembre 2012",
    diplomesModal5Title: "DIPLÔME SUPÉRIEUR DE COMMERCE : MENTION BIEN",
    diplomesModal5Subtitle: "Ecole Schulz | Rue du 31 Décembre 8, 1207 Genève",
    diplomesModal5Date: "Date de remise : 30 juin 2011",
    diplomesModal6Title: "BREVET DE PROMOTION <br/> SOUS-OFFICIER",
    diplomesModal6Subtitle: "Caserne militaire de Bière | Armée Suisse",
    diplomesModal6Date: "Date de promotion : 27 septembre 2014",
    diplomesModal7Title: "HÔTEL CALVY",
    diplomesModal7Subtitle1: "CERTIFICAT DE TRAVAIL",
    diplomesModal7Subtitle2: "Hôtel Calvy | Ruelle du Midi 5, 1207 Genève",
    diplomesModal7Date: "Date de remise : 18 août 2015",
    diplomesModal8Title: "OLEXCO SA",
    diplomesModal8Subtitle1: "CERTIFICAT DE TRAVAIL",
    diplomesModal8Subtitle2: "Olexco SA | Place de l'Université 6, 1205 Genève",
    diplomesModal8Date: "Date de remise : 31 juillet 2012",
    diplomesModal9Title: "CROSSFIT LEVEL 1 CERTIFICATION",
    diplomesModal9Subtitle: "CrossFit GVA | Rue de Lyon 27BIS, 1201 Genève",
    diplomesModal9Date: "Date de remise : 9 août 2015",
    diplomesModal10Title: "BULLETIN DE NOTES | BACHELOR",
    diplomesModal10Subtitle: "HEG - Genève | Campus de Battelle, Rue de la Tambourine 17, 1227 Carouge - Genève",
    diplomesModal10Date: "Date de remise : 17 septembre 2019",
    seeNotesText: "Cliquez pour voir le bulletin de notes",
    copyrightText: "Copyright &copy; E. Diep 2019 ",
    siteLanguage: "Choisir la langue",
  }
};


// define langage via window hash
if (window.location.hash) {
  if (window.location.hash === "#en") {
    // input text for typing animation 
    $("#title-writer").writeText("Welcome to my portfolio");

    $('#mainPicture').attr('title', language.en.knowMoreTitle);
    $('#btn-about').attr('title', language.en.knowMoreTitle);
    $('#dropdownMenu').html('<span id="dropdownFlag" class="flag-icon flag-icon-gb border"></span>  ENG');
    $('#desktopDropdownMenu').html('<span id="dropdownFlag" class="flag-icon flag-icon-gb border"></span>  ENG');
    $('#dropdownMenu').attr('title', language.en.siteLanguage);
    $('#desktopDropDownMenu').attr('title', language.en.siteLanguage);
    $('#locale_fr').html('<span class="flag-icon flag-icon-fr"> </span> French');
    $('#desktopLocale_fr').html('<span class="flag-icon flag-icon-fr"> </span> French');
    $('#desktopLocale_en').css('display', 'none');
    $('#locale_en').css('display', 'none');
    $('#profilLink').html(language.en.profil);
    $('#skillLink').html(language.en.skill);
    $('#langLink').html(language.en.lang);
    $('#formationLink').html(language.en.formation);
    $('#diplomesLink').html(language.en.diplomes);
    $('#btn-about').html(language.en.about);
    $('#profilInfos').html(language.en.profilInfos);
    $('#skillsTitle').html(language.en.skillsTitle);
    $('#skillsSubtitle').html(language.en.skillsSubtitle);
    $('#portfolioSubtitle').html(language.en.clickImagesSubtitle);
    $('#portfolioDescr').html(language.en.portfolioDescr);
    $('#vaudvinDescr').html(language.en.vaudvinDescr);
    $('#fndDescr').html(language.en.fndDescr);
    $('#biblTitle').html(language.en.biblTitle);
    $('#biblDescr').html(language.en.biblDescr);
    $('#gcbDescr').html(language.en.gcbDescr);
    $('#formationTitle').html(language.en.formationTitle);
    $('#formationSubtitle').html(language.en.clickImagesSubtitle);
    $('#textFormation1').html(language.en.textFormation1);
    $('#textFormation2').html(language.en.textFormation2);
    $('#datesFormation2').html(language.en.datesFormation2);
    $('#textFormation3').html(language.en.textFormation3);
    $('#datesFormation3').html(language.en.datesFormation3);
    $('#lieuFormation3').html(language.en.lieuFormation3);
    $('#profilQualifier').html(language.en.profilQualifier);
    $('#textFormation4').html(language.en.textFormation4);
    $('#lieuFormation4').html(language.en.lieuFormation4);
    $('#textFormation5').html(language.en.textFormation5);
    $('#textFormation6').html(language.en.textFormation6);
    $('#languageTitle').html(language.en.languageTitle);
    $('#languageSubtitle').html(language.en.languageSubtitle);
    $('#textFlag1').html(language.en.textFlag1);
    $('#textLevel1').html(language.en.textLevel1);
    $('#textFlag2').html(language.en.textFlag2);
    $('#textLevel2').html(language.en.textLevel2);
    $('#textFlag3').html(language.en.textFlag3);
    $('#textLevel3').html(language.en.textLevel3);
    $('#textFlag4').html(language.en.textFlag4);
    $('#textLevel4').html(language.en.textLevel4);
    $('#textFlag5').html(language.en.textFlag5);
    $('#textLevel5').html(language.en.textLevel5);
    $('#aboutDescription').html(language.en.aboutDescription);
    $('#diplomesTitle').html(language.en.diplomesTitle);
    $('#diplomesSubtitle').html(language.en.clickImagesSubtitle);
    $('#diplome1Title').html(language.en.diplome1Title);
    $('#diplome1Subtitle').html(language.en.hegTitle);
    $('#diplome2Subtitle').html(language.en.hegTitle);
    $('#diplome3Title').html(language.en.diplome3Title);
    $('#diplome3Subtitle').html(language.en.diplome3Subtitle);
    $('#diplome4Title').html(language.en.diplome4Title);
    $('#diplome4Subtitle').html(language.en.schulzTitle);
    $('#diplome5Title').html(language.en.diplome5Title);
    $('#diplome5Subtitle').html(language.en.schulzTitle);
    $('#diplome6Title').html(language.en.diplome6Title);
    $('#diplome6Subtitle').html(language.en.diplome6Subtitle);
    $('#diplome7Title').html(language.en.workCertificateTitle);
    $('#diplome7Subtitle').html(language.en.diplome7Subtitle);
    $('#diplome8Title').html(language.en.workCertificateTitle);
    $('#diplome8Subtitle').html(language.en.diplome8Subtitle);
    $('#contactTitle').html(language.en.contactTitle);
    $('#contactSubtitle').html(language.en.contactSubtitle);
    $('#name').attr('placeholder', language.en.namePlaceholder);
    $('#name').attr('data-validation-required-message', language.en.nameRequired);
    $('#email').attr('placeholder', language.en.emailPlaceholder);
    $('#email').attr('data-validation-required-message', language.en.emailRequired);
    $('#phone').attr('placeholder', language.en.phonePlaceholder);
    $('#phone').attr('data-validation-required-message', language.en.phoneRequired);
    $('#message').attr('placeholder', language.en.msgPlaceholder);
    $('#message').attr('data-validation-required-message', language.en.msgRequired);
    $('#sendMessageButton').html(language.en.sendMessageButton);
    $('#emailLink1').attr('title', language.en.emailText);
    $('#linkedinLink1').attr('title', language.en.linkedinText);
    $('#githubLink1').attr('title', language.en.githubText);
    $('#emailLink2').attr('title', language.en.emailText);
    $('#linkedinLink2').attr('title', language.en.linkedinText);
    $('#githubLink2').attr('title', language.en.githubText);
    $('#portfolioLink0').attr('title', language.en.seeProjectTitle);
    $('#portfolioLink1').attr('title', language.en.seeProjectTitle);
    $('#portfolioLink2').attr('title', language.en.seeProjectTitle);
    $('#portfolioLink3').attr('title', language.en.seeProjectTitle);
    $('#formationLink1').attr('title', language.en.moreDetailsTitle);
    $('#formationLink2').attr('title', language.en.moreDetailsTitle);
    $('#formationLink3').attr('title', language.en.moreDetailsTitle);
    $('#formationLink4').attr('title', language.en.moreDetailsTitle);
    $('#formationLink5').attr('title', language.en.moreDetailsTitle);
    $('#formationLink6').attr('title', language.en.moreDetailsTitle);
    $('#lieuFormation1').html(language.en.lieuFormation1);
    $('#lieuFormation2').html(language.en.lieuFormation2);
    $('#lieuFormation6').html(language.en.lieuFormation6);
    $('#language1').attr('title', language.en.textFlag1);
    $('#language2').attr('title', language.en.textFlag2);
    $('#language3').attr('title', language.en.textFlag3);
    $('#language4').attr('title', language.en.textFlag4);
    $('#language5').attr('title', language.en.textFlag5);
    $('#diplomeLink1').attr('title', language.en.diplomeText1);
    $('#diplomeLink2').attr('title', language.en.diplomeText2);
    $('#diplomeLink3').attr('title', language.en.diplomeText1);
    $('#diplomeLink4').attr('title', language.en.diplomeText1);
    $('#diplomeLink5').attr('title', language.en.diplomeText1);
    $('#diplomeLink6').attr('title', language.en.diplomeText2);
    $('#diplomeLink7').attr('title', language.en.diplomeText2);
    $('#diplomeLink8').attr('title', language.en.diplomeText2);
    $('#diplomeLink9').attr('title', language.en.diplomeText2);
    $('#formationModal1Title').html(language.en.formationModal1Title);
    $('#formationModal1Subtitle1').html(language.en.formationModal1Subtitle1);
    $('#formationModal1Subtitle2').html(language.en.formationModal1Subtitle2);
    $('#formationModal1Descr').html(language.en.formationModal1Descr);
    $('#formationModal1Date').html(language.en.formationModal1Date);
    $('#formationModal1Close').html(language.en.closeText);
    $('#formationModal2Title').html(language.en.formationModal2Title);
    $('#formationModal2Subtitle1').html(language.en.formationModal2Subtitle1);
    $('#formationModal2Subtitle2').html(language.en.formationModal2Subtitle2);
    $('#formationModal2Subtitle3').html(language.en.formationModal2Subtitle3);
    $('#formationModal2Descr').html(language.en.formationModal2Descr);
    $('#formationModal2Date').html(language.en.formationModal2Date);
    $('#formationModal2Close').html(language.en.closeText);
    $('#formationModal3Title').html(language.en.formationModal3Title);
    $('#formationModal3Subtitle1').html(language.en.formationModal3Subtitle1);
    $('#formationModal3Descr').html(language.en.formationModal3Descr);
    $('#formationModal3Date').html(language.en.formationModal3Date);
    $('#formationModal3Close').html(language.en.closeText);
    $('#formationModal4Title').html(language.en.formationModal4Title);
    $('#formationModal4Subtitle1').html(language.en.formationModal4Subtitle1);
    $('#formationModal4Subtitle2').html(language.en.formationModal4Subtitle2);
    $('#formationModal4Descr').html(language.en.formationModal4Descr);
    $('#formationModal4Date').html(language.en.formationModal4Date);
    $('#formationModal4Close').html(language.en.closeText);
    $('#formationModal5Title').html(language.en.formationModal5Title);
    $('#formationModal5Subtitle1').html(language.en.formationModal5Subtitle1);
    $('#formationModal5Subtitle2').html(language.en.formationModal5Subtitle2);
    $('#formationModal5Descr').html(language.en.formationModal5Descr);
    $('#formationModal5Date').html(language.en.formationModal5Date);
    $('#formationModal5Close').html(language.en.closeText);
    $('#formationModal6Title').html(language.en.formationModal6Title);
    $('#formationModal6Subtitle1').html(language.en.formationModal6Subtitle1);
    $('#formationModal6Subtitle2').html(language.en.formationModal6Subtitle2);
    $('#formationModal6Descr').html(language.en.formationModal6Descr);
    $('#formationModal6Date').html(language.en.formationModal6Date);
    $('#formationModal6Close').html(language.en.closeText);
    $('#portfolioModal0Title').html(language.en.portfolioModal0Title);
    $('#portfolioModal0Subtitle').html(language.en.portfolioModal0Subtitle);
    $('#portfolioModal0Descr').html(language.en.portfolioModal0Descr);
    $('#portfolioModal0StartDate').html(language.en.portfolioModal0StartDate);
    $('#portfolioModal0Source').html(language.en.portfolioModal0Source);
    $('#portfolioModal0Close').html(language.en.closeText);
    $('#portfolioModal1Title').html(language.en.portfolioModal1Title);
    $('#portfolioModal1Subtitle').html(language.en.portfolioModal1Subtitle);
    $('#portfolioModal1Descr').html(language.en.portfolioModal1Descr);
    $('#portfolioModal1StartDate').html(language.en.portfolioModal1StartDate);
    $('#portfolioModal1EndDate').html(language.en.portfolioModal1EndDate);
    $('#portfolioModal1Source').html(language.en.portfolioModal1Source);
    $('#portfolioModal1Close').html(language.en.closeText);
    $('#portfolioModal2Title').html(language.en.portfolioModal2Title);
    $('#portfolioModal2Subtitle').html(language.en.portfolioModal2Subtitle);
    $('#portfolioModal2Descr').html(language.en.portfolioModal2Descr);
    $('#portfolioModal2StartDate').html(language.en.portfolioModal2StartDate);
    $('#portfolioModal2EndDate').html(language.en.portfolioModal2EndDate);
    $('#portfolioModal2Source').html(language.en.portfolioModal2Source);
    $('#portfolioModal2Close').html(language.en.closeText);
    $('#portfolioModal3Title').html(language.en.portfolioModal3Title);
    $('#portfolioModal3Subtitle').html(language.en.portfolioModal3Subtitle);
    $('#portfolioModal3Descr').html(language.en.portfolioModal3Descr);
    $('#portfolioModal3StartDate').html(language.en.portfolioModal3StartDate);
    $('#portfolioModal3EndDate').html(language.en.portfolioModal3EndDate);
    $('#portfolioModal3Source').html(language.en.portfolioModal3Source);
    $('#portfolioModal3Close').html(language.en.closeText);
    $('#portfolioModal4Title').html(language.en.portfolioModal4Title);
    $('#portfolioModal4Subtitle').html(language.en.portfolioModal4Subtitle);
    $('#portfolioModal4Descr').html(language.en.portfolioModal4Descr);
    $('#portfolioModal4StartDate').html(language.en.portfolioModal4StartDate);
    $('#portfolioModal4EndDate').html(language.en.portfolioModal4EndDate);
    $('#portfolioModal4Source').html(language.en.portfolioModal4Source);
    $('#portfolioModal4Close').html(language.en.closeText);
    $('#diplomesModal1Title').html(language.en.diplomesModal1Title);
    $('#diplomesModal1Subtitle1').html(language.en.diplomesModal1Subtitle1);
    $('#diplomesModal1Subtitle2').html(language.en.diplomesModal1Subtitle2);
    $('#bulletinsLink').html(language.en.diplomesModal1Subtitle3);
    $('#bulletinsLink').attr('title', language.en.seeNotesText);
    $('#diplomesModal1Date').html(language.en.diplomesModal1Date);
    $('#diplomesModal1Close').html(language.en.closeText);
    $('#diplomesModal2Title').html(language.en.diplomesModal2Title);
    $('#diplomesModal2Subtitle').html(language.en.diplomesModal2Subtitle);
    $('#diplomesModal2Date').html(language.en.diplomesModal2Date);
    $('#diplomesModal2Close').html(language.en.closeText);
    $('#diplomesModal3Title').html(language.en.diplomesModal3Title);
    $('#diplomesModal3Subtitle').html(language.en.diplomesModal3Subtitle);
    $('#diplomesModal3Date').html(language.en.diplomesModal3Date);
    $('#diplomesModal3Close').html(language.en.closeText);
    $('#diplomesModal4Title').html(language.en.diplomesModal4Title);
    $('#diplomesModal4Subtitle').html(language.en.diplomesModal4Subtitle);
    $('#diplomesModal4Date').html(language.en.diplomesModal4Date);
    $('#diplomesModal4Close').html(language.en.closeText);
    $('#diplomesModal5Title').html(language.en.diplomesModal5Title);
    $('#diplomesModal5Subtitle').html(language.en.diplomesModal5Subtitle);
    $('#diplomesModal5Date').html(language.en.diplomesModal5Date);
    $('#diplomesModal5Close').html(language.en.closeText);
    $('#diplomesModal6Title').html(language.en.diplomesModal6Title);
    $('#diplomesModal6Subtitle').html(language.en.diplomesModal6Subtitle);
    $('#diplomesModal6Date').html(language.en.diplomesModal6Date);
    $('#diplomesModal6Close').html(language.en.closeText);
    $('#diplomesModal7Title').html(language.en.diplomesModal7Title);
    $('#diplomesModal7Subtitle1').html(language.en.diplomesModal7Subtitle1);
    $('#diplomesModal7Subtitle2').html(language.en.diplomesModal7Subtitle2);
    $('#diplomesModal7Date').html(language.en.diplomesModal7Date);
    $('#diplomesModal7Close').html(language.en.closeText);
    $('#diplomesModal8Title').html(language.en.diplomesModal8Title);
    $('#diplomesModal8Subtitle1').html(language.en.diplomesModal8Subtitle1);
    $('#diplomesModal8Subtitle2').html(language.en.diplomesModal8Subtitle2);
    $('#diplomesModal8Date').html(language.en.diplomesModal8Date);
    $('#diplomesModal8Close').html(language.en.closeText);
    $('#diplomesModal9Title').html(language.en.diplomesModal9Title);
    $('#diplomesModal9Subtitle').html(language.en.diplomesModal9Subtitle);
    $('#diplomesModal9Date').html(language.en.diplomesModal9Date);
    $('#diplomesModal9Close').html(language.en.closeText);
    $('#diplomesModal10Title').html(language.en.diplomesModal10Title);
    $('#diplomesModal10Subtitle').html(language.en.diplomesModal10Subtitle);
    $('#diplomesModal10Date').html(language.en.diplomesModal10Date);
    $('#diplomesModal10Close').html(language.en.closeText);
    $('#copyrightText').html(language.en.copyrightText);
  }
  if (window.location.hash === "#fr") {
    // input text for typing animation 
    $("#title-writer").writeText("Bienvenue sur mon portfolio");

    $('#mainPicture').attr('title', language.fr.knowMoreTitle);
    $('#btn-about').attr('title', language.fr.knowMoreTitle);
    $('#dropdownMenu').html('<span id="dropdownFlag" class="flag-icon flag-icon-fr border"></span>  FR');
    $('#desktopDropdownMenu').html('<span id="dropdownFlag" class="flag-icon flag-icon-fr border"></span>  FR');
    $('#dropdownMenu').attr('title', language.fr.siteLanguage);
    $('#desktopDropdownMenu').attr('title', language.fr.siteLanguage);
    $('#locale_en').html('<span class="flag-icon flag-icon-gb"> </span> Anglais');
    $('#desktopLocale_en').html('<span class="flag-icon flag-icon-gb"> </span> Anglais');
    $('#locale_fr').css('display', 'none');
    $('#desktopLocale_fr').css('display', 'none');
    $('#profilLink').html(language.fr.profil);
    $('#skillLink').html(language.fr.skill);
    $('#langLink').html(language.fr.lang);
    $('#formationLink').html(language.fr.formation);
    $('#diplomesLink').html(language.fr.diplomes);
    $('#btn-about').html(language.fr.about);
    $('#profilInfos').html(language.fr.profilInfos);
    $('#skillsTitle').html(language.fr.skillsTitle);
    $('#skillsSubtitle').html(language.fr.skillsSubtitle);
    $('#portfolioSubtitle').html(language.fr.clickImagesSubtitle);
    $('#portfolioDescr').html(language.fr.portfolioDescr);
    $('#vaudvinDescr').html(language.fr.vaudvinDescr);
    $('#fndDescr').html(language.fr.fndDescr);
    $('#biblTitle').html(language.fr.biblTitle);
    $('#biblDescr').html(language.fr.biblDescr);
    $('#gcbDescr').html(language.fr.gcbDescr);
    $('#formationTitle').html(language.fr.formationTitle);
    $('#formationSubtitle').html(language.fr.clickImagesSubtitle);
    $('#textFormation1').html(language.fr.textFormation1);
    $('#textFormation2').html(language.fr.textFormation2);
    $('#datesFormation2').html(language.fr.datesFormation2);
    $('#textFormation3').html(language.fr.textFormation3);
    $('#datesFormation3').html(language.fr.datesFormation3);
    $('#textFormation6').html(language.fr.textFormation6);
    $('#datesFormation2').html(language.fr.datesFormation2);
    $('#lieuFormation3').html(language.fr.lieuFormation3);
    $('#profilQualifier').html(language.fr.profilQualifier);
    $('#textFormation4').html(language.fr.textFormation4);
    $('#lieuFormation4').html(language.fr.lieuFormation4);
    $('#textFormation5').html(language.fr.textFormation5);
    $('#textFormation6').html(language.fr.textFormation6);
    $('#languageTitle').html(language.fr.languageTitle);
    $('#languageSubtitle').html(language.fr.languageSubtitle);
    $('#textFlag1').html(language.fr.textFlag1);
    $('#textLevel1').html(language.fr.textLevel1);
    $('#textFlag2').html(language.fr.textFlag2);
    $('#textLevel2').html(language.fr.textLevel2);
    $('#textFlag3').html(language.fr.textFlag3);
    $('#textLevel3').html(language.fr.textLevel3);
    $('#textFlag4').html(language.fr.textFlag4);
    $('#textLevel4').html(language.fr.textLevel4);
    $('#textFlag5').html(language.fr.textFlag5);
    $('#textLevel5').html(language.fr.textLevel5);
    $('#aboutDescription').html(language.fr.aboutDescription);
    $('#diplomesTitle').html(language.fr.diplomesTitle);
    $('#diplomesSubtitle').html(language.fr.clickImagesSubtitle);
    $('#diplome1Title').html(language.fr.diplome1Title);
    $('#diplome1Subtitle').html(language.fr.hegTitle);
    $('#diplome2Subtitle').html(language.fr.hegTitle);
    $('#diplome3Title').html(language.fr.diplome3Title);
    $('#diplome3Subtitle').html(language.fr.diplome3Subtitle);
    $('#diplome4Title').html(language.fr.diplome4Title);
    $('#diplome4Subtitle').html(language.fr.schulzTitle);
    $('#diplome5Title').html(language.fr.diplome5Title);
    $('#diplome5Subtitle').html(language.fr.schulzTitle);
    $('#diplome6Title').html(language.fr.diplome6Title);
    $('#diplome6Subtitle').html(language.fr.diplome6Subtitle);
    $('#diplome7Title').html(language.fr.workCertificateTitle);
    $('#diplome7Subtitle').html(language.fr.diplome7Subtitle);
    $('#diplome8Title').html(language.fr.workCertificateTitle);
    $('#diplome8Subtitle').html(language.fr.diplome8Subtitle);
    $('#contactTitle').html(language.fr.contactTitle);
    $('#contactSubtitle').html(language.fr.contactSubtitle);
    $('#name').attr('placeholder', language.fr.namePlaceholder);
    $('#name').attr('data-validation-required-message', language.fr.nameRequired);
    $('#email').attr('placeholder', language.fr.emailPlaceholder);
    $('#email').attr('data-validation-required-message', language.fr.emailRequired);
    $('#phone').attr('placeholder', language.fr.phonePlaceholder);
    $('#phone').attr('data-validation-required-message', language.fr.phoneRequired);
    $('#message').attr('placeholder', language.fr.msgPlaceholder);
    $('#message').attr('data-validation-required-message', language.fr.msgRequired);
    $('#sendMessageButton').html(language.fr.sendMessageButton);
    $('#emailLink1').attr('title', language.fr.emailText);
    $('#linkedinLink1').attr('title', language.fr.linkedinText);
    $('#githubLink1').attr('title', language.fr.githubText);
    $('#emailLink2').attr('title', language.fr.emailText);
    $('#linkedinLink2').attr('title', language.fr.linkedinText);
    $('#githubLink2').attr('title', language.fr.githubText);
    $('#portfolioLink0').attr('title', language.fr.seeProjectTitle);
    $('#portfolioLink1').attr('title', language.fr.seeProjectTitle);
    $('#portfolioLink2').attr('title', language.fr.seeProjectTitle);
    $('#portfolioLink3').attr('title', language.fr.seeProjectTitle);
    $('#formationLink1').attr('title', language.fr.moreDetailsTitle);
    $('#formationLink2').attr('title', language.fr.moreDetailsTitle);
    $('#formationLink3').attr('title', language.fr.moreDetailsTitle);
    $('#formationLink4').attr('title', language.fr.moreDetailsTitle);
    $('#formationLink5').attr('title', language.fr.moreDetailsTitle);
    $('#formationLink6').attr('title', language.fr.moreDetailsTitle);
    $('#lieuFormation1').html(language.fr.lieuFormation1);
    $('#lieuFormation2').html(language.fr.lieuFormation2);
    $('#lieuFormation6').html(language.fr.lieuFormation6);
    $('#language1').attr('title', language.fr.textFlag1);
    $('#language2').attr('title', language.fr.textFlag2);
    $('#language3').attr('title', language.fr.textFlag3);
    $('#language4').attr('title', language.fr.textFlag4);
    $('#language5').attr('title', language.fr.textFlag5);
    $('#diplomeLink1').attr('title', language.fr.diplomeText1);
    $('#diplomeLink2').attr('title', language.fr.diplomeText2);
    $('#diplomeLink3').attr('title', language.fr.diplomeText1);
    $('#diplomeLink4').attr('title', language.fr.diplomeText1);
    $('#diplomeLink5').attr('title', language.fr.diplomeText1);
    $('#diplomeLink6').attr('title', language.fr.diplomeText3);
    $('#diplomeLink7').attr('title', language.fr.diplomeText2);
    $('#diplomeLink8').attr('title', language.fr.diplomeText2);
    $('#diplomeLink9').attr('title', language.fr.diplomeText2);
    $('#formationModal1Title').html(language.fr.formationModal1Title);
    $('#formationModal1Subtitle1').html(language.fr.formationModal1Subtitle1);
    $('#formationModal1Subtitle2').html(language.fr.formationModal1Subtitle2);
    $('#formationModal1Descr').html(language.fr.formationModal1Descr);
    $('#formationModal1Date').html(language.fr.formationModal1Date);
    $('#formationModal1Close').html(language.fr.closeText);
    $('#formationModal2Title').html(language.fr.formationModal2Title);
    $('#formationModal2Subtitle1').html(language.fr.formationModal2Subtitle1);
    $('#formationModal2Subtitle2').html(language.fr.formationModal2Subtitle2);
    $('#formationModal2Subtitle3').html(language.fr.formationModal2Subtitle3);
    $('#formationModal2Descr').html(language.fr.formationModal2Descr);
    $('#formationModal2Date').html(language.fr.formationModal2Date);
    $('#formationModal2Close').html(language.fr.closeText);
    $('#formationModal3Title').html(language.fr.formationModal3Title);
    $('#formationModal3Subtitle1').html(language.fr.formationModal3Subtitle1);
    $('#formationModal3Descr').html(language.fr.formationModal3Descr);
    $('#formationModal3Date').html(language.fr.formationModal3Date);
    $('#formationModal3Close').html(language.fr.closeText);
    $('#formationModal4Title').html(language.fr.formationModal4Title);
    $('#formationModal4Subtitle1').html(language.fr.formationModal4Subtitle1);
    $('#formationModal4Subtitle2').html(language.fr.formationModal4Subtitle2);
    $('#formationModal4Descr').html(language.fr.formationModal4Descr);
    $('#formationModal4Date').html(language.fr.formationModal4Date);
    $('#formationModal4Close').html(language.fr.closeText);
    $('#formationModal5Title').html(language.fr.formationModal5Title);
    $('#formationModal5Subtitle1').html(language.fr.formationModal5Subtitle1);
    $('#formationModal5Subtitle2').html(language.fr.formationModal5Subtitle2);
    $('#formationModal5Descr').html(language.fr.formationModal5Descr);
    $('#formationModal5Date').html(language.fr.formationModal5Date);
    $('#formationModal5Close').html(language.fr.closeText);
    $('#formationModal6Title').html(language.fr.formationModal6Title);
    $('#formationModal6Subtitle1').html(language.fr.formationModal6Subtitle1);
    $('#formationModal6Subtitle2').html(language.fr.formationModal6Subtitle2);
    $('#formationModal6Descr').html(language.fr.formationModal6Descr);
    $('#formationModal6Date').html(language.fr.formationModal6Date);
    $('#formationModal6Close').html(language.fr.closeText);
    $('#portfolioModal0Title').html(language.fr.portfolioModal0Title);
    $('#portfolioModal0Subtitle').html(language.fr.portfolioModal0Subtitle);
    $('#portfolioModal0Descr').html(language.fr.portfolioModal0Descr);
    $('#portfolioModal0StartDate').html(language.fr.portfolioModal0StartDate);
    $('#portfolioModal0Source').html(language.fr.portfolioModal0Source);
    $('#portfolioModal0Close').html(language.fr.closeText);
    $('#portfolioModal1Title').html(language.fr.portfolioModal1Title);
    $('#portfolioModal1Subtitle').html(language.fr.portfolioModal1Subtitle);
    $('#portfolioModal1Descr').html(language.fr.portfolioModal1Descr);
    $('#portfolioModal1StartDate').html(language.fr.portfolioModal1StartDate);
    $('#portfolioModal1EndDate').html(language.fr.portfolioModal1EndDate);
    $('#portfolioModal1Source').html(language.fr.portfolioModal1Source);
    $('#portfolioModal1Close').html(language.fr.closeText);
    $('#portfolioModal2Title').html(language.fr.portfolioModal2Title);
    $('#portfolioModal2Subtitle').html(language.fr.portfolioModal2Subtitle);
    $('#portfolioModal2Descr').html(language.fr.portfolioModal2Descr);
    $('#portfolioModal2StartDate').html(language.fr.portfolioModal2StartDate);
    $('#portfolioModal2EndDate').html(language.fr.portfolioModal2EndDate);
    $('#portfolioModal2Source').html(language.fr.portfolioModal2Source);
    $('#portfolioModal2Close').html(language.fr.closeText);
    $('#portfolioModal3Title').html(language.fr.portfolioModal3Title);
    $('#portfolioModal3Subtitle').html(language.fr.portfolioModal3Subtitle);
    $('#portfolioModal3Descr').html(language.fr.portfolioModal3Descr);
    $('#portfolioModal3StartDate').html(language.fr.portfolioModal3StartDate);
    $('#portfolioModal3EndDate').html(language.fr.portfolioModal3EndDate);
    $('#portfolioModal3Source').html(language.fr.portfolioModal3Source);
    $('#portfolioModal3Close').html(language.fr.closeText);
    $('#portfolioModal4Title').html(language.fr.portfolioModal4Title);
    $('#portfolioModal4Subtitle').html(language.fr.portfolioModal4Subtitle);
    $('#portfolioModal4Descr').html(language.fr.portfolioModal4Descr);
    $('#portfolioModal4StartDate').html(language.fr.portfolioModal4StartDate);
    $('#portfolioModal4EndDate').html(language.fr.portfolioModal4EndDate);
    $('#portfolioModal4Source').html(language.fr.portfolioModal4Source);
    $('#portfolioModal4Close').html(language.fr.closeText);
    $('#diplomesModal1Title').html(language.fr.diplomesModal1Title);
    $('#diplomesModal1Subtitle1').html(language.fr.diplomesModal1Subtitle1);
    $('#diplomesModal1Subtitle2').html(language.fr.diplomesModal1Subtitle2);
    $('#bulletinsLink').html(language.fr.diplomesModal1Subtitle3);
    $('#bulletinsLink').attr('title', language.fr.seeNotesText);
    $('#diplomesModal1Date').html(language.fr.diplomesModal1Date);
    $('#diplomesModal1Close').html(language.fr.closeText);
    $('#diplomesModal2Title').html(language.fr.diplomesModal2Title);
    $('#diplomesModal2Subtitle').html(language.fr.diplomesModal2Subtitle);
    $('#diplomesModal2Date').html(language.fr.diplomesModal2Date);
    $('#diplomesModal2Close').html(language.fr.closeText);
    $('#diplomesModal3Title').html(language.fr.diplomesModal3Title);
    $('#diplomesModal3Subtitle').html(language.fr.diplomesModal3Subtitle);
    $('#diplomesModal3Date').html(language.fr.diplomesModal3Date);
    $('#diplomesModal3Close').html(language.fr.closeText);
    $('#diplomesModal4Title').html(language.fr.diplomesModal4Title);
    $('#diplomesModal4Subtitle').html(language.fr.diplomesModal4Subtitle);
    $('#diplomesModal4Date').html(language.fr.diplomesModal4Date);
    $('#diplomesModal4Close').html(language.fr.closeText);
    $('#diplomesModal5Title').html(language.fr.diplomesModal5Title);
    $('#diplomesModal5Subtitle').html(language.fr.diplomesModal5Subtitle);
    $('#diplomesModal5Date').html(language.fr.diplomesModal5Date);
    $('#diplomesModal5Close').html(language.fr.closeText);
    $('#diplomesModal6Title').html(language.fr.diplomesModal6Title);
    $('#diplomesModal6Subtitle').html(language.fr.diplomesModal6Subtitle);
    $('#diplomesModal6Date').html(language.fr.diplomesModal6Date);
    $('#diplomesModal6Close').html(language.fr.closeText);
    $('#diplomesModal7Title').html(language.fr.diplomesModal7Title);
    $('#diplomesModal7Subtitle1').html(language.fr.diplomesModal7Subtitle1);
    $('#diplomesModal7Subtitle2').html(language.fr.diplomesModal7Subtitle2);
    $('#diplomesModal7Date').html(language.fr.diplomesModal7Date);
    $('#diplomesModal7Close').html(language.fr.closeText);
    $('#diplomesModal8Title').html(language.fr.diplomesModal8Title);
    $('#diplomesModal8Subtitle1').html(language.fr.diplomesModal8Subtitle1);
    $('#diplomesModal8Subtitle2').html(language.fr.diplomesModal8Subtitle2);
    $('#diplomesModal8Date').html(language.fr.diplomesModal8Date);
    $('#diplomesModal8Close').html(language.fr.closeText);
    $('#diplomesModal9Title').html(language.fr.diplomesModal9Title);
    $('#diplomesModal9Subtitle').html(language.fr.diplomesModal9Subtitle);
    $('#diplomesModal9Date').html(language.fr.diplomesModal9Date);
    $('#diplomesModal9Close').html(language.fr.closeText);
    $('#diplomesModal10Title').html(language.fr.diplomesModal10Title);
    $('#diplomesModal10Subtitle').html(language.fr.diplomesModal10Subtitle);
    $('#diplomesModal10Date').html(language.fr.diplomesModal10Date);
    $('#diplomesModal10Close').html(language.fr.closeText);
    $('#copyrightText').html(language.fr.copyrightText);
  }
}