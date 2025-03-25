document.addEventListener("DOMContentLoaded", () => {
    const numDots = 50;
    const container = document.getElementById("dot-container");
    const audio = document.getElementById("background-audio");

    // Generate eerie floating dots
    for (let i = 0; i < numDots; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        container.appendChild(dot);

        let size = Math.random() * 6 + 4;
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * window.innerHeight;
        let duration = Math.random() * 5 + 3;

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        dot.style.animationDuration = `${duration}s`;
    }

    // Play the blurry background audio after a delay
    setTimeout(() => {
        audio.volume = 0.5; // Adjust volume
        audio.play();
    }, 2000);
});
