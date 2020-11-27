package com.urillah.lawwa.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "registry")
@Data
public class Registry {

	@Id
	@Column(unique = true, nullable = false)
	private long registryId;
	
	private long employeeId;

	private boolean isRemote;
	
	private String location;

	private Timestamp signIn;

	private Timestamp signOut;

}

//java.util.Date date = new Date();
//pst.setTimestamp(columIndex, new java.sql.Timestamp(date.getTime()).getTime());