import { auth, onAuthStateChanged } from "./firebase-config.js";

// Only redirect logic - for protected pages
onAuthStateChanged(auth, function (user) {
  const currentPath = window.location.pathname;

  if (user) {
    // User is authenticated, allow them to stay on protected pages
    if (
      currentPath.includes("getStarted.html") ||
      currentPath.includes("signIn.html") ||
      currentPath.includes("signUp.html")
    ) {
      window.location.href = "../index.html";
    }
  } else {
    // User not authenticated, redirect to get started
    if (
      !currentPath.includes("getStarted.html") &&
      !currentPath.includes("signIn.html") &&
      !currentPath.includes("signUp.html") &&
      !currentPath.includes("forgotPassword.html")
    ) {
      window.location.href = "../pages/getStarted.html";
    }
  }
});
