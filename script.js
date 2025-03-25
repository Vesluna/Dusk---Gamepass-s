document.addEventListener("DOMContentLoaded", () => {
    const numDots = 50; // Number of floating dots
    const container = document.getElementById("dot-container");

    for (let i = 0; i < numDots; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        container.appendChild(dot);

        let size = Math.random() * 6 + 4; // Random size
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * window.innerHeight;
        let duration = Math.random() * 5 + 3; // Random animation speed

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        dot.style.animationDuration = `${duration}s`;
    }
});
