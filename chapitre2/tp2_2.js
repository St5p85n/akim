import { produits,commandes,clients } from "./data.js"
const totalLigne = (lignes )=>lignes.reduce((acc,ligne)=> acc+ligne.prixUnitaire*ligne.quantite,0)
const chifLivre = commandes
                        .filter(c=> c.statut==="livree")
                        .reduce( (acc,{lignes})=> acc+totalLigne(lignes),0)
const parStatus = commandes.reduce((acc,cmd)=>{
    acc[cmd.statut]=(acc[cmd.statut] ?? 0) +1
    return acc;
}, {})

const vStockByCate = produits.reduce( (acc,p)=>{
    acc[p.categorie] = (acc[p.categorie]??0)+ p.prix*p.stock
    return acc;
},{})
const genererTableauDeBord = (produits, commandes) =>{
    const tLivre=commandes
                        .filter(c=> c.statut==="livree").length
    return {
        nbCommandes:commandes.length,
        nbCommandesParStatut:parStatus,
        chiffreAffairesLivre:chifLivre,
        panierMoyen: tLivre? Math.round(chifLivre/tLivre):0,
        produitsEnRupture:produits.filter(p=>p.stock===0).map(p=>p.nom),
        valeurStockParCategorie:vStockByCate
    }
}



//console.log(parStatus)
console.log(genererTableauDeBord(produits,commandes))