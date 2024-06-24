package com.example.employee_service.dto;

public class ImageDto {

    private String id;
    private String name;
    private String type;
    private String minioUrl;

    public ImageDto(){

    }

    public ImageDto(String id, String name, String type, String minioUrl) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.minioUrl = minioUrl;
    }

    public String getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    public String getMinioUrl() {
        return minioUrl;
    }

    public void setMinioUrl(String minioUrl) {
        this.minioUrl = minioUrl;
    }

}
