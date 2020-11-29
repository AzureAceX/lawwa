package com.urillah.lawwa.controller;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urillah.lawwa.dto.EmployeeDTO;
import com.urillah.lawwa.dto.RegistryDTO;
import com.urillah.lawwa.model.Employee;
import com.urillah.lawwa.model.Registry;
import com.urillah.lawwa.repository.RegistryRepository;

@RestController
@RequestMapping("/registry")
class RegistryController {

	@Autowired
	private RegistryRepository registryRepositoryObj;
	
	@Autowired
	private ModelMapper modelMapper;

	@GetMapping(value = "/list")
	public List<Registry> getAll() {
		List<Registry> registry = new ArrayList<>();
		registryRepositoryObj.findAll().forEach(registry::add);
		return registry;
	}

	@PostMapping(value = "/login")
	public ResponseEntity<Registry> createRegistry(@RequestBody RegistryDTO registryDTO) {
		try {
			Registry registryObj = modelMapper.map(registryDTO, Registry.class);
			registryRepositoryObj.save(registryObj);
			return new ResponseEntity<>(registryObj, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@PutMapping(value = "/{registryId}")
	public Registry updateRegistry(@RequestBody RegistryDTO registryDTO, @PathVariable("registryId") Long registryId) {
		
		Registry newRegistry;
		Optional<Registry> registryObj = registryRepositoryObj.findById(registryId);
		
		if(registryObj.isPresent()) {
			newRegistry = registryObj.get();
			newRegistry.setSignOut(registryDTO.getSignOut());
			registryRepositoryObj.save(newRegistry);
		}

		return newRegistry;
		
	} 

}