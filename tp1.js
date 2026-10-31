
/*
• 1. Avec le destructuring d’objet, extraire nom, prenom et filiere.
• 2. Extraire niveau dans une variable appelée classe (renommage).
• 3. Avec le destructuring de tableau, récupérer la première, la deuxième et la dernière note sans modifier le
tableau d’origine.
• 4. Extraire la première et la troisième note en laissant volontairement une position ignorée.
• 5. Utiliser une valeur par défaut pour extraire la propriété email, absente de l’objet.
• 6. Afficher une phrase de présentation contenant le prénom, le nom, la filière et la classe.
*/
const etudiant = {
id: 2026,
nom: "Ndiaye",
prenom: "Moussa",
filiere: "IAGE",
niveau: "L2",
ville: "Dakar"
};
//Reponse Q1
const {nom,prenom,filiere} = etudiant
//Reponse Q2
const {niveau:classe} = etudiant


const resultats = [15, 11, 17, 13, 16];
//Reponse Q3

const [premiers,deuxieme,,,last] = resultats
//Reponse Q4
 const [premier,,troisieme] =resultats
 
//Reponse Q5
const {email = "contact@mssekaacademy.com"} = etudiant
//Reponse Q6
console.log(`Bonjour je suis ${prenom} - ${nom} etudiant de la ${classe} ${filiere}`)