const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', e => {
    e.target.classList.toggle('active');
    burgerMenu.classList.toggle('_opened');

    if (e.target.classList.contains('active')) {
        document.querySelector('body').style.overflow = "hidden";
    } else {
        document.querySelector('body').style.overflow = "visible";
    }
})