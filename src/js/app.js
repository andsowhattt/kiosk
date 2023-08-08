import './modules/mode.js';
import { carouselSwitcher } from './modules/carousel.js';
import * as api from './const/api.js';
import * as loader from './modules/loader.js';
import * as shop from './modules/shop.js';
import { Counter } from './modules/counter.js';
import CheckOutForm from './modules/checkout.js';
import { validateForm } from './modules/valid.js';
import { sendMessage, initEmailForm } from './modules/email.js';
import { renderWishlistItems } from './modules/wishlist.js';

document.addEventListener('DOMContentLoaded', () => {

	const cardsContainer = document.querySelector('.cards');
	if (cardsContainer) {
		shop.fetchProducts(api.apiLinks.products, '.cards').then(() => loader.hideLoadingOverlay()); 
	}

	const randomCardsContainer = document.querySelector('.random__cards');
	if (randomCardsContainer) {
		shop.fetchProducts(api.apiLinks.randomProducts, '.random__cards');
	}

	const saleCardsContainer = document.querySelector('.sale__cards');
	if (saleCardsContainer) {
		shop.fetchProducts(api.apiLinks.randomSale, '.sale__cards');
	}

	validateForm();

	const checkOutForm = new CheckOutForm('city', 'district', 'delivery');

	const counter = new Counter();
	counter.init();

	carouselSwitcher();

	initEmailForm();

	const wishlistContainer = document.querySelector('.wishlist__block');
	if (wishlistContainer) {
		renderWishlistItems(wishlistContainer);
	}
});