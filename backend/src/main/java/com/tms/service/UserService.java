package com.tms.service;

import com.tms.models.User;

public interface UserService{
public void createUser(User user) ;
public User getUserByUsername(String username) ;

}
