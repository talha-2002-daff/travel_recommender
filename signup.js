// signup.js

function signup(event) {
    event.preventDefault(); // stop page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !phone || !username || !password) {
        alert("Please fill out all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const usernameExists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (usernameExists) {
        alert("Username already taken. Please choose another.");
        return;
    }

    const emailExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
        alert("An account with this email already exists.");
        return;
    }

    const newUser = { name, email, phone, username, password };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Redirecting to login page...");

    
    window.location.href = "login.html";
}
