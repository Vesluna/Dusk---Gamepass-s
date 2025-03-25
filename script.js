document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle-wrapper');

    circles.forEach((circle, index) => {
        const img = circle.querySelector('.profile-pic');
        const placeholder = circle.querySelector('.placeholder');
        const buttons = circle.querySelector('.buttons');
        const links = buttons.querySelectorAll("a");

        // Assign unique images per circle (First one is updated)
        const imageLinks = [
            "https://i.postimg.cc/L5FFVPg4/Light-daggers-gamepass.webp", 
            "https://i.postimg.cc/rsZCk1GM/Better-flashlight-gamepass.webp"  
        ];

        img.src = imageLinks[index % imageLinks.length]; 

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
});
