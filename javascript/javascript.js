const body = document.body;

const themeToggles = document.querySelectorAll(".theme-toggle");

themeToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        const image1 = document.getElementById("logo");
        const image2 = document.getElementById("ProfilePicture");
        const image3 = document.getElementById("img-darkmode");
        const image4 = document.getElementById("logo2");

        if (body.classList.contains("dark-mode")) {
            image1.src = "../images/logo2.webp";
            image2.src = "../images/photo2.webp";
            image4.src = "../images/logo2.webp";
            image3.src = "../images/light.webp";
        } else {
            image1.src = "../images/logo.webp";
            image2.src = "../images/photo.webp";
            image4.src = "../images/logo.webp";
            image3.src = "../images/dark.webp";
        }
    });
});

 (() => {
    const contactForm = document.getElementById("contactForm"); // Récupération du formulaire
    contactForm.addEventListener("submit", function (event) { // Écoute de la soumission du formulaire
        if (!contactForm.checkValidity()) { // Vérifie si le formulaire est valide (HTML5)
            event.preventDefault();  // Empêche l'envoi si invalide
            event.stopPropagation();
        } else {
            event.preventDefault();  // Empêche l'envoi réel (pas de backend)
            alert("Message sent successfully!");  // Message de confirmation
            contactForm.reset();  // Réinitialisation du formulaire
            contactForm.classList.remove("was-validated");  // Retire les styles de validation Bootstrap
            return;
        }
        contactForm.classList.add("was-validated"); // Active l'affichage des erreurs Bootstrap
    });
})();

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        // Active button style
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        projects.forEach(project => {
            if (filter === "all" || project.dataset.category === filter) {
                project.classList.remove("d-none");
            } else {
                project.classList.add("d-none");
            }
        });
    });
});