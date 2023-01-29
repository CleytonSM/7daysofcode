function verificar(){
    var fnome = document.getElementById('pede-nome')
    var fidade = document.getElementById('pede-idade')
    var flingua = document.getElementById('pede-lingua')
    var res = document.querySelector('#res')
    var resDois = document.querySelector('#res2')
    if (fidade.value == 0 && fnome.value == 0 && flingua.value == 0){
        alert('ERRO')
    } else{
        res.innerHTML = `Seu nome é ${fnome.value}, você tem ${fidade.value} anos de idade e está estudando ${flingua.value}. `
       
    }
}
function perguntar(){
    var flingua = document.getElementById('pede-lingua')
    var resposta = prompt(`Você está gostando de estudar ${flingua.value}? ("1" para sim ou "2" para não)`)
    var resDois = document.getElementById('res_dois')
    if (resposta == 1){
        resDois.innerHTML = (`Que bom que você está gostando de ${flingua.value}!`)
    } else if (resposta == 2){
        resDois.innerHTML = (`Que pena que você não está gostando de ${flingua.value}.`)
    }
}





/*function perguntar(){
    let gostar = prompt(`Você está gostando de estudar`)
}
*/
