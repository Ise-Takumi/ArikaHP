export function initCircularText() {
    // strengths_triangle_center用の円形テキスト配置
    const circle = document.getElementById("strengths_triangle_center");

    function updateCircularText() {
        // 既存の要素を削除

        // ウィンドウサイズに応じてサイズを調整
        const isMobile = window.innerWidth <= 768;
        const size = isMobile ? 15 : 25;
        const radius = isMobile ? 120 : 180;
        const text = isMobile ? "Marketing Marketing Marketing" : "Marketing Marketing Marketing Marketing";

        for (let i = 0; i < text.length; i++) {
            const element = document.createElement("div");
            element.className = "element";
            element.textContent = text[i];
            circle.appendChild(element);

            element.style.width = `${size}px`;
            element.style.height = `${size}px`;

            const angle = (360 / text.length) * i;
            const centerX = circle.clientWidth / 2 - size / 2;
            const centerY = circle.clientHeight / 2 - size / 2;
            const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
            const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            element.style.transform = `rotate(${angle}deg)`;
        }
    }

    // 初期表示
    updateCircularText();

    // 回転アニメーション
    let rotation = 0;
    function animate() {
        rotation += 0.15;
        const elements = document.querySelectorAll('.element');
        const isMobile = window.innerWidth <= 768;
        const radius = isMobile ? 120 : 180;
        const size = isMobile ? 15 : 25;
        const text = isMobile ? "Marketing Marketing Marketing" : "Marketing Marketing Marketing Marketing";

        elements.forEach((element, index) => {
            const angle = (360 / text.length) * index + rotation;
            const centerX = circle.clientWidth / 2 - size / 2;
            const centerY = circle.clientHeight / 2 - size / 2;
            const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
            const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            element.style.transform = `rotate(${angle}deg)`;
        });
        requestAnimationFrame(animate);
    }
    // animate();

    // ウィンドウサイズ変更時の処理
    window.addEventListener('resize', () => {
        updateCircularText();
    });

    
    // fv_contact_circle用の円形テキスト配置
    const contactCircle = document.getElementById("fv_contact_circle");

    function updateContactCircularText() {
        // 既存の要素を削除

        // ウィンドウサイズに応じてサイズを調整
        const isMobile = window.innerWidth <= 768;
        const size = isMobile ? 15 : 20;
        const radius = isMobile ? 60 : 90;
        const contactText = isMobile ? "contact contact contact" : "contact contact contact contact";

        for (let i = 0; i < contactText.length; i++) {
            const element = document.createElement("div");
            element.className = "contact_element";
            element.textContent = contactText[i];
            contactCircle.appendChild(element);

            element.style.width = `${size}px`;
            element.style.height = `${size}px`;

            const angle = (360 / contactText.length) * i;
            const centerX = contactCircle.clientWidth / 2 - size / 2;
            const centerY = contactCircle.clientHeight / 2 - size / 2;
            const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
            const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            element.style.transform = `rotate(${angle}deg)`;
        }
    }

    // 初期表示
    updateContactCircularText();

    // お問い合わせ用の回転アニメーション
    let contactRotation = 0;
    function animateContact() {
        contactRotation += 0.15;
        const contactElements = document.querySelectorAll('.contact_element');
        const isMobile = window.innerWidth <= 768;
        const radius = isMobile ? 60 : 90;
        const size = isMobile ? 15 : 20;
        const contactText = isMobile ? "contact contact contact" : "contact contact contact contact";

        contactElements.forEach((element, index) => {
            const angle = (360 / contactText.length) * index + contactRotation;
            const centerX = contactCircle.clientWidth / 2 - size / 2;
            const centerY = contactCircle.clientHeight / 2 - size / 2;
            const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
            const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            element.style.transform = `rotate(${angle}deg)`;
        });
        requestAnimationFrame(animateContact);
    }
    // animateContact();

    // ウィンドウサイズ変更時の処理
    window.addEventListener('resize', () => {
        updateContactCircularText();
    });
} 