import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HeaderComponentt } from './shared/header/header.component';

import { FooterComponent } from './shared/footer/footer.component';
import { ChatDashComponent } from './pages/chat-dash/chat-dash.component';
import { PerfilDashComponent } from './pages/perfil-dash/perfil-dash.component';
import { ContactoDashComponent } from './pages/contacto-dash/contacto-dash.component';





@NgModule({
  declarations: [
    DashboardLayoutComponent,
    FooterComponent,
    HeaderComponentt,
    ChatDashComponent,
    PerfilDashComponent,
    ContactoDashComponent,


  ],

  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
