import PromptSync from "prompt-sync";
import { menuCriar } from "./menu-criar";

const teclado = PromptSync();
let opcao: number = 0;

function menuInicial() {
    let personagem;
    
    while (opcao != 9) {
        console.log("======Bem vindo ao jogo!======");
        console.log("| 1 - Criar Personagem       |");
        console.log("| 2 - Sair                   |");

        let opcao = teclado("Digite uma opção: ");

        switch (opcao) {
            case "1":
                console.clear()
                personagem = menuCriar();
                break;
            case "2":
                console.clear()
                throw new Error("Saindo do jogo");
                break;
        }
        
        if (personagem) {
            console.log("Personagem criado com sucesso!");
            break;
        }
    }
    
    return personagem
}

export { menuInicial };