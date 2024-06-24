package com.example.employee_service.managers;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import com.example.employee_service.models.Employee;

@Component
public class EmployeeManager {

     public static Specification<Employee> search(String query) {
        return (root, criteriaQuery, criteriaBuilder) -> {
            if (query == null || query.isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.or(
                criteriaBuilder.equal(root.get("firstName"), query),
                criteriaBuilder.equal(root.get("lastName"), query)
            );
        };
    }
}
