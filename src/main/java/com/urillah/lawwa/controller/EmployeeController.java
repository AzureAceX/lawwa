package com.urillah.lawwa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urillah.lawwa.dto.EmployeeDTO;
import com.urillah.lawwa.model.Employee;
import com.urillah.lawwa.repository.EmployeeRepository;

@RestController
@RequestMapping("/employee")
class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepositoryObj;

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping(value = "/list")
	public List<Employee> getAll() {
		List<Employee> employees = new ArrayList<>();
		employeeRepositoryObj.findAll().forEach(employees::add);
		return employees;
	}

	@GetMapping(value = "/{employeeId}")
	public Optional<Employee> getById(@PathVariable("employeeId") Long employeeId) {
		return employeeRepositoryObj.findById(employeeId);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<Employee> create(@RequestBody EmployeeDTO employeeDto) {
		try {
			Employee employeeObj = new Employee();
			employeeObj.setFirstName(employeeDto.getFirstName());
			employeeObj.setLastName(employeeDto.getLastName());
			employeeObj.setEmail(employeeDto.getEmail());
			employeeObj.setAdmin(employeeDto.isAdmin());
			employeeObj.setUsername(employeeDto.getUsername());
			employeeObj.setPassword(employeeDto.getPassword());
			employeeObj.setPhoneNo(employeeDto.getPhoneNo());
			employeeObj.setRole(employeeDto.getRole());
			employeeObj.setDepartment(employeeDto.getDepartment());
			employeeObj.setEnabled(employeeDto.isEnabled());
		
			employeeRepositoryObj.save(employeeObj);


			return new ResponseEntity<>(employeeObj, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@DeleteMapping(value = "/{employeeId}")
	public ResponseEntity<HttpStatus> delete(@PathVariable("employeeId") Long employeeId) {
		try {
			employeeRepositoryObj.deleteById(employeeId);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	/*
	 * Employee Login
	 */

	@GetMapping(value = "/{username}/{password}")
	public Employee findByUsernameAndPassword(@PathVariable("username") String username, @PathVariable("password") String password) {
		
		Employee foundEmployee = new Employee();
		Optional<Employee> employee = employeeRepositoryObj.findByUsernameAndPassword(username, password);
		
		if(employee.isPresent()) {
			foundEmployee = employee.get();
		}
			return foundEmployee;
	}
}