import { FichaMedica } from "./fichaMedica";
import { TipoEnfermedad } from "./tipoEnfermedad";

export class Enfermedad {
    idEnfermedad!:     number;
    fechaEnfermedad!:  Date;
    observaciones!:    string;
    estadoEnfermedad!: string;
    tipoEnfermedad!:   TipoEnfermedad;
    fichaMedica!:      FichaMedica;
}