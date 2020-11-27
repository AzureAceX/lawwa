package com.urillah.lawwa.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.urillah.lawwa.model.Registry;

@Repository
public interface RegistryRepository extends CrudRepository<Registry, Long>{

}