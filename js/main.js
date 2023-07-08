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

