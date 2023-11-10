import { menuPersonagem } from "./src/menu/menu-personagem";
import { menuInicial } from "./src/menu/menu-inicial";

const personagem = menuInicial();

menuPersonagem(personagem!);