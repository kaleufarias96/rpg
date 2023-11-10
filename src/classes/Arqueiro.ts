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
}

export { Arqueiro }