const body = document.body;
const themeToggles = document.querySelectorAll(".theme-toggle");

themeToggles.forEach(toggle => {  // Pour chaque bouton de bascule de thème
    toggle.addEventListener("click", () => {  // Ajouter un écouteur d'événements de clic
        body.classList.toggle("dark-mode");  // Basculer la classe dark-mode sur le corps

        // Mettre à jour les images en fonction du thème
        const image1 = document.getElementById("logo");
        const image2 = document.getElementById("ProfilePicture");
        const image3 = document.getElementById("img-darkmode");
        const image4 = document.getElementById("logo2");

        // Changer les sources des images selon le mode
        if (body.classList.contains("dark-mode")) {
            image1.src = "./images/logo2.webp";
            image2.src = "./images/photo2.webp";
            image4.src = "./images/logo2.webp";
            image3.src = "./images/light.webp";
        } 
        // Sinon, revenir aux images par défaut
        else {
            image1.src = "./images/logo.webp";
            image2.src = "./images/photo.webp";
            image4.src = "./images/logo.webp";
            image3.src = "./images/dark.webp";
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
        const filter = btn.dataset.filter;  // Récupère la catégorie à filtrer
        filterButtons.forEach(b => b.classList.remove("active"));  // Active button style
        btn.classList.add("active");  // Ajouter la classe active au bouton cliqué

        projects.forEach(project => {  // Parcourt tous les projets
            if (filter === "all" || project.dataset.category === filter) {  // Affiche ou masque les projets
                project.classList.remove("d-none");
            } else {
                project.classList.add("d-none");
            }
        });
    });
});

const buttons = document.querySelectorAll(".btn-interest");

buttons.forEach(button => {
    button.addEventListener("click", () => {  // Ajouter un écouteur d'événements de clic
        buttons.forEach(btn => btn.classList.remove("active"));  // Retirer la classe active de tous les boutons
        button.classList.add("active");  // Ajouter la classe active au bouton cliqué
    });
});