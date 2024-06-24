package com.example.student_service.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.student_service.models.Student;
import com.example.student_service.services.StudentService;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<Student> getAllStudent() {
        List<Student> listOfStudent = studentService.findAll();
        return listOfStudent;
    }

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student item) {      
        Student save = studentService.save(item); 
        return new ResponseEntity<>(save, HttpStatus.OK);
    }
    
    
}
