import { ClasseBase } from './classes/ClasseBase'

class Identificacao {
  nome: string
  raca: string
  classe: ClasseBase
  
  constructor(valores: { nome: string, raca: string, classe: ClasseBase }) {
    this.nome = valores.nome
    this.raca = valores.raca
    this.classe = valores.classe
  }
}

export { Identificacao }