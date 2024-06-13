package com.example.bookservice.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/v1/books")
public class HomeController {

    @GetMapping()
    public String getMethodName() {
        return "Hello World";
    }
    
}
