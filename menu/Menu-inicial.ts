import PromptSync from "prompt-sync";
import { menucriar } from "./criar";

const teclado = PromptSync();
let opcao: number = 0;

function menuinicial() {
    while (opcao != 9) {
        console.log("======Bem vindo ao jogo!======");
        console.log("| 1 - Criar char             |");
        console.log("| 2 - Sair                   |");

        let opcao = teclado("Digite uma opção: ");

        switch (opcao) {
            case "1":
                menucriar();
                break;
            case "2":
                console.log("Opção 2");
                break;
            default:
                console.log("Opção inválida!");
                break;
        }
    }
}

export { menuinicial };