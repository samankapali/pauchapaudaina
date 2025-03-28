document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle with Material ripple effect
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            // Get click position
            const rect = this.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            // Position ripple
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Toggle menu
            navMenu.classList.toggle('show');
        });
    }
    
    // Form submissions with Material feedback
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create a temporary feedback element
            const feedback = document.createElement('div');
            feedback.classList.add('form-feedback');
            feedback.textContent = 'Thank you for your submission!';
            
            // Style the feedback
            feedback.style.position = 'fixed';
            feedback.style.bottom = '20px';
            feedback.style.left = '50%';
            feedback.style.transform = 'translateX(-50%)';
            feedback.style.backgroundColor = '#4CAF50';
            feedback.style.color = 'white';
            feedback.style.padding = '16px 24px';
            feedback.style.borderRadius = '4px';
            feedback.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            feedback.style.zIndex = '1000';
            feedback.style.animation = 'slideIn 0.3s ease-out';
            
            document.body.appendChild(feedback);
            
            // Remove after 3 seconds
            setTimeout(() => {
                feedback.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => {
                    feedback.remove();
                }, 300);
            }, 3000);
            
            // Reset form
            this.reset();
        });
    });
    
    // Add ripple effects to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            // Get click position
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Position ripple
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add animation to cards when they come into view
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});