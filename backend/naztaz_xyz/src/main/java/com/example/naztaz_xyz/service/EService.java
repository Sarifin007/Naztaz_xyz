package com.example.naztaz_xyz.service;

import com.example.naztaz_xyz.entity.Employee;
import com.example.naztaz_xyz.repo.IReposi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EService {
    @Autowired
    IReposi repo;

    public void empSave( Employee e){
       repo.save(e);
    }

}
