import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { LoadingIndicatorModule } from 'src/@fury/shared/loading-indicator/loading-indicator.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { InicioComponent } from './inicio.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,
    FurySharedModule,

  ],
  declarations: [InicioComponent]
})
export class InicioModule {
}
