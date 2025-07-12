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
    getStartedButton.addEventListener("click", function () {
      window.location.href = "../pages/signUp.html";
    });
  }

  const signUpButton = document.getElementById("sign-up-button");
  if (signUpButton) {
    signUpButton.addEventListener("click", async function () {
      const signUpEmail = document.getElementById("user-sign-up-email").value;
      const signUpPassword = document.getElementById(
        "user-sign-up-password",
      ).value;
      const confirmPassword = document.getElementById(
        "user-confirm-password",
      ).value;

      if (signUpPassword !== confirmPassword) {
        console.error("Passwords do not match");
        // Show error to user
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
        console.log(`User Signed up with Email: ${signUpEmail}`);
        window.location.href = "../index.html";
      } catch (error) {
        console.error("Sign up failed:", error.message);
        // Add user-friendly error display here
      }
    });
  }
});
