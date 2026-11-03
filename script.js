
// WISHLIST FUNCTIONALITY

const wishlistButtons = document.querySelectorAll('.wishlist-btn');

wishlistButtons.forEach(button => {

    button.addEventListener('click', function() {

        this.classList.toggle('active');

        const icon = this.querySelector('i');

        if (this.classList.contains('active')) {
            icon.classList.replace('bi-heart', 'bi-heart-fill');
        } else {
            icon.classList.replace('bi-heart-fill', 'bi-heart');
        }

    });

});


// NEWSLETTER FORM

const newsletter = document.querySelector('.newsletter-form');

newsletter.addEventListener('submit', function(event) {

    event.preventDefault();

    alert('Thank you for subscribing to SÉVARA!');

    newsletter.reset();

});


// NAVBAR AUTO CLOSE ON MOBILE

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        if (navbarCollapse.classList.contains('show')) {

            bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();

        }

    });

});