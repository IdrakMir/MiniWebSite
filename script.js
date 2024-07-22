$(function () {
    const $gallery = $('.gallery a').simpleLightbox();
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Скролл вниз
            navbar.classList.add('hidden');
        } else {
            // Скролл вверх
            navbar.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для предотвращения отрицательных значений
    });
});







document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-image');
    const closeButtons = document.querySelectorAll('.portfolio-close');

    // Функция для открытия портфолио-элемента
    function openPortfolio(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.classList.add('item_open');
        document.body.style.overflow = 'hidden';
    }

    // Функция для закрытия портфолио-элемента
    function closePortfolio(event) {
        event.preventDefault();
        this.closest('.portfolio-port').classList.remove('item_open');
        document.body.style.overflow = '';
    }

    // Добавляем обработчики событий для открытия портфолио
    portfolioItems.forEach(item => {
        item.addEventListener('click', openPortfolio);
    });

    // Добавляем обработчики событий для закрытия портфолио
    closeButtons.forEach(button => {
        button.addEventListener('click', closePortfolio);
    });
});