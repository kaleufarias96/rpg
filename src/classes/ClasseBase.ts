import { ArmaBase } from "../armas/ArmaBase"

abstract class ClasseBase {
  public vida: number
  public energia: number

  public ataque: number
  public defesa: number

  public arma: ArmaBase

  constructor(values: { vida: number, energia: number, ataque: number, defesa: number, arma: ArmaBase }) {
    this.vida = values.vida;
    this.energia = values.energia;
    this.ataque = values.ataque;
    this.defesa = values.defesa;
    this.arma = values.arma;
  }

  public abstract mostrarStatus() : void

  private async esperaSegundos(tempo: number) {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, tempo * 1000)
    })
  }

  private continuaSePassarNaProbabilidade(probabilidade: number, continua: () => void) {
    const random = 100 * Math.random()
    if (random <= probabilidade) {
      continua()
    }
  }

  private ganharVida(params: GanhoComProbabilidade) {
    this.continuaSePassarNaProbabilidade(params.probabilidade, () => {
      console.log('Ganhou vida')
      this.vida += params.valor
      console.log(`energia: +${params.valor}`)
    })
  }

  private ganharEnergia(params: GanhoComProbabilidade) {
    this.continuaSePassarNaProbabilidade(params.probabilidade, () => {
      console.log('Ganhou energia')
      this.energia += params.valor
      console.log(`energia: +${params.valor}`)
    })
  }

  private ganharAtaque(params: GanhoComProbabilidade) {
    this.continuaSePassarNaProbabilidade(params.probabilidade, () => {
      console.log('Ganhou ataque')
      this.ataque += params.valor
      console.log(`ataque: +${params.valor}`)
    })
  }

  private ganharDefesa(params: GanhoComProbabilidade) {
    this.continuaSePassarNaProbabilidade(params.probabilidade, () => {
      console.log('Ganhou defesa')
      this.defesa += params.valor
      console.log(`defesa: +${params.valor}`)
    })
  }

  private perderEnergia(params: GanhoComProbabilidade) {
    this.continuaSePassarNaProbabilidade(params.probabilidade, () => {
      console.log('Perdeu energia')
      this.energia -= params.valor
      console.log(`energia: -${params.valor}`)
    })
  }

  private seMachucar(params: GanhoComProbabilidade) {
    this.continuaSePassarNaProbabilidade(params.probabilidade, () => {
      console.log('Perdeu vida (se machucou)')
      this.vida -= params.valor
      console.log(`vida: -${params.valor}`)
    })
  }

  public async treinarAtaque(tempo: number) {
    for (let i = 0; i < tempo; i++) {
      if (this.energia < 1 || this.vida < 5) {
        console.log('Você não tem energia ou vida para treinar. Descanse.')
        break
      }

      console.log('Treinando ataque...')

      await this.esperaSegundos(1)

      this.perderEnergia({ probabilidade: 100, valor: 1 })
      this.ganharAtaque({ probabilidade: 50, valor: 1 })
      this.seMachucar({ probabilidade: 25, valor: 1 })

      if (this.energia < 1) {
        console.log('Você não tem energia para treinar')
        break
      }

      if (this.vida < 5) {
        console.log('Você não tem vida para treinar')
        break
      }
    }
    console.log('Treino concluído')
  }

  public async treinarDefesa(tempo: number) {
    for (let i = 0; i < tempo; i++) {
      if (this.energia < 1 || this.vida < 5) {
        console.log('Você não tem energia ou vida para treinar. Descanse.')
        break
      }

      console.log('Treinando defesa...')

      await this.esperaSegundos(1)

      this.perderEnergia({ probabilidade: 100, valor: 1 })
      this.ganharDefesa({ probabilidade: 50, valor: 1 })
      this.seMachucar({ probabilidade: 25, valor: 1 })

      if (this.energia < 1) {
        console.log('Você não tem energia para treinar')
        break
      }

      if (this.vida < 5) {
        console.log('Você não tem vida para treinar')
        break
      }
    }
    console.log('Treino concluído')
  }

  public async descansar(tempo: number) {
    for (let i = 0; i < tempo; i++) {
      console.log('Descançando...')

      await this.esperaSegundos(1)

      this.ganharVida({ probabilidade: 100, valor: 1 })
      this.ganharEnergia({ probabilidade: 100, valor: 1 })
    }
    console.log('Descanço concluído')
  }
}


interface GanhoComProbabilidade {
  probabilidade: number,
  valor: number
}


export { ClasseBase }