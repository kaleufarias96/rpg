class ArmaBase {
  public tipo: string
  public dano: number
  
  constructor(valores: { tipo: string, dano: number }) {
    this.tipo = valores.tipo
    this.dano = valores.dano
  }
  
  public mostrarArma(): void {
    console.log(`Arma: ${this.tipo} - Dano: ${this.dano}`)
  }
}

export { ArmaBase }