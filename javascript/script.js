<<<<<<< HEAD
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
=======
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
>>>>>>> 9f4a5d8f6bf7dc53cde9f3a252320c40c6444c4f
});