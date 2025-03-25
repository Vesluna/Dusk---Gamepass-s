document.addEventListener("DOMContentLoaded", () => {
    const numDots = 50; // Number of floating dots
    const body = document.body;

    for (let i = 0; i < numDots; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        body.appendChild(dot);

        let size = Math.random() * 6 + 4; // Random size
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * window.innerHeight;

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        dot.style.animation = `float ${Math.random() * 5 + 3}s infinite alternate ease-in-out`;

        dot.style.animationDelay = `${Math.random() * 2}s`;
    }
});

// Add floating effect using CSS animations
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes float {
    0% { transform: translateY(0); opacity: 0.8; }
    100% { transform: translateY(-20px); opacity: 0.4; }
}`;
document.head.appendChild(styleSheet);
