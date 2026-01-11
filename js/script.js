document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Animation Library
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // 2. Booking Form Validation
    const form = document.getElementById('bookingForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Table Reservation Confirmed! We look forward to hosting you.');
            form.reset();
        });
    }

    // 3. Navbar Scroll Effect
    const navbar = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.style.background = 'rgba(0,0,0,0.95)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'rgba(5,5,5,0.9)';
            navbar.style.padding = '20px 0';
        }
    });
});