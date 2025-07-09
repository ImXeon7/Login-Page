
function hidePass() {
document.getElementById("togglePassword").addEventListener("click", function() {
    let passwordField = document.getElementById("password");
    let icon = this.querySelector("i"); // Get the <i> inside the button. 'this' refers to the button element of id 'togglePassword'
    
    // Toggle password visibility
    passwordField.type = passwordField.type === "password" ? "text" : "password";

    // Toggle icon and color
    if (passwordField.type === "text") {
        icon.classList.replace("bx-show", "bx-hide"); // Change to "hide" icon
        this.classList.add("active"); // Change button color
    } else {
        icon.classList.replace("bx-hide", "bx-show"); // Change back to "show" icon
        this.classList.remove("active"); // Reset button color
    }
});
}

hidePass();