document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("backToTop").addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })

    const toggleVisibility = () => {
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 100) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    };

    window.addEventListener('scroll', toggleVisibility);

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current) && current !== "contact") {
                link.classList.add('active');
            }
        });
    });
});