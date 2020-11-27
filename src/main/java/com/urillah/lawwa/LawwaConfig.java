package com.urillah.lawwa;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LawwaConfig {

	@Bean
	public ModelMapper modelMapper() {
	    return new ModelMapper();
	}
	//used for the model mapping function - model to DTO and vice versa
	
}
