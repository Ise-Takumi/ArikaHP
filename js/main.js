import { initCircularText } from './modules/circularText.js';
import { initHeader } from './modules/header.js';
import { initMember } from './modules/member.js';

document.addEventListener('DOMContentLoaded', function() {
    initCircularText();
    initMember();
    initHeader();
});