package com.tms.service;
import java.util.List;

import com.tms.models.Customer;

public interface ClientService {
	
	public Customer getCustomer(String username);
	
	public void registerCustomer(Customer cust);
	
	public List<Customer> retrieveAllCustomers();
}
