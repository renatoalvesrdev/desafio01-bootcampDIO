//Definir nome do herói
const heroi = "Super Dev"

//Somando o saldo das partidas
let rank = playerBalance(58,29)

function playerBalance (wins, loss) {
    let rank = wins - loss
    return rank
}

// Descobrindo o seu nível no rank
let nivel

switch(true) {
    case rank < 10:
        nivel = "ferro"
        break

    case rank > 10 && rank < 21:
        nivel = "bronze"
        break

    case rank > 20  && rank < 51:
        nivel = "Prata"
        break

    case rank > 50  && rank < 81:
        nivel = "Ouro"
        break

    case rank > 80  && rank < 91:
        nivel = "Diamante"
        break

    case rank > 90  && rank < 101:
        nivel = "Lendário"
        break

    default:
        nivel = "imortal"
}

// Imprimindo no console
console.log(`O herói ${heroi} tem um saldo de ${rank} e está no nível de ${nivel}`)