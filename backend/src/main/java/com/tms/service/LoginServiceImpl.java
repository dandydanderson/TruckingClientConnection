package com.tms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tms.dao.CarrierDAO;
import com.tms.dao.DAO;
import com.tms.models.User;

@Service
public class LoginServiceImpl implements LoginService {
	
	private DAO dao;
	
	@Autowired
	public void setDao(DAO dao) {
		this.dao = dao;
	}

	public User validateUser(String username, String password) {
		User user = dao.getUserByUsername(username);
		if(user != null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}

}
