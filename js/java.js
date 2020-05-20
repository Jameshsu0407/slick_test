// centerMode，不顯示左右
$('.slider-for-1').slick({
	slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-1'
});
$('.slider-nav-1').slick({
	slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for-1',
    arrows: true,
    dots: true,
    focusOnSelect: true,
    // centerMode會讓整的導覽列變小
    centerMode: true,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // 為了讓手機版圖是大的
            centerMode: false,
          }
        }
    ]
});

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $('.slider-nav-1 > .slick-list > .slick-track > .slick-slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
    console.log($(this).html());
  });
  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
  $(visibleSlides).last().next().css('opacity', 0);
}

//Execute the function to apply the visibility on dom ready.
$(setSlideVisibility());

//Re-apply the visibility in the beforeChange event.
$('.slider-nav-1').on('beforeChange', function() {
  $('.slick-slide').each(function() {
  	$(this).css('opacity', 1);
  });
});

//After the slide change has completed, call the setSlideVisibility to hide the partial slides.
$('.slider-nav-1').on('afterChange', function() {
  setSlideVisibility();
});


// 底下的nav不會動
$('.slider-for-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 400,
});

$('.slider-nav-2')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        focusOnSelect: false,
        infinite: true,
        arrows: true,
        dots: true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                // 為了在手機版顯示大圖，改成顯示兩張
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
        ]
    });

$('.slider-for-2').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav-2').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav-2 .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav-2 .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav-2').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-for-2').slick('slickGoTo', goToSingleSlide);
});

// 同高不同寬
$('.slider-for-3').slick({
	slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav-3',
    arrows: false,
    fade: true,
    infinite: true,
    centerMode: true,
    // 必要，上圖跟下圖才不會爆開
    adaptiveHeight: true
    
});
$('.slider-nav-3').slick({
	slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for-3',
    dots: true,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    variableWidth: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            dots: false
          }
        }
    ]
});

// 同高不同寬+彈跳視窗（影片＋圖片）
$('.slider-for-4').slick({
	slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav-4',
    arrows: false,
    fade: true,
    infinite: true,
    centerMode: true,
    // 必要，上圖跟下圖才不會爆開
    adaptiveHeight: true,
    
    
});
$('.slider-nav-4').slick({
	slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for-4',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    variableWidth: true,
    arrows: true,
    // responsive: [
    //     {
    //       breakpoint: 576,
    //       settings: {
    //         dots: false
    //       }
    //     }
    // ]

});