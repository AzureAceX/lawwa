package com.urillah.lawwa.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urillah.lawwa.dto.RegistryDTO;
import com.urillah.lawwa.model.Registry;
import com.urillah.lawwa.repository.RegistryRepository;
import com.urillah.lawwa.service.GenericService;

@RestController
@RequestMapping("/registry")
class RegistryController {

	@Autowired
	private RegistryRepository registryRepositoryObj;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private GenericService genericServiceObj;

	@GetMapping(value = "/list")
	public List<Registry> getAll() {
		List<Registry> registry = new ArrayList<>();
		registryRepositoryObj.findAll().forEach(registry::add);
		return registry;
	}
	
	@GetMapping(value = "/registryId")
	public Registry getRegistry(@PathVariable("registryId") Long registryId) {
		Registry foundRegistry = new Registry();

		Optional<Registry> registryToUpdate = registryRepositoryObj.findById(registryId);
		if(registryToUpdate.isPresent()) {
			foundRegistry = registryToUpdate.get();
		}
		
		return foundRegistry;
	}
	

	@PostMapping(value = "/login")
	public ResponseEntity<Registry> createRegistry(@RequestBody RegistryDTO registryDTO){
				
		try {
			Registry registryObj = new Registry();
			registryObj.setEmployeeId(registryDTO.getEmployeeId());
			registryObj.setLocation(registryDTO.getLocation());
			registryObj.setRemote(registryDTO.isRemote());
			registryObj.setSignIn(new Timestamp(registryDTO.getSignIn()));
			registryRepositoryObj.save(registryObj);
			return new ResponseEntity<>(registryObj, HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

//	@PutMapping(value = "/{registryId}")
//	public Registry updateRegistry(@RequestBody RegistryDTO registryDTO, @PathVariable("registryId") Long registryId) {
//		
//		Optional<Registry> registryObj;
//		Registry newRegistry = new Registry();
//		try {
//			//find registry record using sign in and empID
//			String signInValue = registryDTO.getSignIn();
//			Date javaDatetime = new SimpleDateFormat("yyyy.MM.dd hh:mm:ss").parse(signInValue);
//			Timestamp jdbcDatetime = new Timestamp(javaDatetime.getTime());
//			registryObj = registryRepositoryObj.findByEmployeeIdAndSignIn(registryDTO.getEmployeeId(), jdbcDatetime);
//			
//			if(registryObj.isPresent()) {
//				newRegistry = registryObj.get();
//				
//				String signOutValue = registryDTO.getSignOut();
//				Date signOutDateTime = new SimpleDateFormat("yyyy.MM.dd hh:mm:ss").parse(signOutValue);
//				Timestamp signOutTimestamp = new Timestamp(signOutDateTime.getTime());
//				newRegistry.setSignOut(signOutTimestamp);
//				
//				registryRepositoryObj.save(newRegistry);
//			}
//			
//		} catch (Exception e) {
//			System.out.println( "ERROR FOUND:::" + e);
//		}
//
//		return newRegistry;
//		
//	} 

}