const elements = document.querySelectorAll('.card, .glass');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

// initial state
elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.6s ease";
});
