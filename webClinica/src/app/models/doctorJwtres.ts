export interface DoctorJwtres {
    datosDoctor: {
        _id: string,
        nombres: string,
        apellidos: string,
        telefono: string,
        especialidad: string,
        correo: string,
        password: string,

    }
    access_Token: string,
    expires_In: string,
}
