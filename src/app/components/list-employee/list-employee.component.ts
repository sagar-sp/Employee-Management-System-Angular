import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeListService } from "src/app/Services/employeeList.service";

@Component({
    selector : 'app-list-employee',
    templateUrl : './list-employee.component.html'
})
export class ListEmployeeComponent{
    employees: any[] =[];
    employeesid: any=""
    msg="";
    constructor(private employeeservice : EmployeeListService,
      private router : Router){
      this.getEmployees();
      // this.getEmployeeById();
    }
    getEmployees(){
      this.employeeservice.getEmployeeList()
      .subscribe((response:any)=>{
        this.employees = response.data;
        this.msg = response.message;
      })
    }
    onEdit(employeeId:any){
      this.router.navigate(['edit-employee', employeeId]);
    }
    
}