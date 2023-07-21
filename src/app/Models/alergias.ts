import { FichaMedica } from "./fichaMedica";
import { TipoAlergias } from "./tipoAlergias";

export class Alergias {
    idAlergias!:     number;
    fechaDeteccion!: Date;
    observaciones!:    string;
    tipoAlergias!:   TipoAlergias;
    fichaMedica!:    FichaMedica;
}