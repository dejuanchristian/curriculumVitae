// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('%cChristian CV Website Loaded Successfully!', 'color: #10b981; font-size: 14px; font-weight: bold');
    
    // Smooth scrolling for any future internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Optional: Add print button functionality later
});