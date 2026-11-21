const divN1 =document.querySelector("#divN1")
const mH1 = document.createElement("h1")
const mH2 = document.createElement("h2")

mH1.textContent = "Bonjour depuis KM js"
mH1.classList.add("cRg")
divN1.append(mH1,mH2)
//document.querySelector("#divN1").innerHTML="<h1>Bonjour depuis KM js</h1>"
const btnAdd =document.querySelector("#btnAdd")
btnAdd.addEventListener("click",(event)=>{
    event.preventDefault()
    const plat = document.querySelector("#plat").value
    document.querySelector("#platListe").innerHTML+=`<li>${plat}</li>`
document.querySelector("#plat").value=""
})
