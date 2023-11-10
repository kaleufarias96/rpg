class Arma {
  nome: string = '';
  tipo?: string;
  constructor(
    public nivel: number,
    public dano: number,
    private _durabilidade: number,
  ) { }
}

export { Arma }