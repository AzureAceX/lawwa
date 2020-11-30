package com.urillah.lawwa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "employee")
@Data
public class Employee {

	@Id
	@Column(name = "employeeId", unique = true, nullable = false)
	private long employeeId;
	
	private String firstName;

	private String lastName;
	
	private String email;

	private long phoneNo;

	private String department;

	private String role;

	private String username;

	private String password;

	private boolean enabled;
	
	private boolean isAdmin;

}