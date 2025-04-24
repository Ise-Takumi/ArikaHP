// export function initSectionObserver() {
//     const sections = document.querySelectorAll(".section");
  
//     // Intersection Observer の設定
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         } else {
//           entry.target.classList.remove("show");
//         }
//       });
//     }, {
//       threshold: 1.0,  // 1.0でセクションが100%見えた時に発火
//     });
  
//     sections.forEach((section) => {
//       observer.observe(section);
//     });
// } 

export function initSectionObserver() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
} 