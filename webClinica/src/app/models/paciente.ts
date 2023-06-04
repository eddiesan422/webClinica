export interface Paciente{
_id?: string,
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
cita:Date,
correo: string,
password: string,
}
