export function initMemberScroll() {
    const membersContainer = document.querySelector('.members_items_container');
    const prevButton = document.querySelector('.members_navigation_button.prev');
    const nextButton = document.querySelector('.members_navigation_button.next');
    const indicatorDots = document.querySelectorAll('.members_indicator_dot');

    let currentIndex = 0;
    const itemWidth = membersContainer.querySelector('.members_item').offsetWidth;
    const gap = 40; // CSSで設定したgapと同じ値
    const itemsPerView = 3; // 一度に表示するアイテム数

    function updateScroll() {
        const translateX = -currentIndex * (itemWidth + gap);
        membersContainer.style.transform = `translateX(${translateX}px)`;
        updateIndicator();
    }

    function updateIndicator() {
        indicatorDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        }
    });

    nextButton.addEventListener('click', () => {
        const maxIndex = Math.ceil(membersContainer.children.length / itemsPerView) - 1;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateScroll();
        }
    });

    indicatorDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateScroll();
        });
    });

    // ウィンドウリサイズ時の処理
    window.addEventListener('resize', () => {
        const newItemWidth = membersContainer.querySelector('.members_item').offsetWidth;
        if (newItemWidth !== itemWidth) {
            updateScroll();
        }
    });
} 