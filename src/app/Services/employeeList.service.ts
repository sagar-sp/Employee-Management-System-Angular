import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';
import { pipe } from "rxjs";
import {map} from 'rxjs/operators'; 

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
    getStates() {
        return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
        .pipe(
            map((response:any)=>{
                return response.states;
            })
        )
    }
    getDistricts(state_id:any){
        return this.http.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`);
    }
    getCenters(district_id:any){
            const todaysDate = moment().format('DD-MM-yyyy')
            return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${todaysDate}`)
        
    }
}