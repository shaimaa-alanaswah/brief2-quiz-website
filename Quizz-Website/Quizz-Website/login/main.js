
document.getElementById("login-button").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    
    const enteremail1 = document.getElementById("email").value;
    const enterpassword1 = document.getElementById("password1").value;
    const errormessage =document.getElementById("errormessage");
    const users = JSON.parse(localStorage.getItem("users"));
    
    if (users && users.length > 0) {
        for (let i = 0; i < users.length; i++) {
            const storedEmail = users[i].email;
            const storedPassword = users[i].password;
            
            const storedName = users[i].name;

            if (enteremail1 === storedEmail && enterpassword1 === storedPassword) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("name", storedName);
                window.location.href = "../homepage.html";
                return; // Exit the loop when a match is found
            }
        }
    }
    errormessage.textContent="The email or password you entered is incorrect"
});
