import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl ='http://localhost:8080/api'

  constructor(private httpc:HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpc .get<Employee[]>(this.baseUrl+"/") 
  }

  createemployee(emp:Employee) {
    return this.httpc.post(this.baseUrl + "/save", emp);
  }

}
