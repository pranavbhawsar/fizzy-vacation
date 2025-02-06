"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      // e.preventDefault();
      e.stopPropagation();
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

$(document).ready(function () {
  // $('.navbar-link').on('click', function(e) {
  //   e.preventDefault();
  // });

  $(".content").slice(0, 3).show();
  $("#loadMoreDestination").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 3).slideDown();
    if ($(".content:hidden").length == 0) {
      $("#loadMoreDestination").text("More destintion").addClass("noContent");
    }
  });

  $(".content1").slice(0, 3).show();
  $("#loadMorePackages").on("click", function (e) {
    e.preventDefault();
    $(".content1:hidden").slice(0, 3).slideDown();
    if ($(".content1:hidden").length == 0) {
      $("#loadMorePackages").text("View All Packages").addClass("noContent1");
    }
  });

  // Get the modal
  /*var modal = $("#modalDialog");

  // Get the button that opens the modal
  var btn = $(".mbtn");

  // Get the <span> element that closes the modal
  var span = $(".close");

  // When the user clicks the button, open the modal
  btn.on("click", function () {
    modal.show();
  });

  // When the user clicks on <span> (x), close the modal
  span.on("click", function () {
    modal.fadeOut();
  });

  // When the user clicks anywhere outside of the modal, close it
  $("body").bind("click", function (e) {
    if ($(e.target).hasClass("modal")) {
      modal.fadeOut();
    }
  });*/

  $(".open-modal").click(function () {
    var title = $(this).data("title");
    var message = $(this).data("message");

    $("#modal-title").text(title);
    $("#modal-message").text(message);
    $("#myModal").fadeIn();
});

$(".close, .modal").click(function (event) {
    if (event.target === this) {
        $("#myModal").fadeOut();
    }
});

  //Footer Subscriber Form start

  $("#subscribeForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
    },
    submitHandler: function (form) {
      $(".ajax-loader", form).addClass("is-active");

      $.ajax({
        url: "subscribe.php",
        type: "POST",
        data: $(form).serialize(),
        success: function (response) {
          $(".ajax-loader", form).removeClass("is-active");
          if (response.trim() === "Email sending failed...") {
            $("#message").html(response).addClass("mail-sent-ng");
          } else {
            $("#message").html(response).addClass("mail-sent-ok");
          }
        },
      });
    },
  });
  //Footer Subscriber Form end

  //Contact us Form popup start
  $("#contactForm").validate({
    rules: {
      firstname: {
        required: true,
      },
      lastname: {
        required: true,
      },
      contact_email: {
        required: true,
        email: true,
      },
      phone_number: {
        required: true,
        minlength: 10,
        maxlength:10
      },
      // people: {
      //   required: true,
      //   minlength: 1
      // },
      subject: {
        required: true,
      },
    },
    messages: {
      firstname: {
        required: "Please enter your first name",
      },
      lastname: {
        required: "Please enter your last name",
      },
      contact_email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      phone_number: {
        required: "Please enter mobile number",
        minlength: jQuery.validator.format("Please enter 10 digits mobile number"),
        maxlength: jQuery.validator.format("Please enter 10 digits mobile number"),
      },
      // people: {
      //   required: "Please enter No. of person",
      //   min: jQuery.validator.format("One person is required.")
      // },
      subject: {
        required: "Please enter your query",
      },
    },
    submitHandler: function (form) {
      $(".modal-ajax-loader", form).addClass("is-active");
      
      $.ajax({
        url: "contact.php",
        type: "POST",
        data: $(form).serialize(),
        success: function (response) {
          $(".modal-ajax-loader", form).removeClass("is-active");
          if (response.trim() === "Email sending failed...") {
            $("#message").html(response).addClass("mail-sent-ng");
          } else {
            $("#message").html(response).addClass("mail-sent-ok");
          }
        },
      });
    },
  });
  //Contact us Form popup end

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
  });
}); //Ready functions end

// navbar scroll js start
$(".navbar-list > li a[href*=\\#]:not([href=\\#])").on("click", function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      var width = $(window).width();
      $("html,body").animate(
        {
          scrollTop: target.offset().top + 1,
        },
        200
      );
      return false;
    }
  }
});
// navbar scroll js end
