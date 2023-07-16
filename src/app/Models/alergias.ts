import { FichaMedica } from "./fichaMedica";
import { TipoAlergias } from "./tipoAlergias";

export interface Alergias {
    idAlergias:     number;
    fechaDeteccion: Date;
    observacion:    string;
    tipoAlergias:   TipoAlergias;
    fichaMedica:    FichaMedica;
}