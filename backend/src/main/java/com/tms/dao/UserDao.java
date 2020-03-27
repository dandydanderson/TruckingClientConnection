package com.tms.dao;


import org.hibernate.Session;

import com.tms.models.User;

public interface UserDao {
public void createUser(User user) ;
public User getUserByUsername(String username) ;

}
