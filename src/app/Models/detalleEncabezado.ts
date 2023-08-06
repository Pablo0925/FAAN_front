import { Animal } from "./animal";
import { EncabezadoAdopcion } from "./encabezadoAdopcion";

export class DetalleAdopcion {
    idAdopcion?: number;
    observacion?: string;
    documento?: string;
    encabezadoAdopcion?: EncabezadoAdopcion;
    animal?: Animal;
}