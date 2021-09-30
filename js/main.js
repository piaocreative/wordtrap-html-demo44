$(document).ready(function(){

  $('#products').slick({
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
  });

  $('#tes').slick({
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    appendDots: true,
    dots: true,
    arrow: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
  });
});

