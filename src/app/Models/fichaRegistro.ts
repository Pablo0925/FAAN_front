import { Persona } from "./persona";
import { SituacionIngreso } from "./situacionIngreso";

export class FichaRegistro {
    idFichaRegistro?: number;
    descripcionFichaRegistro?: string;
    situacionIngreso?: SituacionIngreso;
    persona?: Persona
}
