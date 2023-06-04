export interface AdminJwtres {
    datosAdmin: {
        _id: string,
        nombres: string,
        apellidos: string,
        correo: string,
        password: string,
       
    }
    access_Token: string,
    expires_In: string,
}
