function additionner(...nombres){
   /*  let i
    for(i=0;i<nombres.length;i++){
        console.log(nombres[i])
    } */
   let s=0
    nombres.forEach(i => s+=i)
    return s
}
function afficherPremierEtAutre(premier,...autres){
    console.log("Premier: "+premier)
    autres.forEach(v => console.log(v))
}
const afficherPremierEtAutre2 = (premier,...autres)=>{console.log(autres)}
const estAdmin = (note)=>{return note>10? "Admin":"Echouer"}
console.log(estAdmin(3))

//
//let res = additionner(23)
//console.log(`La somme = ${res}`)
//afficherPremierEtAutre2(7,45,234,56,78)
function creerFiche(nom,filiere,...comptences){
   
    return {
        nom:nom,
        filiere:filiere,
        comptences:comptences
    }
}
let f = creerFiche("Math","IAGE","JS","Python")
//console.log(f)