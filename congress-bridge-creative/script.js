document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    const formSuccess = document.getElementById('formSuccess');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload sequence
            
            // Gather standard form parameters
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const bizname = document.getElementById('bizname').value;
            const message = document.getElementById('message').value;

            // Logs output safely inside developer console panel
            console.log('Form submission intercepted:', { name, email, bizname, message });

            // Smooth UI display toggle
            leadForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
        });
    }
});