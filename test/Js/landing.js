$(document).ready(function() {
    $('.owl-carousel-brands').owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        navText: ["<i class='fal fa-chevron-left'/>", "<i class='fal fa-chevron-right'/>"],
        responsive: {
            0: {
                items: 2,
                autoWidth: false,
                margin: 50,
                center: true
            },
            600: {
                items: 4,
                margin: 50
            },
            1000: {
                items: 5,
                margin: 100
            },
            1300: {
                items: 7,
                margin: 100
            }
        }
    });

    $('.owl-carousel-catalog').owlCarousel({
        loop: false,
        dots: false,
        nav: true,
        navText: ["<i class='fal fa-chevron-left'/>", "<i class='fal fa-chevron-right'/>"],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
                margin: 20
            },
            1000: {
                items: 3,
                margin: 20
            }
        }
    });

    $('.owl-carousel-video').owlCarousel({
        items: 1,
        margin: 10,
        video: true,
        center: true,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-chevron-left'/>", "<i class='fal fa-chevron-right'/>"]
    })


    $("select").change(function() {
        $('#inputState option:selected').each(function() { getCity($(this)) });
;    });


    function getCity(element) {
        $('.js-result-select').text(element.val());
        $('.js-result-select').attr("href",'tel:'+ element.val());
    }


    $('.js-call-modal').click(function() {

        $('.modal').css('display', 'block');

    });

    $('.modal-content .close').click(function() {
        $('.modal').css('display', 'none');
    });

    $('.owl-video-play-icon').click(function() {
        $(this).parent().find('.owl-video-play-icon').css('display', 'none');
    })

});