class ArmaBase {
  tipo: string
  dano: number
  
  constructor(valores: { tipo: string, dano: number }) {
    this.tipo = valores.tipo
    this.dano = valores.dano
  }
}

export { ArmaBase }