package com.example.student_service.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.student_service.models.Student;

public interface StudentRepository extends JpaRepository<Student, String>{

}
