import { FichaMedica } from "./fichaMedica";
import { FichaRegistro } from "./fichaRegistro";
import { Fundacion } from "./fundacion";
import { RazaAnimal } from "./razaAnimal";

export interface Animal {
    idAnimal:      number;
    nombreAnimal:  string;
    placaAnimal: string;
    fotoAnimal:    string;
    edadAnimal:    number;
    estadoAnimal:  string;
    razaAnimal:    RazaAnimal;
    fichaRegistro: FichaRegistro;
    fichaMedica:   FichaMedica;
    fundacion:     Fundacion;
}
