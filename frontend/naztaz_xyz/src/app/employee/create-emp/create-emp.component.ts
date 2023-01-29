import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  constructor(private empSer:EmployeService) { }

  ngOnInit(): void {
  }
  onEmpCre(emp:Employee){
    this.empSer.createemployee(emp).subscribe((result)=>{
      console.log(result);
      
    })

   
  }

}
