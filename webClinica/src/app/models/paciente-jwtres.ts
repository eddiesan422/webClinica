export interface Pacientejwtres {
    datosPaciente: {
        _id: string,
        nombres: string,
        apellidos: string,
        edad: number,
        telefono: number,
        historial: string,
        medicina:{
            medicinaDescripcion:{
                nombre: string,
                descripcion: string,
                precio: number,
                cantidad: number,
            }
        },
        correo: string,
        password: string,

    }
    access_Token: string,
    expires_In: string,
}
