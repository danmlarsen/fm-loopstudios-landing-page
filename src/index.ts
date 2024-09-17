const mobileBtn = document.getElementById('mobile-btn')!;
const mobileNav = document.getElementById('mobile-nav')!;

const showNav = function (): void {
    mobileBtn.classList.toggle('open');

    mobileNav.classList.toggle('invisible');
    mobileNav.classList.toggle('opacity-0');
};

mobileBtn.addEventListener('click', showNav);
