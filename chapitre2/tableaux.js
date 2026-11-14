 import { produits } from "./data.js";

 //console.log(produits)
 //filter
 //const prod80k = produits.filter( e => e.prix>=80000)
 //console.log(prod80k)
// const prod80kInformatique = produits.filter( e => e.prix>=80000&&e.categorie==="informatique")
// console.log(prod80kInformatique)
//const prodView = produits.map(e => ({...e,pTTC:e.prix*1.18}))
//const prodView = produits.map(e => `<p>${e.nom}</p>`)
//console.log(prodView)
//const findPro8 = produits.find(e => e.categorie==="telephonie")
//console.log(findPro8)
//const prodPlusCher = produits.reduce((max,p) => p.prix>max.prix? p:max)
//console.log(prodPlusCher)
//console.log(totalPrix)
//let note=19
//let admission = note>=10? "Admin":"Echoue"
//console.log(admission)
const prodInfo = produits.filter(p => p.categorie==="informatique")
                        .map(e=> ({prixU:e.prix,name:e.nom}) )
                        .reduce((total,p)=> total+p.prixU,0)
console.log(prodInfo)