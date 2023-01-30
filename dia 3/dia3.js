function comecar(){
    var nome = prompt('Olá, qual o seu nome?')

    if (nome != 0){
        var backend = 'Back-end'
        var frontend = 'Front-end'
        var area = prompt(`${nome}, o que você está estudando? Back-end ou Front-end?`)
        if (area == backend){
            var c = 'C#'
            var java = 'Java'
            var setorB = prompt(`Hmmm ${backend}, qual linguagem você quer aprender primeiro: C# ou Java?`)
            if (setorB == c){
                alert(`Nossa ${c} é uma linguagem muito útil e interessante, espero que goste!`)
                especializacao()
                especTec()
            } else if (setorB == java){
                alert(`Nossa ${java} é uma linguagem muito interessante e útil, espero que goste!`)
                especializacao()
                especTec()
            }
        } else if (area == frontend){
            var setorF = prompt(`Hmmm ${frontend}, qual linguagem você quer aprender primeiro: React ou Vue`)
            var react = 'React'
            var vue = 'Vue'
            if (setorF == react){
                alert(`Nossa ${react} é uma linguagem muito interessante e útil, espero que goste!`)
                especializacao()
                especTec()
            }else if(setorF == vue){
                alert(`Nossa ${vue} é uma linguagem muito interessante e útil, espero que goste!`)
                especializacao()
                especTec()
            }
        }
    }
}

function especializacao(){
    var areaEscolhida = 'Minha área'
    var fullStack = 'Fullstack'
    var espec = prompt('Certo, você gostaria de se especializar na sua área escolhida ou se tornar um Fullstack? (Digite >Minha área< ou >Fullstack<)')
    if (espec == areaEscolhida){
        alert('Quais são as tecnologias nas quais você gostaria de se especializar?')
    } else if (espec == fullStack){
        alert('Quais são as tecnologias nas quais você gostaria de se especializar?')
    }
}

function especTec(){
    do{
        var tec = prompt('')
    } while (tec == 0)
    var frase = document.getElementById('frase')
    frase.innerHTML = (`Entendi, boa sorte nos seus estudos de ${tec}`)
}

