const etudiantL2={
    id:104,
    prenom:"Aminata",
    nom:"Fall",
    note:[13,16,12],
    filiere:"IAGE"
}

//prenom,nom,filiere
function extraireIdentite(etudiant){
    const {nom,prenom,filiere} = etudiant
    return {nom,prenom,filiere}
}
function calculerMoyenneNotes(notes){
    //amoul not return 0
    if(notes.length==0) return 0
    let s=0
    notes.forEach(e => {
        s+=e
    });
    return s/notes.length
}
/* let r = calculerMoyenneNotes([34,12])
if(r==0){
    console.log("Tableau vide")
}else{
    console.log(`La moyenne du tableau est ${r}`)
} */
//console.log(extraireIdentite(etudiantL2))
function ajouterNote(etudiant,nouvelleNote){
    //retourne un new objet avec la nouvelle note
    // en utilisant le spread
   //const e = structuredClone(etudiant)
   // e.note = [...e.note,nouvelleNote]
    const e = etudiant
   // e.nom="Ba"
   // console.log(e)
    //console.log(etudiant)

}
let res = ajouterNote(etudiantL2,18)
//console.log(res)
function creerResume(etudiant,...options){
    //return resume avec identite + moyenne + options dans un tableau
    return {
        identite:extraireIdentite(etudiant),
        moyenne:calculerMoyenneNotes(etudiant.note),
        options:options
    }
}
console.log(creerResume(etudiantL2,"GL","MM","RI"))