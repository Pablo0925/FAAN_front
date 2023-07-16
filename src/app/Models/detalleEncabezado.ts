import { Animal } from "./animal";
import { EncabezadoAdopcion } from "./encabezadoAdopcion";

export interface DetalleAdopcion {
    idAdopcion: number;
    observacion: string;
    documento: string;
    encabezadoAdopcioin: EncabezadoAdopcion;
    animal: Animal;
}