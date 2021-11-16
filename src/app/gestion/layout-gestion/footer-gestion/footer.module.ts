import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FooterGestionComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [FooterGestionComponent],
  exports: [FooterGestionComponent]
})
export class FooterGestionModule {
}
