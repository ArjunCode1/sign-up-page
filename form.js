document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mysubmit').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting
// document.getElementById('success').textContent='Form Submitted Successfully!'
        var name = document.getElementById('myname').value;
        var email = document.getElementById('myemail').value;
        var password = document.getElementById('myPassword').value;
        var mobno = document.getElementById('mynumber').value;

        
     
        // Simple validation
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || mobno.trim() === '') {
            alert('Please fill all the fields');
            return;
        }

    document.getElementById('success').textContent='Form Submitted Successfully!'
       
        // You can add more complex validation if needed, like email format, password strength, etc.

        // If all validation passes, you can perform further actions
        // console.log('Name:', name);
        // console.log('Email:', email);
        // console.log('Password:', password);
        // console.log('Mobile Number:', mobno);
     

        // Optionally, clear the form fields after submission
        document.getElementById('myname').value = '';
        document.getElementById('myemail').value = '';
        document.getElementById('myPassword').value = '';
        
        document.getElementById('mynumber').value = '';
    });
   
});