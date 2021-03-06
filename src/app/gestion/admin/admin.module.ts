import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { BackdropModule } from 'src/@fury/shared/backdrop/backdrop.module';
import { LoadingIndicatorModule } from 'src/@fury/shared/loading-indicator/loading-indicator.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ConfigPanelModule } from 'src/app/layout/config-panel/config-panel.module';
import { FooterModule } from 'src/app/layout/footer/footer.module';
import { NavigationModule } from 'src/app/layout/navigation/navigation.module';
import { QuickpanelModule } from 'src/app/layout/quickpanel/quickpanel.module';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { ToolbarModule } from 'src/app/layout/toolbar/toolbar.module';
import { CardsComponent } from 'src/app/pages/components/cards/cards.component';
import { ComponentsModule } from 'src/app/pages/components/components.module';
import { ActividadModule } from './actividad/actividad.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InicioModule } from './inicio/inicio.module';

@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,
    FurySharedModule,

    // Core
    QuickpanelModule,
    SidenavModule,
    BackdropModule,
    ConfigPanelModule,
    NavigationModule,
    FooterModule,
    ToolbarModule,

    InicioModule,
    ActividadModule,

    //Routing
    AdminRoutingModule,

  ],
  declarations: [AdminComponent]
})
export class AdminModule {
}
