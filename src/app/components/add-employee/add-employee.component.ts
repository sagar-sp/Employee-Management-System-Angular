import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeeListService } from "src/app/Services/employeeList.service";

@Component({
    selector : 'app-add-employee',
    templateUrl : './add-employee.component.html',
    styleUrls : ['./add-employee.component.css']
})
export class AddEmployeeComponent{
    employeeForm:any;
    constructor(private employeeService : EmployeeListService ){
        this.employeeForm = new FormGroup({
            name : new FormControl(null, Validators.required),
            age : new FormControl(null, Validators.required),
            salary : new FormControl(null, Validators.required)
        })
    }
    addEmployee(){
        if (this.employeeForm.invalid) {
            return;
        }
        this.employeeService.createEmployee(this.employeeForm.value)
        .subscribe(response =>{
        })
    }

}