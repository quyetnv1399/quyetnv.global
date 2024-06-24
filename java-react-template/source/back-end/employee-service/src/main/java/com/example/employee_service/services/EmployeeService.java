package com.example.employee_service.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.employee_service.dto.EmployeeDto;
import com.example.employee_service.dto.ImageDto;
import com.example.employee_service.managers.EmployeeManager;
import com.example.employee_service.models.Employee;
import com.example.employee_service.models.Image;
import com.example.employee_service.repositories.EmployeeRepository;
import com.example.employee_service.repositories.ImageRepository;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeRepository empRepo;

    @Autowired
    private ImageRepository imgRepo;

    @Override
    public List<Employee> getAll() {
        throw new UnsupportedOperationException("Unimplemented method 'getAll'");
    }

    @Override
    public Page<EmployeeDto> getAll(Pageable pageable, String query) {
        Page<Employee> employeePage;

        if(query == null || query.isEmpty()){
            employeePage = empRepo.findAll(pageable);
        }else{
            Specification<Employee> specification = EmployeeManager.search(query);
            employeePage = empRepo.findAll(specification, pageable);
        }

        return employeePage.map(this::convertToEmployeeDTO);
    }

    // @Override
    // public Page<Employee> search(String keyword, int page, int pageSize) {
    //     throw new UnsupportedOperationException("Unimplemented method 'search'");
    // }

    @Override
    public List<Employee> filter(String keyword) {
        throw new UnsupportedOperationException("Unimplemented method 'filter'");
    }

    public Employee testt123(){
        Employee employee = empRepo.findByIdWithImages("904db087-d73e-48ee-afc9-6e29ee38b236");
        return employee;
    }

    @Override
    public Employee findById(String id) {
        return empRepo.findById(id).get();
    }

    public EmployeeDto getEmployeeById(String id) {
        Employee employee = empRepo.findByIdWithImages(id);
        if (employee == null) {
            return null;
        }

        return convertToEmployeeDTO(employee);
    }

    private EmployeeDto convertToEmployeeDTO(Employee employee) {
        List<ImageDto> imageDTOs = employee.getImages().stream()
            .map(image -> new ImageDto(image.getId(), image.getName(), image.getType(), image.getMinioUrl()))
            .collect(Collectors.toList());

        return new EmployeeDto(
            employee.getId(),
            employee.getFirstName(),
            employee.getLastName(),
            employee.getGender(),
            employee.getBirthDate(),
            employee.getEmail(),
            employee.getContact(),
            employee.getAddress(),
            imageDTOs
        );
    }

    @Override
    public Employee add(Employee item) {
        return empRepo.save(item);
    }

    @Override
    public Optional<Employee> update(String id, Employee item) {
       
        return empRepo.findById(id)
        .map(employee -> {
            employee.setFirstName(item.getFirstName());
            employee.setLastName(item.getLastName());
            employee.setAddress(item.getAddress());
            employee.setBirthDate(item.getBirthDate());
            employee.setContact(item.getContact());
            employee.setEmail(item.getEmail());
            employee.setImageId(item.getImageId());
            employee.setGender(item.getGender());
            return empRepo.save(employee);
        });

    }

    @Override
    public void delete(String id) {
        Optional<Employee> employee = empRepo.findById(id);
        employee.ifPresent(emp -> empRepo.delete(emp));
    }
}
