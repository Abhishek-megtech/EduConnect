if (localStorage.getItem("loggedIn") !== "true") {
  if (!window.location.pathname.endsWith("login.html")) {
    window.location.href = "login.html";
  }
}
