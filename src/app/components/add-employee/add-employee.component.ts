import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeeListService } from "src/app/Services/employeeList.service";
import { CharOnly } from "src/app/validators/char-only.validator";

@Component({
    selector : 'app-add-employee',
    templateUrl : './add-employee.component.html',
    styleUrls : ['./add-employee.component.css']
})
export class AddEmployeeComponent{
    employeeForm:any;
    states:any[] = [];
    district:any[] = [];
    centers:any[] = [];

    constructor(private employeeService : EmployeeListService ){
        this.employeeForm = new FormGroup({
            name : new FormControl(null, [Validators.required, Validators.minLength(10),CharOnly]),
            age : new FormControl(null, [Validators.required,Validators.min(27),Validators.max(35)]),
            salary : new FormControl(null, Validators.required),
            state : new FormControl(null, Validators.required),
            district : new FormControl(null, Validators.required),
            centers : new FormControl(null, Validators.required)
        });
        
        this.employeeService.getStates()
        .subscribe((response:any) =>{
            this.states=response;
        })

        this.employeeForm.controls.state.valueChanges
        .subscribe((response:any) => {
            this.employeeService.getDistricts(response)
            .subscribe((response:any)=>{
                this.district = response.districts;
            })
        })

        this.employeeForm.controls.district.valueChanges
        .subscribe((response:any)=>{
            this.employeeService.getCenters(response)
            .subscribe((response:any)=>{
                this.centers = response.sessions;
            })
        })
    }
    addEmployee()
    {
        if (this.employeeForm.invalid) {
            return;
        }
        this.employeeService.createEmployee(this.employeeForm.value)
        .subscribe(response =>{
        })
    }
}