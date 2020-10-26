import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    menuPacientes: any[] = [
        {
            titulo: 'Pacientes',
            icono: 'mdi mdi-gauge',
            submenu: [
                { titulo: 'Ver turnos', url: 'turnos' },
                { titulo: 'Sacar turno', url: 'sacar-turno' },
                { titulo: 'Cancelar turno', url: 'cancelar-turno' },
                { titulo: 'Dejar reseña', url: 'resenia' }
            ]
        }
    ];

    menuProfesionales: any[] = [
        {
            titulo: 'Profesionales',
            icono: 'mdi mdi-gauge',
            submenu: [
                { titulo: 'Definir horarios', url: 'atender-pacientes' },
                { titulo: 'Ver turnos pendientes', url: 'atender-pacientes' },
                { titulo: 'Cancelar turno', url: 'atender-pacientes' },
                { titulo: 'Atender paciente', url: 'atender-pacientes' }
            ]
        }
    ];

    menuAdmin: any[] = [
        {
            titulo: 'Admin',
            icono: 'mdi mdi-gauge',
            submenu: [
                { titulo: 'Ver usuarios', url: 'usuarios' },
                { titulo: 'Agregar usuario', url: 'agregar-usuario' }
            ]
        }
    ];

    constructor() { }


}