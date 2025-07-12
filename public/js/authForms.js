import { auth, signInWithEmailAndPassword } from "./firebase-config.js";

document.addEventListener("DOMContentLoaded", function () {
  // Handle login form
  const loginButton = document.getElementById("login-button");
  if (loginButton) {
    loginButton.addEventListener("click", async () => {
      const email = document.getElementById("user-email").value;
      const password = document.getElementById("user-password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log(`User logged in with email: ${email}`);
        window.location.href = "../index.html";
      } catch (error) {
        console.error("Login failed:", error.message);
        // Add user-friendly error display here
      }
    });
  }

  // Handle navigation buttons
  const getStartedButton = document.getElementById("get-started-button");
  if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
      window.location.href = "../pages/signUp.html";
    });
  }

  // Add other form handlers here (sign up, password reset, etc.)
});
