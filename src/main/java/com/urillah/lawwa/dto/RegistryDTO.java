package com.urillah.lawwa.dto;

import java.sql.Timestamp;

import lombok.Data;
import lombok.Getter;

@Data
public class RegistryDTO {

	private long registryId;
	private long employeeId;
	private boolean isRemote;
	private String location;
	private String signIn;
	private String signOut;
	
}
