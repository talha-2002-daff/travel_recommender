function login() {
    let savedUser = localStorage.getItem("savedUser");
    let savedPass = localStorage.getItem("savedPass");
    
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === savedUser && pass === savedPass) {
        alert("Login successful!");
        location.href = "recommend.html";
    } else {
        alert("Incorrect username or password!");
    }
}