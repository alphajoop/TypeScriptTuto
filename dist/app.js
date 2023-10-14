"use strict";
// Sélection de l'élément avec l'ID 'compteur' (l'élément peut être null)
const compteur = document.querySelector('#compteur');
// Initialisation de la variable pour compter
let i = 0;
// Fonction d'incrémentation appelée lors du clic
const increment = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du clic (si applicable)
    i++; // Incrémente la variable à chaque appel de la fonction
    // Sélection de l'élément 'span' à l'intérieur de 'compteur' (span peut être null, compteur est déjà sécurisé avec ?)
    const span = compteur?.querySelector('span');
    // Vérification si 'span' est défini
    if (span) {
        span.innerText = i.toString(); // Met à jour le texte avec la nouvelle valeur
    }
};
// Ajout d'un écouteur d'événements pour le clic sur 'compteur', appelant la fonction increment (compteur peut être null)
compteur?.addEventListener('click', increment);
