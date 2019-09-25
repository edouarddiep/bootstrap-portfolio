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

  window.location.hash = "#fr";

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

// Scrolling event
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

    this.aboutQualifier.delay(1300).animate({
      'opacity': '1',
      'bottom': '0'
    }, 1200);

    this.aboutInfos.delay(1400).animate({
      'opacity': '1',
      'bottom': '0'
    }, 1200);

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

// Languages translations 
var language = {
  en: {
    skill: "Skills",
    profil: "Profile",
    lang: "Languages",
    formation: "Education",
    diplomes: "Licences",
    about: "About me",
    profilQualifier: "Full Stack Developer",
    profilInfos: "born April 28th 1994 / Swiss citizenship / Single",
    skillsTitle: "Skills",
    skillsSubtitle: "Units below are originally based on a scale from 1% (bad knowledge) to 100% (mastery)",
    clickImagesSubtitle: "Click on the illustrations below for more details",
    vaudvinDescr: "Mobile hybrid application programmed with Ionic 4 (Front End) and Laravel PHP 5 (Back End) Frameworks technologies",
    fndDescr: "Responsive Web Application coded using Angular 7 (Front End) and DjangoREST (Back End) Frameworks technologies",
    gcbDescr: "Thick Client Application fully developped using Java SE 8 programming language. Datas are stored on an Oracle database",
    formationTitle: "Education",
    textFormation1: "Business computing",
    textFormation2: "Reception and room service internship",
    datesFormation2: "Jan. - Jul. 2015",
    datesFormation3: "June - Nov. 2015",
    textFormation3: "Ranked military service",
    lieuFormation3: "Bière's military barracks",
    textFormation4: "Business Professional Matriculation",
    lieuFormation4: "Nicolas-Bouvier Business School",
    textFormation5: "Final year internship (CFC)",
    textFormation6: "Commercial Employee's CFC - Expanded profile",
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
    aboutDescription: "Recently graduated from a Bachelor of Science HES-SO in Business computing, through my acquired knowledge as an information architect into software development, I am looking for a job that would give me the opportunity to expand my acquired skills during my four years of Bachelor's education. <br/> By nature I am dynamic, patient, persevering, optimistic, passionate about new technologies, autonomous and having a significant team spirit, I am ready to integrate a team in an evolving domain such as Front-End, Back-End or Full-Stack development.",
    diplomesTitle: "Diplomas and certificates",
    diplome1Title: "Business computing",
    diplome3Title: "Professional Matriculation",
    diplome3Subtitle: "Business school Nicolas-Bouvier",
    diplome4Title: "Commercial employee's CFC - Expanded Profile",
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
    namePlaceholder: "Your name*",
    nameRequired: "Please enter your name.",
    emailPlaceholder: "Your e-mail address*",
    emailRequired: "Please enter an e-mail address.",
    phonePlaceholder: "Your phone number*",
    phoneRequired: "Please enter a phone number.",
    msgPlaceholder: "Your message*",
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
    XXXXXX: "Languages",
    XXXXXX: "Languages",
    XXXXXX: "Languages",
    XXXXXX: "Languages",
    XXXXXX: "Languages",


  },
  fr: {
    skill: "Compétences",
    profil: "Profil",
    lang: "Langues",
    formation: "Formation",
    diplomes: "Diplômes",
    about: "À propos de moi",
    profilQualifier: "Développeur Full-Stack",
    profilInfos: "né le 28 avril 1994 / Suisse / Célibataire",
    skillsTitle: "Compétences",
    skillsSubtitle: "Les unités ci-dessous sont basées sur une échelle de 1% (médiocre) à 100% (maîtrise)",
    clickImagesSubtitle: "Cliquez sur les illustrations pour plus de détails",
    vaudvinDescr: "Application mobile hybride développée avec les Frameworks Ionic 4 (Front End) et Laravel PHP 5 (Back End)",
    fndDescr: "Responsive WebApp développée à l'aide des Frameworks Angular 7 (Front End) et DjangoREST (Back End)",
    gcbDescr: "Application lourde entièrement développée en langage Java SE 8 et utilisant une base de données Oracle",
    formationTitle: "Formation",
    textFormation1: "Informatique de gestion",
    textFormation2: "Stage à la réception et service en salle",
    datesFormation2: "Janv. - Juil. 2015",
    datesFormation3: "Juin - Nov. 2015",
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
    aboutDescription: "Récemment diplômé d'un Bachelor HES en Informatique de gestion et véritable architecte de l'information, grâce à mes connaissances acquises en tant qu'informaticien de gestion, je suis à la recherche d'un emploi qui me permettrait de développer mes compétences assimilées durant mes quatre ans de formation. <br/> De nature dynamique, patient, persévérant, optimiste, altruiste, passionné par les nouvelles technologies, autonome et avec un bon esprit de corps, je suis prêt à intégrer une équipe dans un domaine évolutif comme le développement applicatif Front-End, Back-End ou Full-Stack.",
    diplomesTitle: "Diplômes et certificats",
    diplome1Title: "Informatique de gestion",
    diplome3Title: "Maturité professionnelle",
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
    namePlaceholder: "Votre nom*",
    nameRequired: "Veuillez saisir votre nom.",
    emailPlaceholder: "Votre adresse e-mail*",
    emailRequired: "Veuillez saisir une adresse e-mail.",
    phonePlaceholder: "Votre téléphone*",
    phoneRequired: "Veuillez saisir un numéro de téléphone.",
    msgPlaceholder: "Votre message*",
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
    XXXXXX: "Langues",
    XXXXXX: "Langues",
    XXXXXX: "Langues",
    XXXXXX: "Langues",
    XXXXXX: "Langues",
    XXXXXX: "Langues",
    XXXXXX: "Langues",
    XXXXXX: "Langues",
    XXXXXX: "Langues",
  }
};


// define langage via window hash
if (window.location.hash) {
  console.log(window.location.hash);
  if (window.location.hash === "#en") {
    // input text for typing animation 
    $("#title-writer").writeText("Welcome to my portfolio");

    console.log($('#name').attr('placeholder'));

    $('#mainPicture').attr('title', language.en.knowMoreTitle);
    $('#btn-about').attr('title', language.en.knowMoreTitle);
    $('#dropdownMenu').html('<span id="dropdownFlag" class="flag-icon flag-icon-gb"></span>  ENG');
    $('#locale_fr').html('<span class="flag-icon flag-icon-fr"> </span> French');
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
    $('#vaudvinDescr').html(language.en.vaudvinDescr);
    $('#fndDescr').html(language.en.fndDescr);
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
    $('#XXXXXX').html(language.en.XXXXXX);
    $('#XXXXXX').html(language.en.XXXXXX);
    $('#XXXXXX').html(language.en.XXXXXX);
    $('#XXXXXX').html(language.en.XXXXXX);
    $('#XXXXXX').html(language.en.XXXXXX);
    $('#XXXXXX').html(language.en.XXXXXX);
    $('#XXXXXX').html(language.en.XXXXXX);
  }
  if (window.location.hash === "#fr") {
    // input text for typing animation 
    $("#title-writer").writeText("Bienvenue sur mon portfolio");

    $('#mainPicture').attr('title', language.fr.knowMoreTitle);
    $('#btn-about').attr('title', language.fr.knowMoreTitle);
    $('#dropdownMenu').html('<span id="dropdownFlag" class="flag-icon flag-icon-fr"></span>  FR');
    $('#locale_en').html('<span class="flag-icon flag-icon-gb"> </span> Anglais');
    $('#locale_fr').css('display', 'none');
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
    $('#vaudvinDescr').html(language.fr.vaudvinDescr);
    $('#fndDescr').html(language.fr.fndDescr);
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
    $('#XXXXXX').html(language.fr.XXXXXX);
    $('#XXXXXX').html(language.fr.XXXXXX);
    $('#XXXXXX').html(language.fr.XXXXXX);
    $('#XXXXXX').html(language.fr.XXXXXX);
    $('#XXXXXX').html(language.fr.XXXXXX);
    $('#XXXXXX').html(language.fr.XXXXXX);
    $('#XXXXXX').html(language.fr.XXXXXX);
    $('#XXXXXX').html(language.fr.XXXXXX);

  }
}