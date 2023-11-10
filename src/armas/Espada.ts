import { ArmaBase } from "./ArmaBase";

class Espada extends ArmaBase {
  constructor() {
    super({
      dano: 10,
      tipo: 'Espada'
    });
  }
}

export { Espada };