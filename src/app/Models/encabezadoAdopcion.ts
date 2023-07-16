import { Persona } from "./persona";

export interface EncabezadoAdopcion {
    idEncabezadoAdopcion: number;
    fechaAdopcion: Date;
    observacion: string;
    persona: Persona;
}
