package com.tms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tms.dao.DAO;
import com.tms.models.User;

@Service
public class LoginServiceImpl implements LoginService {
	
	private static DAO loginDao;

	public User validateUser(String username, String password) {
		User user = loginDao.getUser(username, password);
		if(user != null && user.getPassword().equals(password)) {
			return user;
		}
		return null;
	}

}
