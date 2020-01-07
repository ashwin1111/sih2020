import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetAppointmentPageRoutingModule } from './get-appointment-routing.module';

import { GetAppointmentPage } from './get-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetAppointmentPageRoutingModule
  ],
  declarations: [GetAppointmentPage]
})
export class GetAppointmentPageModule {}
