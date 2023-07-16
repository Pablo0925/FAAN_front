import { TipoAnimal } from "./tipoAnimal";

export interface RazaAnimal {
    idRazaAnimal: number;
    nombreRaza:   string;
    estadoRaza:   string;
    tipoAnimal:   TipoAnimal;
}