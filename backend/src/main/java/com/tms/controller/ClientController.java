package com.tms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tms.models.Customer;
import com.tms.service.ClientService;

@Controller
public class ClientController {

	private ClientService clientService;

	@Autowired
	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path = "/customer", consumes = "application/json")
	public ResponseEntity<?> registerClient(@RequestBody Customer customer) {
		try {
			clientService.registerCustomer(customer);
			ResponseEntity.status(HttpStatus.CREATED);
			return ResponseEntity.ok().body("Customer has been created");
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/customer")
	@ResponseBody
	public List<Customer> getAllCustomers() {
		return clientService.retrieveAllCustomers();
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/customer/{username}")
	@ResponseBody
	public Customer getCustomersByUsername(@PathVariable String username) {
		return clientService.getCustomer(username);
	}

}
