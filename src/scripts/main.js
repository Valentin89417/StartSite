// Подключаем FancyBox
// пример: https://fancyapps.com/docs/ui/fancybox/
Fancybox.bind("[data-fancybox]", {});


// Пример слайдера Swiper
// пример: https://swiperjs.com/demos
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// кнопка вверх
$('#scroll_top').click(function(){
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
});
$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
        $('.msf_top').addClass("active");
    } else {
        $('.msf_top').removeClass("active");
    };
});
