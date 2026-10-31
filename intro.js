// Etudiant (nom,prenom,age,id)
const produit = {
    id:1,
    libelle:"Marqueur",
    prixU:200,
    qte:5
}


const etudiant = {
    nom:"Diop",
    prenom:"Binta",
    age:16,
    role:{name:"admin"}
}
//console.log(etudiant.nom) Nom: Diop et Prenom: Binta
''
""
//console.log("NOM: "+etudiant.nom+" et Prenom: "+etudiant.prenom)//version 1
//console.log(`NOM: ${etudiant.nom} et Prenom: ${etudiant.prenom}`)version 2
//Destructuring

//const {role:{name}} = etudiant
//console.log(name)
//un objet
// const {} = objet
//un tableau 
// const [] = tableau
//const [v1,v2,v3] = tab
//console.log(v3)
const tab1 = [34,1,10]
const tab2 =[-1,3]
const tu = [0,...tab1,24,...tab2,100]

//console.log(tab1)
//const etu1 = {id:1,nom:"Diop"}
//const etu2 = {id:3,nom:"Maimouna",age:10}
//const eu = {...etu2,...etu1}
//console.log(eu)
const user = {
    id:1,
    nom:"Massekaacademy",
    role:"prof",
    login:"msk",
    password:"msk",
    age:5
}
//userLocal
const {password,...userLocal} =user
const tabx = [34,1,10,80,20]
const [v1,...rest] = tabx
console.log(rest)

