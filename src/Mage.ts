import { Principal } from "./Principal";
import { Arma } from "./Arma";

class Mage extends Principal {
    private mana: number = 100;
    private Arma: string = "staff";
    private _dano: number = 95;
    private _defesa: number = 25;
}

export { Mage } 