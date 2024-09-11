// Smooth Scroll for CTA button
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});