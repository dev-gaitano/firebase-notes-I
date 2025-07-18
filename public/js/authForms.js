import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  googleProvider,
} from "./firebase-config.js";

document.addEventListener("DOMContentLoaded", function() {
  // Handle navigation buttons
  const getStartedButton = document.getElementById("get-started-button");
  if (getStartedButton) {
    getStartedButton.addEventListener("click", function() {
      window.location.href = "../pages/signUp.html";
    });
  }

  // Email Signup functionality
  const signUpButton = document.getElementById("sign-up-button");
  if (signUpButton) {
    signUpButton.addEventListener("click", async function() {
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

  // Email Signin functionality
  const signInButton = document.getElementById("login-button");
  if (signInButton) {
    signInButton.addEventListener("click", async function() {
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

  // Reset password functionality
  const resetPasswordButton = document.getElementById("reset-password-button");
  if (resetPasswordButton) {
    resetPasswordButton.addEventListener("click", async function() {
      const email = document.getElementById("user-email").value;

      if (!email) {
        console.error("Please enter your email address");
        // Show error to user
        return;
      }

      try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent!");
        // Show success message to user
        alert("Password reset email sent! Check your inbox.");
      } catch (error) {
        console.error("Password reset failed:", error.message);
        // Show error to user
        alert("Error: " + error.message);
      }
    });
  }
});

// Google Auth
const googleAuthButton = document.getElementById("google-auth-button")
if (googleAuthButton) {
  googleAuthButton.addEventListener("click", async function() {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      console.log("Signed in as", user.displayName)
    } catch (err) {
      console.error("Sign-in error:", err.message)
    }
  })
}
