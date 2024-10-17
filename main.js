// Liste des pays et de leurs codes (pour récupérer les drapeaux via l'API)
const countries = [
    {name: "France", code: "FR"},
    {name: "Germany", code: "DE"},
    {name: "Italy", code: "IT"},
    {name: "Spain", code: "ES"},
    {name: "United States", code: "US"},
    {name: "Japan", code: "JP"},
    {name: "Brazil", code: "BR"},
    {name: "Australia", code: "AU"},
    {name: "Canada", code: "CA"},
    {name: "Mexico", code: "MX"}
];

let currentCountry; // Le pays actuel à deviner

const flagElement = document.getElementById('flag');
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('country-guess');
const resultMessage = document.getElementById('result-message');
const nextButton = document.getElementById('next-button');

// Fonction pour choisir un pays aléatoire et afficher son drapeau
function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    currentCountry = countries[randomIndex];
    flagElement.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.png`; // Lien vers Flagpedia pour le drapeau
}

// Vérification de la réponse
guessForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userGuess = guessInput.value.trim().toLowerCase();
    if (userGuess === currentCountry.name.toLowerCase()) {
        resultMessage.textContent = "Bonne réponse !";
        resultMessage.style.color = "green";
        nextButton.style.display = 'block'; // Affiche le bouton "Suivant"
    } else {
        resultMessage.textContent = "Mauvaise réponse. Réessaye !";
        resultMessage.style.color = "red";
    }
});

// Bouton suivant pour passer au prochain drapeau
nextButton.addEventListener('click', function() {
    getRandomCountry();
    resultMessage.textContent = "";
    guessInput.value = "";
    nextButton.style.display = 'none';
});

// Démarrer avec un pays aléatoire au chargement de la page
getRandomCountry();
