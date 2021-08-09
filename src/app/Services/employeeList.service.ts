import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn : 'root' })
export class EmployeeListService{
    constructor(private http : HttpClient)
    {
        // this.getEmployeeList.subscribe((response:any)=>{
        //     console.log(response);
        // });
    }
    getEmployeeList(){
        return this.http.get('https://dummy.restapiexample.com/api/v1/employees')
    }
    createEmployee(data:any){
       return this.http.get('https://dummy.restapiexample.com/api/v1/create', data)
    }
    getEmployeeListById(id:any){
        return this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
    }
}