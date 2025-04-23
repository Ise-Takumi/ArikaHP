export function initContactForm() {
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
} 