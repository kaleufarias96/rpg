import prompt from "prompt-sync";
import { Personagem } from "../Personagem";
import { menuBatalha } from "./menu-batalha";

/* 
- gera monstro com status aleatorio
- pergunta pro usuario se ele quer briga
    sim:
        - simulacao de batalha em turnos:
            - player ataca
                monstro continua vivo:
                    = mostra vida do monstro
                monstro morre:
                    = ganha +1 score
                    - volta para menu do personagem
                    
            - monstro ataca
                player continua vivo:
                    = mostra vida do player
                player morre:
                    = game over
            
    nao:
        - gerar outro monstro continua loop */


async function menuPersonagem(protagonista: Personagem) {

    let opcao: number = 0;
    const digite = prompt();

    while (opcao != 9) {
        console.log("+---------Menu-Do-Personagem----------+");
        console.log("| 1. Verificar status                 |");
        console.log("| 2. Treinar ataque                   |");
        console.log("| 3. Treinar defesa                   |");
        console.log("| 4. Descansar                        |");
        console.log("| 5. Entrar em batalha                |");
        console.log("| 9. Sair                             |");
        console.log("=======================================");


        const escolha: number = +digite("Escolha uma opção: ")

        switch (escolha) {
            case 1: {
                console.clear()
                protagonista.identificacao.classe.mostrarStatus();
                break;
            }

            case 2: {
                console.clear()
                const tempo: number = +digite("Qual a duração do treino em horas? ")
                await protagonista.treinarAtaque(tempo)
                break;
            }

            case 3: {
                console.clear()
                const tempo: number = +digite("Qual a duração do treino em horas? ")
                await protagonista.treinarDefesa(tempo);
                break;
            }

            case 4: {
                console.clear()
                const tempo: number = +digite("Qual a duração do treino em horas? ")
                await protagonista.descansar(tempo);
                break;
            }
            
            case 5: {
                console.clear()
                await menuBatalha(protagonista);
                break;
            }

            case 9:
                throw new Error("Saindo do jogo");
                break;

            default:
                break;
        }

    }
}

export { menuPersonagem }
