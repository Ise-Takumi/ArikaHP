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
});