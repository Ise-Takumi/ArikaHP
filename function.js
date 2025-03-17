document.addEventListener('DOMContentLoaded', function() {
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
        const radius = 180; // 半径を196pxから180pxに縮小
        const centerX = circle.clientWidth / 2 - size / 2;
        const centerY = circle.clientHeight / 2 - size / 2;
        const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius + centerX;
        const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius + centerY;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        element.style.transform = `rotate(${angle}deg)`;
    }
});