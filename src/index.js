
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

let nome = "Hulkk";  
let xp = 1500;
let nivel;

switch (true){ 
    
    case xp < 1001:
    nivel = "Ferro";
    console.log("O Herói " + nome + " está no nível " + nivel + "!");
    break;

    case xp <= 2000:
    nivel = "Bronze";
    console.log("O Herói " + nome + " está no nível " + nivel + "!");
    break;

    case xp <= 5000:
    nivel = "Prata";
    console.log("O Herói " + nome + " está no nível " + nivel + "!");
    break;

    case xp <= 7000:
    nivel = "Ouro";
    console.log("O Herói " + nome + " está no nível " + nivel + "!");
    break;
   

    case xp <= 8000:
    nivel = "Platina";
    console.log("O Herói " + nome + " está no nível " + nivel + "!");
    break;

    case xp <= 9000:
    nivel = "Ascendente";
    console.log("O Herói " + nome + " está no nível " + nivel + "!");
    break;

    case xp <= 10000:
    nivel = "Imortal";
    console.log("O Herói " + nome + " está no nível " + nivel + "!");
    break;

    default: 
    nivel = "Radiante";
    console.log("O Herói " + nome + " está no nível " + nivel + "!");
    break;

}
