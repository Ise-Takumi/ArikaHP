import { initCircularText } from './modules/circularText.js';
import { initContactForm } from './modules/contactForm.js';
// import { initServiceScroll } from './modules/serviceScroll.js';
// import { initProjectScroll } from './modules/projectScroll.js';
// import { initSectionObserver } from './modules/sectionObserver.js';
import { initMemberScroll } from './modules/memberScroll.js';
// import { initHeader } from './modules/header.js';

document.addEventListener('DOMContentLoaded', function() {
    initCircularText();
    initContactForm();
    // initServiceScroll();
    // initProjectScroll();
    // initSectionObserver();
    initMemberScroll();
    // initHeader();
});