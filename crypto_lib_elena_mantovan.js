//Partie 1: Demande à l'utilisateur de saisir un mot, calcule sa longueur et demande une confirmation.
//Retourne vrai si l'utilisateur confirme la longueur correcte, sinon faux.

function what_are_words_worth() {
    // Instructions pour l'utilisateur
    let valeur_entree = prompt("Veuillez écrire quelque chose :");
    //Calcule la longueur
    let length = valeur_entree.length;
    // Demande la confirmation
    let confirmation = confirm('Votre entrée "' + valeur_entree + '" comporte ' + length + ' caractère(s).');
    // Renvoie la valeur booléenne basée sur la confirmationr
    return confirmation;
}


// Partie 2: Cette fonction prend en paramètre une chaîne de caractères (string_of_words)
// et retourne le nombre de mots dans cette chaîne.
// On suppose que les mots sont séparés uniquement par des espaces.
// La fonction parcourt la chaîne caractère par caractère et compte les espaces
// pour déterminer le nombre de mots.

function count_words(string_of_words) {

 // Initialisation du compteur de mots à 1 car le nombre de mots est égal au nombre d'espaces + 1
let wordCount = 1;

    // Parcours de la chaîne de caractères
        for (let i = 0; i < string_of_words.length; i++) {

            // Si le caractère courant est un espace, on incrémente le compteur de mots
            if (string_of_words.charAt(i) === ' ') {
                wordCount++;
            }
        }
// Retourne le nombre de mots comptés
return wordCount;
}


// Partie 3: Cette fonction prend en paramètre une chaîne de caractères (string_of_words)
// et un séparateur optionnel (letter, par défaut un espace).
// Elle retourne le nombre de mots dans la chaîne, en utilisant le séparateur spécifié.
// La fonction parcourt la chaîne caractère par caractère et compte les séparateurs
// pour déterminer le nombre de mots.

function count_words_by(string_of_words, letter = ' ') {
    let wordCount = 0;
    
        // Parcours de la chaîne de caractères
        for (let i = 0; i < string_of_words.length; i++) {
            if (string_of_words.charAt(i) !== letter) {
                if (i === 0 || string_of_words.charAt(i - 1) === letter) {
                    wordCount++;
                }
            }
        }   
    return wordCount;    
    
}
    
