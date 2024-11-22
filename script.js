let isLogin = true;

function toggleForm() {
    const title = document.getElementById("form-title");
    const submitButton = document.getElementById("submit-button");
    const emailGroup = document.getElementById("email-group");

    if (isLogin) {
        title.textContent = "Retro Register";
        submitButton.textContent = "Register";
        emailGroup.classList.remove("hidden");
        document.querySelector("button[onclick='toggleForm()']").textContent = "Switch to Login";
    } else {
        title.textContent = "Retro Login";
        submitButton.textContent = "Login";
        emailGroup.classList.add("hidden");
        document.querySelector("button[onclick='toggleForm()']").textContent = "Switch to Register";
    }
    isLogin = !isLogin;
}
