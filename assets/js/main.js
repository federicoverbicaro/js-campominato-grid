const buttonHtml = document.getElementById("bottone")
const grigliHtml = document.getElementById("griglia")
const casellaHtml = document.getElementById("casella")

buttonHtml.addEventListener('click',function(){
    grigliHtml.classList.remove("deactivate")
    grigliHtml.classList.add("active")

    casellaHtml.classList.remove("deactivate")
    casellaHtml.classList.add("active")
})


// for(let i = 1; i < 100; i++){
//     casellaHtml.innerHTML
// }