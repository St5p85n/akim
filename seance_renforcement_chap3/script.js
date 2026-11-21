import { tableContent } from "./module.js"
const btnAdd = document.querySelector("#btnAdd")
const tabNoms = ["Diop","Aissatou"]
btnAdd.addEventListener("click",(event)=>{
    event.preventDefault()
    tabNoms.push(document.querySelector("#nom").value)
    document.querySelector("#myForm").reset()
    displayAll()
})
function displayAll(){
    const lstNames = document.querySelector("#lstNames")
    lstNames.innerHTML=``
    tabNoms.forEach( (e,index) => {
        lstNames.innerHTML+= tableContent(e,index)
    }) 
}
function deleteN(index){
    //supprimer l'element a travers l'index
    //reafficher (displayAll)
}
displayAll()
/*l
btnAdd.addEventListener("click",ajoutNom)
function ajoutNom(){
    console.log("Click sur le bouton")
}*/