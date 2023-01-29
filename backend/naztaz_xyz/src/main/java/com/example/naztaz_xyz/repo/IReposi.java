package com.example.naztaz_xyz.repo;

import com.example.naztaz_xyz.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IReposi extends JpaRepository<Employee,Long> {
}
