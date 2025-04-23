export function initHeader() {
    const hamburgerButton = document.querySelector('.hamburger_button');
    const menuContainer = document.querySelector('.header_menu_container');

    console.log(hamburgerButton);
    console.log(menuContainer);

    if (hamburgerButton && menuContainer) {
        hamburgerButton.addEventListener('click', () => {
            hamburgerButton.classList.toggle('active');
            menuContainer.classList.toggle('active');
        });

        // メニューリンクをクリックした時にメニューを閉じる
        const menuLinks = menuContainer.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerButton.classList.remove('active');
                menuContainer.classList.remove('active');
            });
        });
    }
} 