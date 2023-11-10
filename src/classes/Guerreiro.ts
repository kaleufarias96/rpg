import { Espada } from "../armas/Espada";
import { ClasseBase } from "./ClasseBase";

class Guerreiro extends ClasseBase {
    constructor() {
        super({
            ataque: 20,
            defesa: 10,
            
            vida: 200,
            energia: 50,
            
            arma: new Espada()
        })
    }
}

export { Guerreiro }