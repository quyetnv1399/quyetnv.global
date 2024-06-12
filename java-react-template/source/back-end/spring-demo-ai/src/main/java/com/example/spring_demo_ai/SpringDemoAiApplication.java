package com.example.spring_demo_ai;

import java.io.IOException;

import org.opencv.core.Core;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;

@SpringBootApplication
public class SpringDemoAiApplication {
	public static void main(String[] args) throws StreamWriteException, DatabindException, IOException {
		System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
		SpringApplication.run(SpringDemoAiApplication.class, args);
	}
}
