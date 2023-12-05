import { Arco } from "../armas/Arco";
import { ClasseBase } from "./ClasseBase";

class Arqueiro extends ClasseBase {
    constructor() {
        super({
            ataque: 25,
            defesa: 0,

            vida: 100,
            energia: 100,

            arma: new Arco()
        })
    }

    public mostrarStatus(): void {
        console.log('🏹 -------  ||| ### ||| ------- 🏹')
        console.table({
            vida: this.vida,
            energia: this.energia,
            ataque: this.ataque,
            defesa: this.defesa,
        })
        console.log('🏹 -------  ||| ### ||| ------- 🏹')
    }
}

export { Arqueiro }