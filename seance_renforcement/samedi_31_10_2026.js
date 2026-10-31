/* const tab = [234,12,56,20]
const [first,second,...x] = tab
const delegatJOJ = {id:1,pays:"Senegal",nbParticipant:100}
const {id,...del} = delegatJOJ
console.log(del) */
function isPremier(nombre){
    let cpt=0
    for(let i=1;i<=nombre;i++){
        if(nombre%i==0) cpt++
    }
    if(cpt==2) return true
    return false;
}
function somme2(val1,val2){
    return val1+val2
}
function somme3(val1,val2,val3){
    return val1+val2+val3
}

function sommeN(x,y,...val){
    console.log(x)
    console.log(y)
    //console.log(val)
    val.forEach((e) => console.log(e))
   
}
function nObjects(x,...val){
    console.log(x)
}
function calculeSalaireProf({nbHeure:nombr_d_heure}){
    console.log(nombr_d_heure)
    //console.log(`Le salaire est de ${nbHeure*15000}`)
}
const prof = {id:1,nbHeure:200,name:"Gueye"}
calculeSalaireProf(prof)
//nObjects({id:1,name:"Diop"},{id:2,name:"Zenaba"},{id:1,name:"Aissatou"})
//sommeN(12,31,20,35,67)
//console.log(`La somme donne ${r}`)
/* if(isPremier(6)){
    console.log("6 est premier")
}else{
    console.log("6 n'est pas premier")
} */