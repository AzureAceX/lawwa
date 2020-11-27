package com.urillah.lawwa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urillah.lawwa.model.Registry;
import com.urillah.lawwa.repository.RegistryRepository;

@RestController
@RequestMapping("/registry")
class RegistryController {

	@Autowired
	private RegistryRepository registryRepositoryObj;

	@GetMapping(value = "/list")
	public List<Registry> getAll() {
		List<Registry> registry = new ArrayList<>();
		registryRepositoryObj.findAll().forEach(registry::add);
		return registry;
	}

//	@PutMapping(value = "/{registryId}")
//	public Optional<Registry> getById(@PathVariable("registryId") Long registryId) {
//		
//		return registryRepositoryObj.findById(registryId);
//	}


}