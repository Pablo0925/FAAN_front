import { Persona } from "./persona";
import { Rol } from "./rol";

export class Usuario {
    idUsuario?: number;
    username!: string;
    password!: string;
    fotoPerfil?: string;
    estadoUsuario?: boolean;
    tokenPassword?: string;
    persona!: Persona;
    roles!: Rol[];
}

// USER SINGIN - Utility Types
export type usuarioLoginDTO = Pick<Usuario, 'username' | 'password'>