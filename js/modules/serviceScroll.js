export function initServiceScroll() {
    const services = document.getElementById('services');
    const serviceItems = document.querySelectorAll('.service');
    let currentIndex = 0;
    let isScrolling = false;
    let scrollTimeout;

    // スクロール位置の監視
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(serviceItems).indexOf(entry.target);
                if (index !== -1) {
                    currentIndex = index;
                }
            }
        });
    }, {
        threshold: 0.5
    });

    serviceItems.forEach(item => observer.observe(item));

    // マウスホイールイベント
    services.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        if (isScrolling) return;
        isScrolling = true;

        clearTimeout(scrollTimeout);

        if (e.deltaY > 0) {
            // 下スクロール
            if (currentIndex < serviceItems.length - 1) {
                currentIndex++;
                scrollToService(currentIndex);
            } else {
                // 最後の要素から次のセクションへ
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            }
        } else {
            // 上スクロール
            if (currentIndex > 0) {
                currentIndex--;
                scrollToService(currentIndex);
            } else {
                // 最初の要素から前のセクションへ
                window.scrollBy({
                    top: -window.innerHeight,
                    behavior: 'smooth'
                });
            }
        }

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 1000);
    });

    // タッチイベント
    let touchStartY = 0;
    services.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });

    services.addEventListener('touchend', function(e) {
        if (isScrolling) return;
        isScrolling = true;

        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // 上スワイプ
                if (currentIndex < serviceItems.length - 1) {
                    currentIndex++;
                    scrollToService(currentIndex);
                } else {
                    // 最後の要素から次のセクションへ
                    window.scrollBy({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }
            } else {
                // 下スワイプ
                if (currentIndex > 0) {
                    currentIndex--;
                    scrollToService(currentIndex);
                } else {
                    // 最初の要素から前のセクションへ
                    window.scrollBy({
                        top: -window.innerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        }

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 1000);
    });

    function scrollToService(index) {
        serviceItems[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // フェードインアニメーション
        serviceItems[index].classList.add('show');
    }

    // 初期表示時のアニメーション
    serviceItems[0].classList.add('show');
} 