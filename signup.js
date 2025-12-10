function signup(event) {
    event.preventDefault(); // stop page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || phone === "" || username === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Signup successful!");
}
