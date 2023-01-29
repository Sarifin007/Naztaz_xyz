import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-all-emp',
  templateUrl: './all-emp.component.html',
  styleUrls: ['./all-emp.component.css']
})
export class AllEmpComponent implements OnInit {

  employees?:Employee[];

  constructor(private empSer:EmployeService) { }

  ngOnInit(): void {
    this.listEmployee();
  }

  listEmployee(){
    this.empSer.getEmployeeList().subscribe(
      data =>{
        this.employees=data;
      }
    )
  }
}
