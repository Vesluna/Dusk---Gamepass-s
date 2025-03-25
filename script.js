document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle-wrapper');

    circles.forEach((circle, index) => {
        const img = circle.querySelector('.profile-pic');
        const placeholder = circle.querySelector('.placeholder');
        const buttons = circle.querySelector('.buttons');
        const links = buttons.querySelectorAll("a");

        // Assign unique images per circle (keeping original design!)
        const imageLinks = [
            "https://i.postimg.cc/L5FFVPg4/Light-daggers-gamepass.webp",  // Light Daggers+
            "https://i.postimg.cc/rsZCk1GM/Better-flashlight-gamepass.webp"  // Better Flashlight
        ];

        if (index < imageLinks.length) {
            img.src = imageLinks[index]; 
        }

        img.addEventListener('load', function() {
            if (img.src && img.src !== "" && img.src !== window.location.href) {
                placeholder.style.display = 'none';
                img.style.display = 'block';

                let validLinks = Array.from(links).some(link => link.href && link.href !== "#");
                buttons.style.visibility = validLinks ? 'visible' : 'hidden';
            } else {
                placeholder.style.display = 'flex';
                img.style.display = 'none';
                buttons.style.visibility = 'hidden';
            }
        });

        img.dispatchEvent(new Event('load'));
    });

    // Buy Button Popup (WITHOUT messing up the original layout)
    document.querySelectorAll(".primary").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            showPopup(event.target.closest('.buttons').querySelector('a').href);
        });
    });

    function showPopup(link) {
        const popup = document.createElement("div");
        popup.classList.add("popup-overlay");
        popup.innerHTML = `
            <div class="popup">
                <h2>Wait!</h2>
                <p>Before you do this, are you sure? This popup UI is designed in case this site could be a fake version of its original. If you still want to continue, you may.</p>
                <button id="continue-btn">Continue to Site</button>
                <button id="close-btn">X</button>
            </div>
        `;

        document.body.appendChild(popup);

        // Close the popup
        document.getElementById("close-btn").addEventListener("click", function() {
            document.body.removeChild(popup);
        });

        // Continue to site
        document.getElementById("continue-btn").addEventListener("click", function() {
            window.location.href = link; 
            document.body.removeChild(popup);
        });
    }
});
