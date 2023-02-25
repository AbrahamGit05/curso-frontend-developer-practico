const s_ = (selector) => 
document.querySelector(selector);

const menuEmail = s_('.navbar-email');
const desktopMenu = s_('.desktop-menu');
const HamburguerIcon = s_('.menu');
const menuCarritoIcon = s_('.navbar-shopping-cart');
const mobileMenu= s_('.mobile-menu');
const aside = s_('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
HamburguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive')
        }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
        aside.classList.toggle('inactive')
    }