$(document).ready(function() {
  // Menu Close
  function menuClose() {
    $('.navbar-nav a').on('click', function() {
        var toggle = $('.navbar-toggler').is(':visible');
        if (toggle) {
            $('.navbar-collapse').collapse('hide'); // Close the menu
            $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false'); // Reset toggler state
        }
    });
}


  // Menu Toggler Close
  function menuTogglerClose() {
      $(".toggler-menu").on('click', function() {
          $(this).toggleClass('open');
          $('.header-left').stop().toggleClass('menu-open menu-open-desk');
      });
      $('.header-left a').on('click', function() {
          var toggle = $('.toggler-menu').is(':visible');
          if (toggle) {
              $('.header-left').removeClass('menu-open');
              $('.toggler-menu').removeClass('open');
          }
      });
  }

  // Header Fixed
  function headerFixed() {
      var HscrollTop = $(window).scrollTop();
      if (HscrollTop >= 100) {
          $('body').addClass('fixed-header');
          $('.main-header').addClass('bg-green-800'); // Add the background class
      } else {
          $('body').removeClass('fixed-header');
          $('.main-header').removeClass('bg-green-800'); // Remove the background class
      }
  }

  // Preload
  function preLoad() {
      $("#loading").hide();
  }

  // Initialize functions
  preLoad();
  menuClose();
  menuTogglerClose();

  // Call headerFixed on scroll
  $(window).on('scroll', function() {
      headerFixed();
  });
});

  document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.main-header');

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      document.body.classList.add("fixed-header");
    } else {
      document.body.classList.remove("fixed-header");
    }
  });

  // Trigger on page load if already scrolled
  if (window.scrollY >= 100) {
    document.body.classList.add("fixed-header");
  }
});