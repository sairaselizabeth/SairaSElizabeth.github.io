// ===============================
// Mobile navigation
// ===============================

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
});


// Close mobile menu after selecting a link

document.querySelectorAll("nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

    });

});


// ===============================
// Automatic copyright year
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();
