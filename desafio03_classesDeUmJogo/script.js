class heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    tipoDeAtaque(){
        if(this.tipo === "Mago"){
            return "magia"
        } else if (this.tipo === "Guerreiro"){
            return "espada"
        } else if (this.tipo === "Monge") {
            return "artes maciais"
        } else if (this.tipo === "Ninja") {
            return "shuriken"
        } 
    }

    atacar(){
        let ataque = this.tipoDeAtaque()
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

let heroi1 = new heroi("Spartacus", "", "Guerreiro")
heroi1.atacar()
let heroi2 = new heroi("Naruto", "", "Ninja")
heroi2.atacar()
let heroi3 = new heroi("Keng", "", "Mago")
heroi3.atacar()
let heroi4 = new heroi("Nikoto", "", "Monge")
heroi4.atacar()

