
if (!localStorage.getItem("users")) {
    const defaultUsers = [
        {
            name: "Demo Account",
            email: "demo@example.com",
            phone: "0000000000",
            username: "demo",
            password: "1234"
        },
        {
            name: "talha",
            email: "talha24@gmail.com",
            phone: "01305628606",
            username: "talha101",
            password: "123456"
        }
    ];

    localStorage.setItem("users", JSON.stringify(defaultUsers));
}


function login() {
    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    // load all users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // find matching user
    let matchedUser = users.find(u => 
        u.username === user && u.password === pass
    );

    if (matchedUser) {
        alert("Login successful!");
        location.href = "recommend.html";  
    } else {
        alert("Incorrect username or password!");
    }
}
