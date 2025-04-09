
        document.getElementById('portfolioContactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = e.target;
            const successDiv = document.getElementById('formSuccess');
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    // Show success message BELOW form
                    successDiv.style.display = 'block';
                    form.reset();
                    
                    // Hide after 5 seconds
                    setTimeout(() => {
                        successDiv.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error sending message. Please try again.');
            }
        });
        document.querySelectorAll('.skill-box').forEach(box => {
            box.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
        
    