import { ArmaBase } from "./ArmaBase";

class Arco extends ArmaBase {
  constructor() {
    super({
      dano: 10,
      tipo: 'Arco'
    });
  }
}

export { Arco };