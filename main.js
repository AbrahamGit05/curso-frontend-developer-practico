//@ts-check

const s_ = (selector) => 
document.querySelector(selector);

const menuEmail = s_('.navbar-email');
const desktopMenu = s_('.desktop-menu');
const HamburguerIcon = s_('.menu');
const menuCarritoIcon = s_('.navbar-shopping-cart');
const mobileMenu= s_('.mobile-menu');
const aside = s_('.product-detail')
const cardsContainer = s_('.cards-container');
const carritoInfo = s_('.product-detail');
const cerrarCarritoInfo = s_('product-detail-secundary-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
HamburguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
carritoInfo.addEventListener('click', toggleCerrarCarritoInfo);

function toggleCerrarCarritoInfo (){
    cerrarCarritoInfo.classList.toggle('inactive')
}

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

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
     
function renderProducts(arr){
    for (let product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);

        const productDivInfo = document.createElement('div')
        productDivInfo.classList.add('product-info');

        const productDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' +product.price;

        const productName = document.createElement('p')
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');

        const productCardImg = document.createElement('img')
        productCardImg.setAttribute('src', "./icons/bt_add_to_cart.svg");

        productDiv.appendChild(productPrice)
        productDiv.appendChild(productName)

        productFigure.appendChild(productCardImg)

        productDivInfo.appendChild(productDiv)
        productDivInfo.appendChild(productFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productDivInfo)

        cardsContainer.appendChild(productCard);
        console.log('hellow');
    }
}

renderProducts(productList);