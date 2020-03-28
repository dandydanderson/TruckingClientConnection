package com.tms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tms.dao.DAO;
import com.tms.models.Customer;

@Service
public class ClientServiceImpl implements ClientService {

	private static DAO dao;

	@Autowired
	public void setDao(DAO dao) {
		this.dao = dao;
	}

	@Override
	public void registerCustomer(Customer cust) {
		System.out.println(cust.getStreetAddress());
		dao.createCustomer(cust);
	}

	@Override
	public List<Customer> retrieveAllCustomers() {

		return dao.getAllCustomers();
	}

}
