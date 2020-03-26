package com.tms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tms.models.Route;
import com.tms.service.FreightService;


@Controller
public class FreightController {
	
	
	private FreightService fs;
	
	@Autowired
	public void setFreightService(FreightService fs) {
		this.fs = fs;
	}

//	@GetMapping(path = "/carrier/{carrierId}")
//	@ResponseBody
//	public Carrier getCarrier(@PathVariable int carrierId) {
//		Carrier carrier = fs.getCarrier();
//		System.out.println(carrier);
//		return carrier;
//	}
	
	@GetMapping("/route")
	@ResponseBody
	public List<Route> getAllRoutes() {
	return fs.getAllRoutes();
	}
	
}