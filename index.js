class Jogador {
    static qntdJogador = 0;
    constructor(nome, numCamisa) {
        this.nome = nome;
        this.numCamisa = numCamisa;
        Jogador.qntdJogador++;
    }

    atualizarNome(novoNome) {
        this.nome = novoNome;
    }

    atualizarNumero(novoNumero) {
        this.numCamisa = novoNumero;
    }
}

const j1 = new Jogador("Marcus",11)
const j2 = new Jogador("Antonio",10)
const j3 = new Jogador("Ronaldo",7)

console.log(`Dados do primeiro jogador`)
console.log(j1)
console.log(`Dados do segundo jogador`)
console.log(j2)
console.log(`Dados do terceiro jogador`)
console.log(j3)

j1.atualizarNome("Marcos")
j2.atualizarNumero(11)
j1.atualizarNumero(10)
j3.atualizarNome("Cristiano Ronaldo")

console.log("")
console.log("--------------------------------------------")
console.log("")

console.log(`Dados atualizado do primeiro jogador`)
console.log(j1)
console.log(`Dados atualizado do segundo jogador`)
console.log(j2)
console.log(`Dados atualizado do terceiro jogador`)
console.log(j3)

console.log("")
console.log("Quantidade de jogadores cadastrado: ")
console.log(Jogador.qntdJogador)