Fancybox.bind("[data-fancybox]", {
    // Your options go here
});

// INITIALIZE AOS
AOS.init();

//Настройка отложенной загрузки
if ('loading' in HTMLImageElement.prototype) { // Поддерживает loading
    $('img[loading="lazy"],iframe[loading="lazy"]').each( function(){
        $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
    });
} else { // Не поддерживает loading
    // Динамически импортируем библиотеку LazySizes
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/assets/source/lazysizes/lazysizes.min.js';
    document.body.appendChild(script);
}


/* !!! Примеры - можно удалить !!! */

//  Swiper Top Banner
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
//  END Swiper Top Banner

//  Swiper Slider
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//  END Swiper Slider
