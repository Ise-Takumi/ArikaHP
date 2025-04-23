export function initProjectScroll() {
    const projectsContainer = document.querySelector('.projects_items');
    const projectItems = document.querySelectorAll('.projects_item');
    let currentProjectIndex = 0;
    let isProjectScrolling = false;
    let projectTouchStartY = 0;

    projectsContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        if (isProjectScrolling) return;
        isProjectScrolling = true;

        if (e.deltaY > 0) {
            // 下スクロール
            if (currentProjectIndex < projectItems.length - 1) {
                currentProjectIndex++;
                scrollToProject(currentProjectIndex);
            }
        } else {
            // 上スクロール
            if (currentProjectIndex > 0) {
                currentProjectIndex--;
                scrollToProject(currentProjectIndex);
            }
        }

        setTimeout(() => {
            isProjectScrolling = false;
        }, 1000);
    });

    // タッチイベント
    projectsContainer.addEventListener('touchstart', function(e) {
        projectTouchStartY = e.touches[0].clientY;
    });

    projectsContainer.addEventListener('touchend', function(e) {
        if (isProjectScrolling) return;
        isProjectScrolling = true;

        const touchEndY = e.changedTouches[0].clientY;
        const diff = projectTouchStartY - touchEndY;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // 上スワイプ
                if (currentProjectIndex < projectItems.length - 1) {
                    currentProjectIndex++;
                    scrollToProject(currentProjectIndex);
                }
            } else {
                // 下スワイプ
                if (currentProjectIndex > 0) {
                    currentProjectIndex--;
                    scrollToProject(currentProjectIndex);
                }
            }
        }

        setTimeout(() => {
            isProjectScrolling = false;
        }, 1000);
    });

    function scrollToProject(index) {
        projectItems[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // 初期表示時のアニメーション
    projectItems[0].classList.add('show');
} 