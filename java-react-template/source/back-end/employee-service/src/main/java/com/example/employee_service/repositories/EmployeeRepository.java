package com.example.employee_service.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.employee_service.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String>, JpaSpecificationExecutor<Employee>{

    @Query("SELECT e FROM Employee e LEFT JOIN FETCH e.images WHERE e.id = :id")
    Employee findByIdWithImages(@Param("id") String id);

}
