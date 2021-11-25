import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { LoadingIndicatorModule } from 'src/@fury/shared/loading-indicator/loading-indicator.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { NuevaActividadComponent } from './nueva-actividad/nueva-actividad.component';
import { ListadoActividadComponent } from './listado-actividad/listado-actividad.component';
import { CardsComponent } from 'src/app/pages/components/cards/cards.component';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,
    FurySharedModule,
    FuryCardModule
  ],
  declarations: [NuevaActividadComponent, ListadoActividadComponent]
})
export class ActividadModule {
}
