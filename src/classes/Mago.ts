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
}

export { Mago }