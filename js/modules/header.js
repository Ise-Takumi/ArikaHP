export function initHeader() {
    const hamburgerButton = document.querySelector('.hamburger_button');
    const menuContainer = document.querySelector('.header_menu_container');
    const body = document.body;

    if (hamburgerButton && menuContainer) {
        hamburgerButton.addEventListener('click', () => {
            menuContainer.classList.toggle('active');
            hamburgerButton.classList.toggle('active');
            body.classList.toggle('no-scroll');

        });

        // メニューリンクをクリックした時にメニューを閉じる
        const menuLinks = menuContainer.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerButton.classList.remove('active');
                menuContainer.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
    }
} 