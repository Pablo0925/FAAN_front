
import { TipoVacuna } from "./tipoVacuna";
import { ControlAnimal } from "./controlAnimal";
export class Vacuna {
    idVacuna!: number;
    fechaVacuna!: Date;
    fechaProximaVacuna!: Date;
    observaciones?: string;
    estadoVacuna?: string;
    tipoVacuna?: TipoVacuna;
    controlAnimal?: ControlAnimal;
}