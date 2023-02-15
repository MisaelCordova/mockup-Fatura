const url = "https://localhost:7230/Consumidor/Cadastro"

let nome = document.querySelector("#name")
let documento = document.querySelector("#cpfcnpj")
let email = document.querySelector("#email")
let senha = document.querySelector("#password")

let select = document.querySelector("#tipopessoa")
let value = select.options[selectIndex].value


const btnCadastrar = document.querySelector("form")
btnEntrar.addEventListener('submit', function(e){   
     e.preventDefault()
     let documentoDigitado;
     if(documento.value.length == 14){
        documentoDigitado = documento.value.slice(0,3) + documento.value.slice(4,7) + documento.value.slice(8,11) + documento.value.slice(12,14)
     }else{
        documentoDigitado = documento.value.slice(0,2) + documento.value.slice(3,6) + documento.value.slice(7,10) + documento.value.slice(11,15) + documento.value.slice(16,18)
     } 
    console.log(documentoDigitado)
    console.log(url + "/" + documentoDigitado)

    let request = fetch(url,{
        method: 'POST',
        headers: {
            "Accept": "*//*",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            doc_Consumidor : documentoDigitado,
            senha: senha.value
        })
        
    })
    console.log(request)
    request.then(function(res){
        if(res.status == 200){
            alert("logou")
        }
    })

})