import prompt from "prompt-sync";
import { Personagem } from "../src/Personagem";
import { menuBattle } from "./Menu-battle";

const teclado = prompt();

let protagonista: Personagem;

function menucriar() {
    const nome = teclado("Digite o nome do seu personagem: ")
    const raca = teclado("Digite a raça do seu personagem: ")
    const classe = teclado("Digite a classe do seu personagem: ")
    const armaTipo = teclado("Escolha sua arma: ")

    const armaNome = teclado("Digite o nome da sua arma: ")

    menuBattle();

    protagonista = new Personagem(nome, raca, classe, armaTipo, armaNome);

}

export { menucriar }