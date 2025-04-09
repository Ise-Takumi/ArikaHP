document.addEventListener('DOMContentLoaded', function() {
    // strengths_triangle_center用の円形テキスト配置
    const circle = document.getElementById("strengths_triangle_center");
    const text = "Marketing Marketing Marketing Marketing";

    for (let i = 0; i < text.length; i++) {
        const element = document.createElement("div");
        element.className = "element";
        element.textContent = text[i];
        circle.appendChild(element);

        const size = 25;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;

        const angle = (360 / text.length) * i;
        const radius = 180;
        const centerX = circle.clientWidth / 2 - size / 2;
        const centerY = circle.clientHeight / 2 - size / 2;
        const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
        const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        element.style.transform = `rotate(${angle}deg)`;
    }

    // 回転アニメーション
    let rotation = 0;
    function animate() {
        rotation += 0.15;
        const elements = document.querySelectorAll('.element');
        elements.forEach((element, index) => {
            const angle = (360 / text.length) * index + rotation;
            const radius = 180;
            const centerX = circle.clientWidth / 2 - 25 / 2;
            const centerY = circle.clientHeight / 2 - 25 / 2;
            const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
            const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            element.style.transform = `rotate(${angle}deg)`;
        });
        requestAnimationFrame(animate);
    }
    animate();

    // fv_contact_circle用の円形テキスト配置
    const contactCircle = document.getElementById("fv_contact_circle");
    const contactText = "contact contact contact contact ";

    for (let i = 0; i < contactText.length; i++) {
        const element = document.createElement("div");
        element.className = "contact_element";
        element.textContent = contactText[i];
        contactCircle.appendChild(element);

        const size = 20;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;

        const angle = (360 / contactText.length) * i;
        const radius = 90;
        const centerX = contactCircle.clientWidth / 2 - size / 2;
        const centerY = contactCircle.clientHeight / 2 - size / 2;
        const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
        const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        element.style.transform = `rotate(${angle}deg)`;
    }

    // お問い合わせ用の回転アニメーション
    let contactRotation = 0;
    function animateContact() {
        contactRotation += 0.15;
        const contactElements = document.querySelectorAll('.contact_element');
        contactElements.forEach((element, index) => {
            const angle = (360 / contactText.length) * index + contactRotation;
            const radius = 90;
            const centerX = contactCircle.clientWidth / 2 - 20 / 2;
            const centerY = contactCircle.clientHeight / 2 - 20 / 2;
            const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
            const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            element.style.transform = `rotate(${angle}deg)`;
        });
        requestAnimationFrame(animateContact);
    }
    animateContact();

    // お問い合わせフォームの送信処理
    const contactForm = document.querySelector('.contact_form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータの取得
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // バリデーション
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                alert('必須項目を入力してください。');
                return;
            }
            
            // ここでフォームデータをサーバーに送信する処理を追加
            console.log('送信データ:', data);
            
            // 送信後の処理
            alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡させていただきます。');
            contactForm.reset();
        });
    }

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

    // projects_items用のスクロール実装
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
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    // Intersection Observer の設定
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 1.0,  // 1.0でセクションが100%見えた時に発火
    });
  
    sections.forEach((section) => {
      observer.observe(section);
    });
});
  