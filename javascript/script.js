document.addEventListener("DOMContentLoaded", () => {
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('section, div, .container, .planos, .precos, .billed, #billed-section main');

    elements.forEach((element) => myObserver.observe(element));
});