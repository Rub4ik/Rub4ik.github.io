document.addEventListener('DOMContentLoaded', function() {
    // Dynamically set the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target element using the href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // If the target element exists, scroll to it smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'); // Select mobile nav links

    function toggleMobileMenu() {
        mobileNavDrawer.classList.toggle('-translate-x-full');
        mobileMenuOverlay.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden'); // Prevent scrolling body when menu is open
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu); // Close when clicking overlay
    }

    // Close mobile menu when a navigation link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!mobileNavDrawer.classList.contains('-translate-x-full')) { // Only close if menu is open
                toggleMobileMenu();
            }
        });
    });


    // Scroll to Top Button functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show/hide the button based on scroll position
    window.onscroll = function() {
        if (scrollToTopBtn) { // Ensure the button exists before trying to access its style
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
    };

    // Scroll to top when the button is clicked
    if (scrollToTopBtn) { // Ensure the button exists before adding an event listener
        scrollToTopBtn.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        duration: 800, // animation duration
        once: true,    // whether animation should happen only once - while scrolling down
    });
});
