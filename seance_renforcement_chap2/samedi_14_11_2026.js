
const afficheTableau = tab =>{ tab.forEach(element => {
    console.log(element)
});}

const montantTTC = (prix) => {return prix*1.18}

const isPaire = (val)=> { val%2==0?  1:0}

const produitsInfos = (prods) =>{
   return prods.filter(p => p.categorie=="informatique")
}
const getNamePrice = (prods)=>{
    return prods.map(p => ({...p,montantTTC:p.prix*1.18}))
}
const premiumCustomers = (clients)=>{
    return clients.filter(c => c.premium)
}
const customersDotCom = (clients) =>{
    return clients.filter(c => c.email.includes(".com"))
}
const totalPrixProduit = (prods) =>{
    return prods.reduce((total,p)=> total+p.prix,0)
}
const prodCher = (prods)=>{
    return prods.reduce((max,p)=>p.prix>max.prix? p:max)
}
export {
    afficheTableau,
    montantTTC,
    isPaire,
    produitsInfos,
    getNamePrice,
    premiumCustomers,
    customersDotCom,
    totalPrixProduit,
    prodCher
}