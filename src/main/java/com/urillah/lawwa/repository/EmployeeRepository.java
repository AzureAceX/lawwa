package com.urillah.lawwa.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.urillah.lawwa.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long>{

//	@Query("SELECT e FROM Employee a WHERE e.employee = ")
	public Optional<Employee> findByUsernameAndPassword(String username, String password);
	
	
//	  List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);
	//	  List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);


}