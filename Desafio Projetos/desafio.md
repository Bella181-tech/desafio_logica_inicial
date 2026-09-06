//Instruções para o desafio de lógica de programação:

//# 1️⃣ Desafio Classificador de nível de Herói

/**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

// Lista de Heróis pra testar o laço de repetição e estruturas de decisão

 const herois = [
  {
    nome: "Batman",
    habilidades: ["Inteligência", "Força", "Agilidade"],
    xp: 4500
  },
  {
    nome: "Superman",
    habilidades: ["Superforça", "Voo", "Visão de Raio-X"],
    xp: 1500
  },
  {
    nome: "Homem-Aranha",
       habilidades: ["Agilidade", "Sentido Aranha", "Força"],
    xp: 5000
  },
  {
    nome: "Mulher-Maravilha",
    habilidades: ["Força", "Velocidade", "Laço da Verdade"],
    xp: 8000
  },
  {
    nome: "Homem de Ferro",
    habilidades: ["Tecnologia Avançada", "Voo", "Armadura"],
    xp: 9000
  },
];

//Laço de repetição para percorrer a lista de heróis e classificar o nível de cada um
for (let i = 0; i < herois.length; i++) {

    //Variáveis para armazenar o herói atual e seu nível
  let nome = herois[i].nome;
  let habilidades = herois[i].habilidades;
  let xp = herois[i].xp;
  let nivel = "";

  //Estrutura de decisão para classificar o nível do herói com base no XP
  switch (true) {
    case xp <= 1000:
      nivel = "Ferro";
      break;
    case xp >= 1001 && xp <= 2000:
      nivel = "Bronze";
      break;
    case xp >= 2001 && xp <= 5000:
      nivel = "Prata";
      break;
    case xp >= 5001 && xp <= 7000:
      nivel = "Ouro";
      break;
    case xp >= 7001 && xp <= 8000:
      nivel = "Platina";
      break;
    case xp >= 8001 && xp <= 9000:
      nivel = "Ascendente";
      break;
    case xp >= 9001 && xp <= 10000:
      nivel = "Imortal";
      break;
    default:
      nivel = "Radiante";
      break;
  }

  //Exibindo a mensagem final com o nome do herói e seu nível
  console.log(`O Herói de nome ${nome} está no nível de ${nivel} e possui habilidades como: ${habilidades.join(", ")}   `);
}