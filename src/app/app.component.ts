import { Component } from '@angular/core';
import { EmployeeListService } from './Services/employeeList.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  // getEmployeeById(){
  //   this.employeeservice.getEmployeeListById(1)
  //   .subscribe((res:any)=>{
  //     this.employeesid = res.data;
  //   }) 
  // }

}
