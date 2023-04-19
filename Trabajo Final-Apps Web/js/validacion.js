const nombre = document.getElementById("name")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const asunto = document.getElementById("asunto")
const message = document.getElementById("message")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexTel =  /^[0-9]*(\.?)[0-9]+$/
    parrafo.innerHTML = " "
    
    if(nombre.value.length <5){
        warnings+= 'El nombre no es valido<br>'
        entrar= true
    }
    if(!regexEmail.test(email.value)){
        warnings+= 'El email no es valido<br>'
        entrar= true
    }
    if(!regexTel.test(tel.value)){
        warnings+= 'El telefono no es valido<br>'
        entrar= true
    }
    if(asunto.value.length <1){
        warnings+= 'El asunto no es valido<br>'
        entrar= true
    }
    if(message.value.length <10){
        warnings+= 'El mensaje no es valido<br>'
        entrar= true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})