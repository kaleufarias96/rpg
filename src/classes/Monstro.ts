import { Cajado } from "../armas/Cajado";
import { ClasseBase } from "./ClasseBase";

class Monstro extends ClasseBase {
    constructor(params: ConstructorParameters<typeof ClasseBase>[0]) {
        super(params)
    }
    
     public mostrarStatus(): void {
        console.log('👹 -------  ||| ### ||| ------- 👹')
        console.table({
            vida: this.vida,
            energia: this.energia,
            ataque: this.ataque,
            defesa: this.defesa,
        })
        console.log('👹 -------  ||| ### ||| ------- 👹')
    }
}

export { Monstro }