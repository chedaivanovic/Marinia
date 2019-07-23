//Sticky
window.onscroll = function() {
  myFunction();
};
var header = document.getElementById("main_nav");
var upperhead = document.getElementById("upper_nav");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    upperhead.classList.add("stickystay");
  } else {
    header.classList.remove("sticky");
    upperhead.classList.remove("stickystay");
  }
}

//Slick
$(document).ready(function() {
  $(".slick-slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      "<a type='button' class='prev-arrow2 pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></a>",
    nextArrow:
      "<a type='button' class='next-arrow2 pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></a>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$(document).ready(function() {
  $(".slick-slider-hero").slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<a type='button' class='prev-arrow2'></a>",
    nextArrow: "<a type='button' class='next-arrow2'></a>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
