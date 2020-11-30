package com.urillah.lawwa.dto;

import lombok.Data;

@Data
public class EmployeeDTO {

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
