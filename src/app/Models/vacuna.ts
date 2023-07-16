import { FichaMedica } from "./fichaMedica";
import { TipoVacuna } from "./tipoVacuna";

export interface Vacuna {
    idVacuna: number;
    fechaVacuna: Date;
    observaciones: string;
    estadoVacuna: string;
    tipoVacuna: TipoVacuna;
    fichaMedica: FichaMedica;
}