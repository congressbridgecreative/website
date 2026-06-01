document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = leadForm ? leadForm.querySelector('.submit-btn') : null;

    if (leadForm && submitBtn) {
        leadForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stop the default page redirect

            // Save the original text to restore later if something breaks
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            // Pack up the form text values automatically
            const formData = new FormData(leadForm);

            try {
                // Post directly to Web3Forms API
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Smoothly swap form for your custom success card
                    leadForm.classList.add('hidden');
                    formSuccess.classList.remove('hidden');
                    leadForm.reset();
                } else {
                    alert("Submission Error: " + (data.message || "Please check fields and try again."));
                }

            } catch (error) {
                alert("Network error. Please verify your connection or try again later.");
            } finally {
                // Re-enable button adjustments regardless of API route path outcome
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});