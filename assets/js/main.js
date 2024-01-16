const buttonHtml = document.getElementById("bottone")
const grigliHtml = document.getElementById("griglia")
let casellaHtml = document.getElementById("casella")

buttonHtml.addEventListener('click',function(){
    grigliHtml.classList.remove("deactivate")
    grigliHtml.classList.add("active")

    casellaHtml.classList.remove("deactivate")
    casellaHtml.classList.add("active")


    for(let i = 0; i <= 99; i++){
        let casellaHtml =  document.createElement("div")
        casellaHtml.id = "casella" 
        grigliHtml.appendChild(casellaHtml)
     
     }            
})


                                           