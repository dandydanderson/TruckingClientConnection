package com.tms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


import com.tms.models.User;
import com.tms.service.UserService;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	private UserService userService;
	
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	// get a single user
	@GetMapping(path="/user/{username}")
	@ResponseBody
	public User getUser(@PathVariable String username) {
		User user = userService.getUserByUsername(username);
		user.setPassword("");
		System.out.println(user);
		return user;
	}
	// Save order
	
	@PostMapping(path = "/user", consumes = "application/json")
	public ResponseEntity<?> addUser(@RequestBody User user) {
		try {
			userService.createUser(user);
			ResponseEntity.status(HttpStatus.CREATED);
			return ResponseEntity.ok().body("User has been created");
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
	}

}
