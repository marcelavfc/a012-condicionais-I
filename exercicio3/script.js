const nacionalidade = prompt("Escreva aqui sua nacionalidade:").toLowerCase()
//sempre virá em caixa baixa

if (nacionalidade === 'brasileira' || nacionalidade === 'brasileiro') {
    alert('Brasiiil !!')
} else if (nacionalidade === 'argentina' || nacionalidade === 'argentino'){
    alert('Da terra do Maradona!')
} else if (nacionalidade === 'uruguaia' || nacionalidade === 'uruguaio'){
    alert('Que Soy de Uruguai, mi hermano!')
} else if (nacionalidade === 'chileno' || nacionalidade === 'chilena'){
    alert('Pero que soy de Chile!')
} else if (nacionalidade === 'colombiano' || nacionalidade === 'colombiana'){
    alert('Si que soy de Colombia!')
} else {
    alert ("digite sua nacionalidade! APERTE NO F5!")
}

