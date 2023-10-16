document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('E-mail').value;
    var password = document.getElementById('password').value;
    var cpass = document.getElementById('C-password').value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var namePattern = /^[A-Za-z\s]*$/;

    var emailError = "";
    var nameError = "";
    var passwordError = "";
    var cpassError = "";

    if (name.trim() === "") {
        nameError = "Name is required";
    } else if (!namePattern.test(name)) {
        nameError = "Name should contain only letters and spaces";
    }

    if (email.trim() === "") {
        emailError = "Email is required";
    } else if (!emailPattern.test(email)) {
        emailError = "Please enter a valid email address";
    }

    if (password.trim() === "") {
        passwordError = "Password is required";
    } else if (password.length < 6 || password.length > 18) {
        passwordError = "Password should be between 6-18 characters";
    }

    if (cpass.trim() === "") {
        cpassError = "Confirm Password is required";
    } else if (password !== cpass) {
        cpassError = "Passwords do not match";
    }

    document.getElementById('namecheck').innerHTML = nameError;
    document.getElementById('email-check').innerHTML = emailError;
    document.getElementById('pass-check').innerHTML = passwordError;
    document.getElementById('con-check').innerHTML = cpassError;

    if (emailError !== "" || nameError !== "" || passwordError !== "" || cpassError !== "") {
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push({
        email: email,
        name: name,
        password: password
    });
    console.log(users)

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = "./login.html";
}