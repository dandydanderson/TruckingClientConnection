/**
 * 
 */
package com.tms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.tms.dao.UserDao;
import com.tms.models.User;

/**
 * @author king_
 *
 */
@Service
public class UserServiceImpl implements UserService {

	private UserDao userDao;

	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public void createUser(User user) {
		userDao.createUser(user);

	}

	@Override
	public User getUserByUsername(String username) {
<<<<<<< HEAD
		 username = username+".com";
		
		return userDao.getUserByUsername(username);
=======
		String uname = username+".com";
		return userDao.getUserByUsername( uname);
>>>>>>> master
	}

}
