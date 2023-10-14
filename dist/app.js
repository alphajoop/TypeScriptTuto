const compteur = document.querySelector('#compteur'); // Sélectionne un élément avec l'ID 'compteur'
let i = 0; // Initialise une variable pour compter
const increment = (e) => {
    i++; // Incrémente la variable à chaque appel de la fonction
    compteur.querySelector('span').innerText = i.toString(); // Met à jour le texte dans l'élément span à l'intérieur de 'compteur' avec la nouvelle valeur
};
compteur.addEventListener('click', increment); // Ajoute un écouteur d'événements pour le clic sur 'compteur', appelant la fonction increment
