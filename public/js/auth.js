// Load pages dynamically
// Render Get started page
// If user clicks get started button, load sign up page
// if user clicks "already have an account" link, load login page
// if user clicks "forgot password" link, load reset password pages
// if account is valid, load index.html
import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const getStartedButton = document.getElementById("get-started-button");
const signInLink = document.getElementById("sign-in-link");
const forgotPasswordLink = document.getElementById("forgot-password-link");

function isNotLoggedIn() {
  return !auth.currentUser;
}

function loadPage(page) {
  window.location.href = page;
}

if (isNotLoggedIn()) {
  loadPage("../pages/getStarted.html");

  getStartedButton.addEventListener("click", loadPage("../pages/signUp.html"));

  signInLink.addEventListener("click", function () {
    loadPage("../pages/signIn.html");
    forgotPasswordLink.addEventListener(
      "click",
      loadPage("../pages/forgotPassword.html"),
    );
  });
} else {
  loadPage("../index.html");
}
