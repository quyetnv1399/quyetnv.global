package com.example.employee_service.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.employee_service.dto.EmployeeDto;
import com.example.employee_service.models.Employee;
import com.example.employee_service.services.EmployeeService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeService empServie;

    @GetMapping("/employee")
    public List<Employee> getAllEmployee() {
        List<Employee> listOfEmployees = empServie.getAll();
        return listOfEmployees;
    }

    @GetMapping("/employee/test")
    public Employee getTestEmployee() {
        Employee listOfEmployees = empServie.testt123();
        return listOfEmployees;
    }

    @GetMapping("employee/{id}")
    public EmployeeDto findOneEmployee(@PathVariable String id) {
        EmployeeDto employeeDto = empServie.getEmployeeById(id);
        return employeeDto;
    }

    @GetMapping("employee/{page}/{pageSize}")
    public ResponseEntity<Page<EmployeeDto>> getAllEmployee(@PathVariable("page") int page, @PathVariable("pageSize") int pageSize, @RequestParam(required = false) String q) {
       try {
            Pageable pageable = PageRequest.of(page, pageSize);
            Page<EmployeeDto> employee = empServie.getAll(pageable, q);
            return new ResponseEntity<>(employee, HttpStatus.OK);
       } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

    @PostMapping("/employee")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee item) {      
        try {
            Employee employee = empServie.add(item); 
            return new ResponseEntity<>(employee, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable String id, @RequestBody Employee item) {
        try {
            Optional<Employee> employee = empServie.update(id, item);

            if(employee.isPresent()){
                return new ResponseEntity<>(employee.get(), HttpStatus.OK);
            }else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("employee/{id}")
    public void deleteEmployee(@PathVariable String id) {
        empServie.delete(id);
    }
    
}
