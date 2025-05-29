// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Form submission handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});
// Add filter functionality for projects
document.addEventListener('DOMContentLoaded', function () {
    // This is optional - for filtering projects by technology
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filterValue = this.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const techTags = card.querySelectorAll('.tech-tag');
                        let hasTech = false;

                        techTags.forEach(tag => {
                            if (tag.textContent.toLowerCase().includes(filterValue)) {
                                hasTech = true;
                            }
                        });

                        card.style.display = hasTech ? 'block' : 'none';
                    }
                });
            });
        });
    }

    // Add animation when projects come into view
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        observer.observe(card);
    });
});
// You can add more interactive features like:
// - Project filtering
// - Animated skill bars
// - Dark mode toggle
// - Interactive project cards