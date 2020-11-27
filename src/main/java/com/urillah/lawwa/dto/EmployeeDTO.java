package com.urillah.lawwa.dto;

import lombok.Data;

@Data
public class EmployeeDTO {

	private long employeeId;
	private String email;
	private String firstName;
	private String lastName;
	private Long phoneNo;
	private String username;
	private String password;
	private boolean enabled;
	private boolean isAdmin;

}
