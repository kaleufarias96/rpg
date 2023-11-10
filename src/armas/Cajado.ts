import { ArmaBase } from "./ArmaBase";

class Cajado extends ArmaBase {
  constructor() {
    super({
      dano: 10,
      tipo: 'Cajado'
    });
  }
}

export { Cajado };