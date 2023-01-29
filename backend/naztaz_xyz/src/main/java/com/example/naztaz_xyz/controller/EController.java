package com.example.naztaz_xyz.controller;

import com.example.naztaz_xyz.entity.Employee;
import com.example.naztaz_xyz.repo.IReposi;
import com.example.naztaz_xyz.service.EService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class EController {

    @Autowired
    EService service;

    @Autowired
    IReposi iReposi;

    @GetMapping("")
    public List<Employee> getAll() {
        return iReposi.findAll();
    }

    @PostMapping("/save")
    public  Employee save(@RequestBody Employee employee){
        return iReposi.save(employee);
    }
}
