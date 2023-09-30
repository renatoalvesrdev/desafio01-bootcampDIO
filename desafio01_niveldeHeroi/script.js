let heroi = "Homem de Ferro"
let xp = 850
let nivel

switch (true) {
    case xp < 1000:
        nivel = "Ferro"
        break

    case xp > 1000 && xp < 2001:
        nivel = "Bronze"
        break

    case xp > 2000 && xp < 5001:
        nivel = "Prata"
        break

    case xp > 5000 && xp < 6001:
        nivel = "Ouro"
        break

    case xp > 6000 && xp < 7001:
        nivel = "Platina"
        break

    case xp > 7000 && xp < 8001:
        nivel = "Ascendente"
        break

    case xp > 8000 && xp < 9001:
        nivel = "Poderoso"
        break

    case xp > 9000 && xp < 10001:
        nivel = "Imortal"
        break

    default:
        nivel = "Radiante"
    
}

console.log(`O Herói ${heroi} está no nível ${nivel} com ${xp}xp`)
