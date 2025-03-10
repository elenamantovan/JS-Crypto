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
    
// Partie 4: 
// Fonction qui compte le nombre de voyelles dans une phrase

function count_vowels(string_of_words) {
    let count = 0; // Initialisation du compteur de voyelles à 0
    
     // Parcours de la chaîne de caractères
    for (let i = 0; i < string_of_words.length; i++) {
        // Vérifier si le caractère actuel est une voyelle
        if (is_a_vowel(string_of_words.charAt(i))) {
            count++; // Incrémenter le compteur si c'est une voyelle
        }
    }
    
    return count; // Retourner le nombre total de voyelles trouvées
}


// Partie 5: 
// Fonction qui compte le nombre de consonnes dans une phrase.

function count_consonants(string_of_words) {
    let count = 0;
    for (let i = 0; i < string_of_words.length; i++) count += (string_of_words.charAt(i) !== " " && !vowels.includes(string_of_words.charAt(i))) ? 1 : 0;
    return count;
}


// Partie 6: 
//Supprime toutes les occurrences d'un caractère donné dans une phrase.

function remove(string_of_words, caracter) {
   let result = ''; // Initialise une chaîne vide pour stocker le résultat

   // Parcourt chaque caractère de la phrase
   for (let i = 0; i < string_of_words.length; i++) {
       // Vérifie si le caractère actuel est différent du caractère à supprimer
       if (string_of_words.charAt(i) !== caracter) {
           // Ajoute le caractère à la chaîne résultat
           result += string_of_words.charAt(i);
       }
   }

   // Retourne la nouvelle phrase sans les caractères supprimés
   return result;
}


// Partie 7: 
// Fonction qui supprime toutes les occurrences de plusieurs caractères dans une phrase.

function remove_strings(string_of_words, caracters) {
    let result = ''; // Chaîne pour stocker le résultat final

    // Parcourt chaque caractère de la phrase
    for (let i = 0; i < string_of_words.length; i++) {
        let letter = string_of_words.charAt(i); // Récupère la lettre actuelle

        // Vérifie si la lettre actuelle ne fait PAS partie des caractères à supprimer
        if (!caracters.includes(letter)) {
            result += letter; // Ajoute la lettre à la chaîne résultat
        }
    }

    // Retourne la phrase nettoyée
    return result;
}

// Partie 8:
// Fonction qui chiffre un texte en utilisant le chiffrement de César :

function crypto(a_string, a_number) {
    let result = ""; // Chaine de sortie chiffrée

    for (let i = 0; i < a_string.length; i++) {
        let char = a_string.charAt(i); // Récupérer le caractère actuel

        if (char >= 'a' && char <= 'z') { // Vérifier si c'est une lettre minuscule
            let newCharCode = ((char.charCodeAt(0) - 97 + a_number) % 26) + 97;
            result += String.fromCharCode(newCharCode);
        } else {
            result += char; // Garder les espaces et caractères spéciaux inchangés
        }
    }

    return result;
}


//Partie 9:
// Fonction qui chiffre un texte en utilisant le chiffrement de César avec un nombre paramètre :
function decrypt(a_string, a_number) { return a_string.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0) - 97 - a_number + 26) % 26 + 97)); }


//Partie 10:
// Fonction qui trouve la clé de decryptage
function enigma(crypted_string) {
    // On teste toutes les clés possibles de 1 à 25
    for (let i = 1; i < 26; i++)
        // Si le texte déchiffré contient plus de 5 mots, on affiche la clé
        if (count_words(decrypt(crypted_string, i)) > 5) console.log("Clé:", i);
}