import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListService } from 'src/app/Services/employeeList.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employeeDetails:any;
  editForm:any;

  constructor(
    private employeeService : EmployeeListService,
    private activateRoute : ActivatedRoute,
    private router : Router
  )
  {
    this.editForm = new FormGroup({
      name : new FormControl(),
      salary : new FormControl(),
      age : new FormControl()
    });

    this.activateRoute.paramMap
    .subscribe(response=>{
      const employeeId = response.get('empId');
      this.getEmployeeDetails(employeeId);
      }
    )
  }
  editEmployee(){
    alert("edit");
  }
  getEmployeeDetails(id:any)
  {
    this.employeeService.getEmployeeListById(id).
    subscribe((res:any)=>
    {// console.log(res);
      this.employeeDetails = res.data;
      console.log(this.employeeDetails);
    })
  }

  goto()
  {
    this.router.navigate(['edit-employee', 10])
  }
  
}
