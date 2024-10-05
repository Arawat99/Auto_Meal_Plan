document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = {
        Username: formData.get('username'), // Use 'Username' instead of 'username'
        Email: formData.get('email'),       // Use 'Email' instead of 'email'
        Password: formData.get('password')   // Use 'Password' instead of 'password'
    };

    try {
        const response = await fetch('../Frontend/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convert the object to a JSON string
        });

        if (response.ok) {
            const result = await response.json(); // Parse the JSON response
            alert('Sign Up Successful: '); // Notify the user
        } else {
            const error = await response.json(); // Parse the error response
            alert('Sign Up failed: '); // Notify the user of the error
        }
    } catch (error) {
        console.error('Error:', error); // Log any unexpected errors
        alert('An unexpected error occurred. Please try again later.');
    }
});
