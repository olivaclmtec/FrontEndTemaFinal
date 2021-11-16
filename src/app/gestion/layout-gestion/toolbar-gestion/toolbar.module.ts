import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';
import { ClickOutsideModule } from 'src/@fury/shared/click-outside/click-outside.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ScrollbarModule } from 'src/@fury/shared/scrollbar/scrollbar.module';
import { ToolbarNotificationsGestionComponent } from './toolbar-notifications/toolbar-notifications.component';
import { ToolbarSidenavMobileToggleGestionComponent } from './toolbar-sidenav-mobile-toggle/toolbar-sidenav-mobile-toggle.component';
import { ToolbarUserGestionComponent } from './toolbar-user/toolbar-user.component';

import {ToolbarGestionComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ScrollbarModule,
    FormsModule,
    ClickOutsideModule,
    FuryCardModule
  ],
  declarations: [
    ToolbarGestionComponent,
    ToolbarUserGestionComponent,
    ToolbarNotificationsGestionComponent,
    ToolbarSidenavMobileToggleGestionComponent
  ],
  exports: [ToolbarGestionComponent]
})
export class ToolbarGestionModule {
}
