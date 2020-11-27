package com.urillah.lawwa.dto;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class RegistryDTO {

	private long registryId;
	private long employeeId;
	private boolean isRemote;
	private String location;
	private Timestamp signIn;
	private Timestamp signOut;
	
}
