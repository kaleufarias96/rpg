import prompt from "prompt-sync";
import { menuClasse } from "./menu-classe";
import { Personagem } from "../Personagem";
import { Identificacao } from "../Identificacao";

const teclado = prompt();

function menuCriar() {

    const nome = teclado("Digite o nome do seu personagem: ")
    const raca = teclado("Digite a raça do seu personagem: ")

    const classe = menuClasse()!

    const identificacao = new Identificacao({
        nome,
        raca,
        classe
    })


    return new Personagem(identificacao)
}

export { menuCriar }