package com.tms.service;

import com.tms.models.User;

public interface LoginService {
	
	public User validateUser(String username, String password);

}
