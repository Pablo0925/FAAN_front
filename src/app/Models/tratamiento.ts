import { FichaMedica } from "./fichaMedica";
import { TipoTratamiento } from "./tipoTratamiento";

export class Tratamiento {
    idTratamiento!:     number;
    fechaTratamiento!:  Date;
    observaciones!:     string;
    estadoTratamiento!: string;
    tipoTratamiento!:   TipoTratamiento;
    fichaMedica!:       FichaMedica;
}