package com.example.student.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/v1/students")

public class StudentController {
    @GetMapping()
    public String getMethodName() {
        return "Student";
    }
    
}
