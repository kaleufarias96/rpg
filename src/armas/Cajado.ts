import { ArmaBase } from "./ArmaBase";

class Cajado extends ArmaBase {
  constructor() {
    super({
      dano: 10,
      tipo: 'Cajado'
    });
  }
  
  public mostrarArma(): void {
    console.log(`🪄 Arma: ${this.tipo} - Dano: ${this.dano} 🪄`)
  }
}

export { Cajado };