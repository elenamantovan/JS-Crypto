//Demande à l'utilisateur de saisir un mot, calcule sa longueur et demande une confirmation.
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