import { Identificacao } from "./Identificacao";
import { Util } from "../Util";
import { Guerreiro } from "./classes/Guerreiro";

class Personagem {
  score = 0
  identificacao: Identificacao

  constructor(identificacao: Identificacao) {
    this.identificacao = identificacao
  }
  
  atacar(inimigo: Personagem): void {
    const danoArma = this.identificacao.classe.arma.dano
    const danoPersonagem = this.identificacao.classe.ataque
    const danoTotal = danoArma + danoPersonagem
    
    const defesaInimigo = inimigo.identificacao.classe.defesa
    
    const dano = danoTotal - defesaInimigo
    
    if (dano > 0) {
      inimigo.identificacao.classe.vida -= dano
    }
  }

  async treinarAtaque(tempoEmHoras: number): Promise<boolean> {
    return this.identificacao.classe.treinarAtaque(tempoEmHoras)
  }

  async treinarDefesa(tempoEmHoras: number): Promise<boolean> {
    return this.identificacao.classe.treinarDefesa(tempoEmHoras)
  }
  
  async descansar(tempoEmHoras: number): Promise<boolean> {
    return this.identificacao.classe.descansar(tempoEmHoras)
  }

}

export { Personagem }