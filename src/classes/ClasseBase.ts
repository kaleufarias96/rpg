import { ArmaBase } from "../armas/ArmaBase"

class ClasseBase {
  vida: number
  energia: number

  ataque: number
  defesa: number

  arma: ArmaBase

  constructor(values: { vida: number, energia: number, ataque: number, defesa: number, arma: ArmaBase }) {
    this.vida = values.vida;
    this.energia = values.energia;
    this.ataque = values.ataque;
    this.defesa = values.defesa;
    this.arma = values.arma;
  }

  mostrarStatus() {
    console.log('=======================================================')
    console.table({
      vida: this.vida,
      energia: this.energia,
      ataque: this.ataque,
      defesa: this.defesa,
    })
    console.log('=======================================================')
  }

  treinarAtaque(tempo: number) {
    return new Promise<boolean>((resolve) => {
      if (this.energia < 1 || this.vida < 5) {
        console.log('Você não tem energia ou vida para treinar. Descanse.')
        resolve(false)
        return
      }
      
      console.log('Treinando ataque...')

      let treinos = 0

      const treinar = () => {
        setTimeout(() => {
          console.log(`... energia - 1`)
          this.energia -= 1
          
          const random = 100 * Math.random()
          
          if (random < 25) {
            console.log('Você se machucou')
            this.vida -= 1
          }
          
          if (random > 50) {
            console.log(`... ataque + 1`)
            this.ataque += 1
          } else {
            console.log(`... treinando ...`)
          }
          
          treinos += 1
          
          if (this.energia < 1) {
            console.log('Você não tem energia para treinar')
            resolve(false)
            return
          }
          
          if (this.vida < 5) {
            console.log('Você não tem vida para treinar')
            resolve(false)
            return
          }
          
          if (treinos < tempo) {
            treinar()
          }
          
          if (treinos === tempo) {
            console.log('Treino concluído')
            resolve(true)
          }
        }, 1000)
      }

      treinar()
    })
  }

  treinarDefesa(tempo: number) {
    return new Promise<boolean>((resolve) => {
      if (this.energia < 1 || this.vida < 5) {
        console.log('Você não tem energia ou vida para treinar. Descanse.')
        resolve(false)
        return
      }
      
      console.log('Treinando defesa...')

      let treinos = 0

      const treinar = () => {
        setTimeout(() => {
          console.log(`... energia - 1`)
          this.energia -= 1
          
          const random = 100 * Math.random()
          
          if (random < 25) {
            console.log('Você se machucou')
            this.vida -= 1
          }
          
          if (random > 50) {
            console.log(`... defesa + 1`)
            this.defesa += 1
          } else {
            console.log(`... treinando ...`)
          }
          
          treinos += 1
          
          if (this.energia < 1) {
            console.log('Você não tem energia para treinar')
            resolve(false)
            return
          }
          
          if (this.vida < 5) {
            console.log('Você não tem vida para treinar')
            resolve(false)
            return
          }
          
          if (treinos < tempo) {
            treinar()
          }
          
          if (treinos === tempo) {
            console.log('Treino concluído')
            resolve(true)
          }
        }, 1000)
      }

      treinar()
    })
  }

  descansar(tempo: number) {
    return new Promise<boolean>((resolve) => {
      console.log('Descançando...')

      let treinos = 0

      const treinar = () => {
        setTimeout(() => {
          console.log(`... energia + 1`)
          console.log(`... vida + 1`)

          this.energia += 1
          this.vida += 1

          treinos += 1
          
          if (treinos < tempo) {
            treinar()
            
          } else {
            resolve(true)
          }
        }, 1000)
      }

      treinar()
    })
  }
}

export { ClasseBase }