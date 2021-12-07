//Código contemplando apenas os requisitos do sistema


//Requisito 1 - Ver se a data do novo evento é futura
console.log("Informe a data do evento:")

//USUÁRIO - Digite a data    
const eventoData = new Date("2022-5-12")

//Validação se a data é no futuro, ou seja, maior que o dia de hoje
if(eventoData > Date()){
    console.log("Informe o nome do evento:")

    //USUÁRIO - Digite o nome do evento
    eventoNome = "Floripa Craft Beer"
} else {
    console.log("A data do evento é inválida.")
}

//Requisito 2 - Só permitir participantes acima de 18 anos

console.log("Informe a data de nascimento do participante:")

let participanteData = new Date("1990-8-1")

//Cálculo da idade
let hoje = new Date()

let participanteIdade = (hoje.getTime() - participanteData.getTime())/(1000*3600*360*24)

if(participanteIdade >= 18){
    console.log("Qual o nome do participante?")
    let participanteNome = "Helena Albino"
} else {
    console.log("Cadastro não permitido pela idade.")
}

//Requisito 3 - Registrar participante apenas se o evento escolhido tiver menos que 100 participantes

let listaParticipantesEvento = ["Helena Albino", "Yuri Nascimento", "Denilson Lopes"]

if(listaParticipantesEvento.length <= 100){
    console.log("O evento ainda permite cadastros.")
} else {
    console.log("O evento está lotado! Cadastro não realizado")
}

//Requisito 4 - Listar participantes e palestrantes por evento

let listaPalestrantesEvento = ["Jessica Santo", "Elda Nemer", "Raoni"]

console.log(`Participantes: ${listaParticipantesEvento}`)
console.log(`Palestrantes: ${listaPalestrantesEvento}`)
