package com.tms.service;
import java.util.List;

import com.tms.models.Customer;

public interface ClientService {
	
	public void registerUser(Customer cust);
	
	public List<Customer> retrieveAllUsers();
}
