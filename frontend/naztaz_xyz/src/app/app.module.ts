import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmpComponent } from './employee/create-emp/create-emp.component';
import { AllEmpComponent } from './employee/all-emp/all-emp.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeService } from './services/employe.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmpComponent,
    AllEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
