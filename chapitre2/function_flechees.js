function somme(a,b){return a+b}
const somme2 = (a,b)=>{return a+b}
const carre = val=> {return val*val}
//console.log(carre(4))
// ||, ? , ??
const etudiantL2={
    id:104,
    prenom:"Aminata",
    nom:"Fall",
    note:0
}
console.log(etudiantL2.note ?? "Amoul de note")