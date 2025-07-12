import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase-config.js";

document.addEventListener("DOMContentLoaded", function () {
  // Handle navigation buttons
  const getStartedButton = document.getElementById("get-started-button");
  if (getStartedButton) {
    getStartedButton.addEventListener("click", function () {
      window.location.href = "../pages/signUp.html";
    });
  }

  // Signup functionality
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

  // Signin functionality
  const signInButton = document.getElementById("login-button");
  if (signInButton) {
    signInButton.addEventListener("click", async function () {
      const signInEmail = document.getElementById("user-sign-in-email").value;
      const signInPassword = document.getElementById(
        "user-sign-in-password",
      ).value;

      try {
        await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
        console.log(`User logged in with Email: ${signInEmail}`);
        window.location.href = "../index.html";
      } catch (error) {
        console.error("Login failed:", error.message);
        // Add user-friendly error display here
      }
    });
  }
});
