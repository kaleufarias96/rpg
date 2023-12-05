import { ArmaBase } from "./ArmaBase";

class Arco extends ArmaBase {
  constructor() {
    super({
      dano: 10,
      tipo: 'Arco'
    });
  }
  
  public mostrarArma(): void {
    console.log(`🏹 Arma: ${this.tipo} - Dano: ${this.dano} 🏹`)
  }
}

export { Arco };