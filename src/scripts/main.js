Fancybox.bind("[data-fancybox]", {
    // Your options go here
});


$('.owl-carousel').owlCarousel({

    dots:false,
    nav:true,
    //loop:true,
    autoplayHoverPause:true,
    smartSpeed:1300,
    responsive:{
        0:{
            center:false,
            items:1,
            margin:0
        },
        1200:{
            center:true,
            items:1,
            stagePadding:310,
            margin:170
        },
        1690:{
            center:true,
            items:1,
            stagePadding:340,
            margin:70
        }
    }
});

$('.doctor__preview_item').on('click', function(){
    const input = $(this).children('input');
    const val = input.val();
    $('.doctors__view').addClass('d-none');
    $('.doctor__view_'+val).removeClass('d-none');
    if(input.attr('checked') != 'checked'){
        $('.doctor__preview_item').removeClass('active');
        $(this).addClass('active');
        $('.doctor__preview_item input').removeAttr('checked');
        input.attr('checked','checked');
    }
});
$('.doctors__preview').on('scroll', function(){
    const ScrollTop = $('#doctorScrollTop').position().top;
    const Bottom = $('#doctorScrollBottom');
    const ScrollBottom = Bottom.position().top;
    const height = $(this).height();
    const heightBottom = Bottom.height();
    if(ScrollTop < 0)
        $(this).parent().addClass('scrollTop');
    else
        $(this).parent().removeClass('scrollTop');
    if(ScrollBottom > height - heightBottom)
        $(this).parent().addClass('scrollBottom');
    else
        $(this).parent().removeClass('scrollBottom');
});

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


$('.questionCarousel').owlCarousel({
    center:true,
    dots:false,
    nav:true,
    loop:true,
    autoplayHoverPause:true,
    smartSpeed:1300,
    responsive:{
        0:{
            stagePadding:15,
            items:1,
            margin:15
        },
        1200:{
            stagePadding:110,
            items:3,
            margin:20
        },
        1600:{
            stagePadding:110,
            items:3,
            margin:32
        }
    }
});
