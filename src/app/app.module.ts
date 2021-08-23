import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CharOnly } from './directives/char-only.directive';

import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ContractEmployeeComponent } from './components/contract-employee/contract-employee.component';
import { ErrorComponent } from './components/error/error.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PayrollEmployeeComponent } from './components/payroll-employee/payroll-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from 'guards/auth.guard';


const appRoutes:Routes=[
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'home',
    component : ListEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'add-employee',
    component : AddEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'edit-employee/:empId',
    component: EditEmployeeComponent,
    canActivate: [AuthGuard],
  },
  {
    path : '**',
    component : ErrorComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ContractEmployeeComponent,
    ErrorComponent,
    ListEmployeeComponent,
    NavbarComponent,
    PayrollEmployeeComponent,
    EditEmployeeComponent,
    CharOnly,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
