import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListadoActividadComponent } from "./actividad/listado-actividad/listado-actividad.component";
import { NuevaActividadComponent } from "./actividad/nueva-actividad/nueva-actividad.component";
import { AdminComponent } from "./admin.component";
import { InicioComponent } from "./inicio/inicio.component";

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children : 
        [
            {
                path: '', component: InicioComponent
            },
            {
                path: 'actividad/nueva',
                component: NuevaActividadComponent
            },
            {
                path: 'actividad/listado',
                component: ListadoActividadComponent
            },
        ]
    }
  ];
@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}