export function initCircularText(options = {}) {
    const defaultOptions = {
        circleId: "strengths_triangle_center",
        text: "Marketing Marketing Marketing Marketing",
        radius: 180,
        fontSize: 25,
        rotationSpeed: 0.15,
        number: 1,
    };

    const settings = { ...defaultOptions, ...options };
    const circle = document.getElementById(settings.circleId);
    if (!circle) return;

    // 共通の設定値を管理するオブジェクト
    const config = {
        elements: null,
        rotation: 0,
        animationId: null,
        container: null
    };

    // 画面サイズに基づく設定値を取得
    function getSettings() {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
        
        return {
            size: isMobile ? settings.fontSize * 0.6 : isTablet ? settings.fontSize * 0.8 : settings.fontSize,
            radius: isMobile ? settings.radius * 0.6 : isTablet ? settings.radius * 0.7 : settings.radius,
            text: settings.text
        };
    }

    // 要素の位置を更新する共通関数
    function updateElementPosition(element, index, settings, rotation = 0) {
        const angle = (360 / settings.text.length) * index + rotation;
        const centerX = circle.clientWidth / 2 - settings.size / 2;
        const centerY = circle.clientHeight / 2 - settings.size / 2;
        const x = Math.cos(((angle - 90) * Math.PI) / 180) * settings.radius + centerX;
        const y = Math.sin(((angle - 90) * Math.PI) / 180) * settings.radius + centerY;
        
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.transform = `rotate(${angle}deg)`;
    }

    function updateCircularText() {
        // アニメーションを停止
        if (config.animationId) {
            cancelAnimationFrame(config.animationId);
        }

        // 既存のコンテナを削除
        if (config.container) {
            config.container.remove();
        }

        // 既存のコンテナがあれば削除（他のインスタンスのものも含む）
        const existingContainer = circle.querySelector(`.circular-text-container-${settings.circleId}`);
        if (existingContainer) {
            existingContainer.remove();
        }

        // 新しいコンテナを作成（一意のクラス名を使用）
        const container = document.createElement('div');
        container.className = `circular-text-container-${settings.circleId}`;
        Object.assign(container.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '1'
        });

        const currentSettings = getSettings();

        const elements = Array.from({ length: currentSettings.text.length }, (_, i) => {
            const element = document.createElement("div");
            element.className = "element" + settings.number;
            element.textContent = currentSettings.text[i];
            element.style.width = `${currentSettings.size}px`;
            element.style.height = `${currentSettings.size}px`;
            container.appendChild(element);
            return element;
        });

        circle.appendChild(container);
        config.container = container;
        config.elements = elements;

        elements.forEach((element, index) => {
            updateElementPosition(element, index, currentSettings);
        });

        // アニメーションを再開
        animate();
    }

    function animate() {
        config.rotation += settings.rotationSpeed;
        const currentSettings = getSettings();
        
        config.elements.forEach((element, index) => {
            updateElementPosition(element, index, currentSettings, config.rotation);
        });
        
        config.animationId = requestAnimationFrame(animate);
    }

    // 初期表示
    updateCircularText();

    // リサイズイベントの最適化
    let resizeTimeout;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateCircularText, 250);
    };
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数を返す
    return () => {
        if (config.animationId) {
            cancelAnimationFrame(config.animationId);
        }
        if (config.container) {
            config.container.remove();
        }
        window.removeEventListener('resize', handleResize);
    };
}

// 複数の円形テキストを初期化
const circularTexts = [
    {
        circleId: "strengths_triangle_center",
        text: "Marketing Marketing Marketing Marketing",
        radius: 180,
        fontSize: 25,
        rotationSpeed: 0.15,
        number: 1,
    },
    {
        circleId: "fv_contact_circle",
        text: "contact contact contact contact",
        radius: 90,
        fontSize: 12,
        rotationSpeed: 0.15,
        number: 2,
    },
];

circularTexts.forEach(config => initCircularText(config));