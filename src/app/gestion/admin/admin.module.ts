import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { BackdropModule } from 'src/@fury/shared/backdrop/backdrop.module';
import { LoadingIndicatorModule } from 'src/@fury/shared/loading-indicator/loading-indicator.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ConfigPanelModule } from 'src/app/layout/config-panel/config-panel.module';
import { NavigationModule } from 'src/app/layout/navigation/navigation.module';
import { QuickpanelModule } from 'src/app/layout/quickpanel/quickpanel.module';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { FooterGestionModule } from '../layout-gestion/footer-gestion/footer.module';
import { ToolbarGestionModule } from '../layout-gestion/toolbar-gestion/toolbar.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
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

    //Incluidos
    FooterGestionModule,
    ToolbarGestionModule,

    //Routing
    AdminRoutingModule,

  ],
  declarations: [AdminComponent]
})
export class AdminModule {
}
