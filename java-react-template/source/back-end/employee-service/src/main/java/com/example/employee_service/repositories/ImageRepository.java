package com.example.employee_service.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employee_service.models.Image;

public interface ImageRepository extends JpaRepository<Image, String> {

}
