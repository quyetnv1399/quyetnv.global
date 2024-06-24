package com.example.student_service.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student_service.models.Student;
import com.example.student_service.repositories.StudentRepository;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Optional<Student> findById(String id) {
        return studentRepository.findById(id);
    }

    public Student save(Student item) {
        return studentRepository.save(item);
    }

    public void delete(Student item) {
        studentRepository.delete(item);
    }
}
