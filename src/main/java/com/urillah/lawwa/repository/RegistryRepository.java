package com.urillah.lawwa.repository;

import java.sql.Timestamp;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.urillah.lawwa.model.Registry;

@Repository
public interface RegistryRepository extends CrudRepository<Registry, Long>{

	@Query("SELECT reg FROM Registry reg WHERE reg.employeeId = 1 AND reg.signIn = 2")
	public Optional<Registry> findByEmployeeIdAndSignIn(long employeeId, Timestamp signIn);

}