package com.example.employee_service.dto;

import java.time.LocalDate;
import java.util.List;

public class EmployeeDto {

    private String id;
    private String firstName;
    private String lastName;
    private Boolean gender;
    private LocalDate birthDate;
    private String email;
    private int contact; 
    private String address;
    private List<ImageDto> images;

    public EmployeeDto() {

    }

    public EmployeeDto(String id, String firstName, String lastName, Boolean gender, LocalDate birthDate, String email,
            int contact, String address, List<ImageDto> images) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDate = birthDate;
        this.email = email;
        this.contact = contact;
        this.address = address;
        this.images = images;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Boolean getGender() {
        return gender;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getContact() {
        return contact;
    }

    public void setContact(int contact) {
        this.contact = contact;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<ImageDto> getImages() {
        return images;
    }

    public void setImages(List<ImageDto> images) {
        this.images = images;
    }

}
