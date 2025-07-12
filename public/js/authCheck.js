import { auth, onAuthStateChanged } from "./firebase-config.js";

onAuthStateChanged(auth, function (user) {
  const currentPath = window.location.pathname;

  if (user) {
    if (
      currentPath.includes("getStarted.html") ||
      currentPath.includes("signIn.html") ||
      currentPath.includes("signUp.html")
    ) {
      window.location.href = "../index.html";
    }
  } else {
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
