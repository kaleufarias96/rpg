import PromptSync from "prompt-sync";
import { menuCriar } from "./menu-criar";
import { Guerreiro } from "../classes/Guerreiro";
import { ClasseBase } from "../classes/ClasseBase";
import { Arqueiro } from "../classes/Arqueiro";
import { Mago } from "../classes/Mago";

const teclado = PromptSync();
let opcao: number = 0;

function menuClasse() {
    let classe;
    
    while (opcao != 9) {
        console.log("======Escolha a classe!======");
        console.log("| 1 - Guerreiro             |");
        console.log("| 2 - Archer                |");
        console.log("| 3 - Mago                  |");
        

        let opcao = teclado("Digite uma opção: ");
        
        switch (opcao) {
            case "1":
                classe = new Guerreiro();
                break;
            case "2":
                classe = new Arqueiro();
                break;
            case "3":
                classe = new Mago();
                break;
            default:
                break;
                
        }
        
        if (classe) {
            break;
        }
    }
    
    return classe;
}

export { menuClasse };