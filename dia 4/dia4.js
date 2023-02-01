function comecar(){
    const perguntarTresVezes = 3
    var adivinha = prompt('Em que número eu estou pensando?')
    var numerosComp = Math.floor(Math.random() * (10 - 0 + 1) + 0)
    for(let i = 1; i < perguntarTresVezes; i++){
        if(adivinha != numerosComp){
            var adivinhaDeNovo = prompt('Errou! Em que número eu estou pensando?')
            if(adivinhaDeNovo == numerosComp){
                i = 3
                alert('Você acertou!')
            }
        }
    }
    if(adivinha == numerosComp){
        alert('Você acertou!')

    }
    alert(`O resultado era ${numerosComp}`)
}

