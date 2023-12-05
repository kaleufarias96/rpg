import { ArmaBase } from "./ArmaBase";

class Espada extends ArmaBase {
  constructor() {
    super({
      dano: 10,
      tipo: 'Espada'
    });
  }
  
  public mostrarArma(): void {
    console.log(`⚔️ Arma: ${this.tipo} - Dano: ${this.dano} ⚔️`)
  }
}

export { Espada };