package com.tms.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tms.models.Customer;
import com.tms.service.ClientService;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class ClientController {
	
	private ClientService cs;
	
	@Autowired
	public void setClientService(ClientService cs) {
		this.cs = cs;
	}
	
	@PostMapping("/register")
	public ResponseEntity<Customer> registerClient(@RequestBody Customer customer) {
		try {
			cs.registerUser(customer);
			return ResponseEntity.created(new URI('/'+customer.getUsername())).body(customer);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
	}

}
