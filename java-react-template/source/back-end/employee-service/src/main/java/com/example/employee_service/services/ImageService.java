package com.example.employee_service.services;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.employee_service.models.Employee;
import com.example.employee_service.models.Image;
import com.example.employee_service.repositories.ImageRepository;

import io.minio.GetPresignedObjectUrlArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.http.Method;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;
    
    @Autowired EmployeeService employeeService;

    @Autowired
    private MinioClient minioClient;

    @Value("${minio.bucket-name}")
    private String bucketName;

    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public Image upload(MultipartFile file, String employeeId) throws Exception {

        String objectName = file.getOriginalFilename();
        InputStream inputStream = file.getInputStream();

        minioClient.putObject(
                PutObjectArgs.builder().bucket(bucketName).object(objectName).stream(
                        inputStream, file.getSize(), -1)
                        .contentType(file.getContentType())
                        .build());

        String url = minioClient.getPresignedObjectUrl(
                GetPresignedObjectUrlArgs.builder().method(Method.GET).bucket(bucketName).object(objectName).build());

        Employee employee = employeeService.findById(employeeId);

        Image image = new Image();
        image.setName(objectName);
        image.setType(file.getContentType());
        image.setEmployee(employee);
        image.setMinioUrl(url);

        return imageRepository.save(image);
    }
}
