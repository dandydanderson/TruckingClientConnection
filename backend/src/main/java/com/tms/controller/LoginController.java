package com.tms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.tms.models.User;
import com.tms.service.LoginService;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class LoginController {
private LoginService loginService;
	
	@Autowired
	public void setAuthService(LoginService loginService) {
		this.loginService = loginService;
	}
	
	@PostMapping("/login")
	public ResponseEntity<HttpStatus> login(@RequestBody User user) {
		User authUser = loginService.validateUser(user.getUsername(), user.getPassword());
		if (authUser == null) {
			return new ResponseEntity<HttpStatus>(HttpStatus.UNAUTHORIZED);
		} else {
			System.out.println(authUser);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
	
	}

}
