const users = [
    {
        email: "admin@space.com",
        password: "Space123"
    }
];

// REGISTER

const registerForm = document.getElementById("registerForm");

if(registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        const message = document.getElementById("registerMessage");

        const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if(name === "" || email === "" || password === "") {
            message.textContent = "Please fill all fields.";
            message.style.color = "red";
            return;
        }

        if(!emailRegex.test(email)) {
            message.textContent = "Invalid email format.";
            message.style.color = "red";
            return;
        }

        if(!passwordRegex.test(password)) {
            message.textContent = "Password must contain 8 characters, one uppercase letter and one number.";
            message.style.color = "red";
            return;
        }

        if(password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            message.style.color = "red";
            return;
        }

        const newUser = {
            email,
            password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        message.textContent = "Registration successful!";
        message.style.color = "lightgreen";

        registerForm.reset();
    });
}

// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const message = document.getElementById("loginMessage");

        let storedUsers = JSON.parse(localStorage.getItem("users")) || users;

        const validUser = storedUsers.find(user => {
            return user.email === email && user.password === password;
        });

        if(validUser) {

            localStorage.setItem("connectedUser", email);

            message.textContent = "Login successful!";
            message.style.color = "lightgreen";

            setTimeout(() => {
                window.location.href = "products.html";
            }, 1500);

        }
        else {
            message.textContent = "Invalid email or password.";
            message.style.color = "red";
        }
    });
}
