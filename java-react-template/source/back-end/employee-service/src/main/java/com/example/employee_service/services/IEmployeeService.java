package com.example.employee_service.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.employee_service.dto.EmployeeDto;
import com.example.employee_service.models.Employee;

public interface IEmployeeService {

    List<Employee> getAll();

    Page<EmployeeDto> getAll(Pageable pageable, String keyword);

    // Search all
    // Page<Employee> search(String keyword, int page, int pageSize);

    List<Employee> filter(String keyword);

    Employee findById(String id);

    Employee add(Employee item);

    Optional<Employee> update(String id, Employee item);

    void delete(String id);
}
