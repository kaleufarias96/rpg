import { Cajado } from "../armas/Cajado";
import { ClasseBase } from "./ClasseBase";

class Mago extends ClasseBase {
    constructor() {
        super({
            ataque: 30,
            defesa: 0,
            
            vida: 75,
            energia: 200,
            
            arma: new Cajado()
        })
    }
    
     public mostrarStatus(): void {
        console.log('🪄 -------  ||| ### ||| ------- 🪄')
        console.table({
            vida: this.vida,
            energia: this.energia,
            ataque: this.ataque,
            defesa: this.defesa,
        })
        console.log('🪄 -------  ||| ### ||| ------- 🪄')
    }
}

export { Mago }