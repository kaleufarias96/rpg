import { Principal } from "./Principal";
class Archer extends Principal {
    private stamina: number = 100;
    private Arma: string = "arco";
    private _dano: number = 65;
    private _defesa: number = 43;
}
export { Archer }