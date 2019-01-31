$(function () {
    $('.slider-1').owlCarousel({
        navText: "",
        loop: true,
        autoplay: true,
        fluidSpeed: 600,
        autoplaySpeed: 600,
        items: 4,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })


    new WOW().init(); /*инициал. экземпляр класс wow для запуска анимации.*/
    $('.header__list a').on('click', function (e) {
        e.preventDefault(); /*отмена стандартн поведение ссылки*/
        var selector = $(this).attr('href'); /*получаем атрибут href по клику на ссылку*/
        var h = $(selector); /*передали данные в перем. H*/
        $('html, body').animate({
            scrollTop: h.offset().top - 110
        }, 1000)
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.top-btn').fadeIn(300);
        } else {
            $('.top-btn').fadeOut(300);
        }
    })
    $('.top-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400)
    })

    $('.call__btn').hover(function () { /*остановка анимации при ховере*/
        console.log('hovered');
        $(this).css('animation-iteration-count', '1');
        $(this).on('animationend webkitAnimationEnd oAnimationEnd', function () {
            console.log('animationend');
            $(this).removeClass('animated')
        })
    }, function () {
        $(this).css('animation-iteration-count', 'infinite');
        $(this).addClass('animated')
    })

})



/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("header__manunav").style.width = "100%";
    document.getElementsByClassName('openbtn')[0].style.visibility = 'hidden';
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("header__manunav").style.width = "0";
    document.getElementsByClassName('openbtn')[0].style.visibility = 'visible';
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}