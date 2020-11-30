package com.urillah.lawwa.dto;

import lombok.Data;

@Data
public class RegistryDTO {

	private long registryId;
	private long employeeId;
	private boolean isRemote;
	private String location;
	private Long signIn;
	private String signOut;
	
}
