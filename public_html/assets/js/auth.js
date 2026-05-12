//Verificar si está logueado
function isAuthenticated() {
    return localStorage.getItem("auth") === "1";
}

//Redirigir si NO está logueado
function checkAuth() {
    if (!isAuthenticated()) {
        window.location.href = "login.html";
    }
}

//Login
function login() {
    localStorage.setItem("auth", "1");
    window.location.href = "index.html";
}

//Logout
function logout() {
    localStorage.removeItem("auth");
    window.location.href = "login.html";
}