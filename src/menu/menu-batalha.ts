import PromptSync from "prompt-sync";
import { menuCriar } from "./menu-criar";
import { Guerreiro } from "../classes/Guerreiro";
import { ClasseBase } from "../classes/ClasseBase";
import { Arqueiro } from "../classes/Arqueiro";
import { Mago } from "../classes/Mago";
import { ArmaBase } from "../armas/ArmaBase";
import { Personagem } from "../Personagem";
import { Monstro } from "../classes/Monstro";

const teclado = PromptSync();
let opcao: number = 0;

async function menuBatalha(personagem: Personagem) {
    let continueWhile = true
    
    while (opcao != 9) {
      const monstro = gerarMonstro(personagem.score);
        console.log("======Menu de Batalha!======");
        console.log("Inimigo encontrado:");
        monstro.identificacao.classe.mostrarStatus();
        console.log("| 1 - Entrar em combate          |");
        console.log("| 2 - Não combater/Proximo       |");
        console.log("| 3 - Voltar ao menu personagem  |");
        
        let opcao = teclado("Digite uma opção: ");
        
        switch (opcao) {
            case "1":
                await simulacaoCombate(personagem, monstro);
                break;
            case "2":
                console.clear();
                break;
            case "3":
                console.clear();
                continueWhile = false
                break;
            default:
                break;
        }
        
        if (!continueWhile) {
            break;
        }
    }
}

function gerarMonstro(score: number) {
  const gerarAtributo = (min: number, max: number) => Math.floor(min + max * Math.random() * (score * 0.1))
  const classe = new Monstro({
      ataque: gerarAtributo(10, 50),
      defesa: gerarAtributo(0, 10),
      energia: gerarAtributo(50, 100),
      vida: gerarAtributo(100, 500),
      arma: new ArmaBase({
        dano: gerarAtributo(10, 50),
        tipo: "Arma"
      })
    });
    
  const monstro = new Personagem({
    classe,
    nome: "Monstro",
    raca: "Monstro",
  })
  
  return monstro;
}

async function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function simulacaoCombate(personagem: Personagem, monstro: Personagem) {
  let turno = 0;
  while (personagem.identificacao.classe.vida > 0 && monstro.identificacao.classe.vida > 0) {
    turno++;
    
    console.log(`Turno ${turno}`);
    await wait(2500);
    
    console.log("Personagem ataca!");

    personagem.atacar(monstro);
    
    await wait(1500);
    
    console.log("Monstro ataca!");
    monstro.atacar(personagem);
    
    console.log("Personagem:");
    personagem.identificacao.classe.mostrarStatus();
    
    console.log("Monstro:");
    monstro.identificacao.classe.mostrarStatus();
  }
  
  if (personagem.identificacao.classe.vida > 0) {
    console.log("Você venceu!");
  } else {
    console.log("Monstro venceu!");
  }  
}

export { menuBatalha };