package com.tms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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
	@PostMapping(path = "/register", consumes = "application/json")
	public ResponseEntity<?> registerClient(@RequestBody Customer customer) {
		try {
			System.out.println(customer.getStreetAddress());
			clientService.registerCustomer(customer);
			ResponseEntity.status(HttpStatus.CREATED);
			return ResponseEntity.ok().body("Customer has been created");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(customer.getStreetAddress());
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
	}

}
