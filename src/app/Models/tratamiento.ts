import { FichaMedica } from "./fichaMedica";
import { TipoTratamiento } from "./tipoTratamiento";

export interface Tratamiento {
    idTratamiento:     number;
    fechaTratamiento:  Date;
    observaciones:     string;
    estadoTratamiento: string;
    tipoTratamiento:   TipoTratamiento;
    fichaMedica:       FichaMedica;
}