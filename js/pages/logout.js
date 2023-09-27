// logout
const btnLogout = document.querySelector("#btnLogout");
const modalLogoutSure = document.querySelector("#modalLogoutSure");
btnLogout.addEventListener("click", function(){
    btnLogout.setAttribute("data-bs-toggle", "modal");
    btnLogout.setAttribute("data-bs-target", "#modalLogout");
    btnLogout.click();
})
modalLogoutSure.addEventListener("click", function(){
    localStorage.clear();
    location.href= "index.html";
})