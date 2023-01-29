package com.example.naztaz_xyz.controller;

import com.example.naztaz_xyz.entity.Employee;
import com.example.naztaz_xyz.repo.IReposi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class EController {


    @Autowired
    IReposi iReposi;

    @GetMapping("/all")
    public List<Employee> getAll() {
        return iReposi.findAll();
    }

    @PostMapping("/save")
    public  Employee save(@RequestBody Employee employee){
        return iReposi.save(employee);
    }
}
