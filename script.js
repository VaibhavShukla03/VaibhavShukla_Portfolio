let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add
                ('active')

            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
    
// Initialize EmailJS with your public key
        emailjs.init('b5k7g6ZsptZwwjULx'); // Replace with your actual public key

        // Form submission handler
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const btnText = document.getElementById('btn-text');
            const statusMessage = document.getElementById('status-message');
            
            // Disable submit button and show loading state
            submitBtn.disabled = true;
            btnText.innerHTML = 'Sending <span class="loading"></span>';
            
            // Hide any previous status messages
            statusMessage.classList.remove('show', 'success', 'error');
            
            // Send email using EmailJS
            emailjs.sendForm('service_qws61qj', 'template_cud1v5n', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    statusMessage.textContent = 'Message sent successfully! I\'ll get back to you soon. 🎉';
                    statusMessage.classList.add('success', 'show');
                    
                    // Reset form
                    document.getElementById('contact-form').reset();
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    statusMessage.textContent = 'Failed to send message. Please try again or contact me directly. 😞';
                    statusMessage.classList.add('error', 'show');
                })
                .finally(function() {
                    // Re-enable submit button
                    submitBtn.disabled = false;
                    btnText.textContent = 'Send Message';
                    
                    // Clear status message after 7 seconds
                    setTimeout(() => {
                        statusMessage.classList.remove('show');
                    }, 7000);
                });
        });

        // Optional: Add form validation feedback
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#e74c3c';
                } else {
                    this.style.borderColor = 'var(--main-color)';
                }
            });
        });
