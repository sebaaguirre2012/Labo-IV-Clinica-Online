import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { TurnosComponent } from './turnos/turnos.component';
import { SacarTurnoComponent } from './sacar-turno/sacar-turno.component';
import { CancelarTurnoComponent } from './cancelar-turno/cancelar-turno.component';
import { ReseniaComponent } from './resenia/resenia.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent,
        TurnosComponent,
        SacarTurnoComponent,
        CancelarTurnoComponent,
        ReseniaComponent,
        UsuariosComponent,
        AgregarUsuarioComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule
    ],
    exports: [
        DashboardComponent,
        PagesComponent,
        TurnosComponent,
        SacarTurnoComponent,
        CancelarTurnoComponent,
        ReseniaComponent,
        UsuariosComponent,
        AgregarUsuarioComponent
    ]
})
export class PagesModule { }
