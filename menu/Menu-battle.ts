import prompt from "prompt-sync";
import { Personagem } from "../src/Personagem";
import { mostrarStatus } from "./criar";

let protagonista: Personagem;
let continua = true;

const digite = prompt();
let opcao: number = 0;

function menuBattle() {
    while (opcao != 9) {
        console.log("+---------Menu-Do-Personagem----------+");
        console.log("| 1. Verificar status                 |");
        console.log("| 2. Treinar ataque                   |");
        console.log("| 3. Treinar defesa                   |");
        console.log("| 4. Entrar em batalha                |");
        console.log("| 9. Sair                             |");
        console.log("=======================================");


        const escolha: number = +digite("Escolha uma opção: ")

        switch (escolha) {
            case 1:
                
            mostrarStatus();
                
                break;

            case 2:
                continua = protagonista.treinarAtaque()
                if (!continua) {
                    console.log('Personagem morreu por falta de stamina: ' + protagonista.status.stamina);
                }
                break;

            case 3:
                const tempo: number = +digite("Qual a duração do treino em horas? ")
                continua = protagonista.treinarDefesa(tempo);
                if (!continua) {
                    console.log("Game over! Treino em excesso!");
                }
            case 9:
                
                throw new Error("Saindo do jogo");
                break;
            default:
                break;
        }

    }
}

export { menuBattle }