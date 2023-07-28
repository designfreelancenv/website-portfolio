var typed = new Typed('.header-wrapper__text-typing', {
    strings: [
        'Никита Винниченко',
        'Веб-разработчик',
        'Фрилансер',
    ],
    startDelay: 50,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

window.addEventListener('scroll', function () {
    var navMenu = document.querySelector('.navigation');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        navMenu.classList.add('scrolled');
    } else {
        navMenu.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('.section');
    var navItems = document.querySelectorAll('.nav-menu__item');

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var rect = section.getBoundingClientRect();

        if (rect.top <= 50 && rect.bottom > 0) {
            // Если секция видима на экране
            for (var j = 0; j < navItems.length; j++) {
                var navItem = navItems[j];
                var link = navItem.querySelector('a');

                if (link.getAttribute('href') === '#' + section.getAttribute('id')) {
                    // Применяем класс активной ссылки в навигационном меню
                    navItem.classList.add('nav-menu__item_active');
                } else {
                    // Удаляем класс активной ссылки с остальных элементов
                    navItem.classList.remove('nav-menu__item_active');
                }
            }
        }
    }
});

document.querySelector(".dropdown-language__btn").addEventListener("click", function () {
    document.querySelector(".dropdown-language__content").classList.toggle("open");
    document.querySelector(".dropdown-language__arrow").classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
    const preloaderWrapper = document.querySelector(".preloader-wrapper");
    const body = document.querySelector("body");

    // После завершения анимации preloader'а, скрываем preloader и удаляем блокировку скроллинга
    setTimeout(function () {
        preloaderWrapper.classList.add("preloader-wrapper__hidden");
        body.classList.remove("anti-scroll");
    }, 2000);
});

const headerBtn = document.querySelector(".header-wrapper__btn");
const headerPopupBg = document.querySelector(".header-wrapper__popup-bg")
const headerPopup = document.querySelector(".header-wrapper__popup");
headerBtn.addEventListener("click", () => {
    headerPopup.classList.add("open");
    document.querySelector("body").classList.add("anti-scroll");
});
headerPopupBg.addEventListener("click", () => {
    headerPopup.classList.remove("open");
    document.querySelector("body").classList.remove("anti-scroll");
});
document.querySelector('.burger-menu').addEventListener("click", () => {
    document.querySelector('.burger-menu').classList.toggle('active');
    document.querySelector('.navigation__menu').classList.toggle('active');
})

