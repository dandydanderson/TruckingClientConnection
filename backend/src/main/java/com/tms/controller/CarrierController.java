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

import com.tms.models.Carrier;
import com.tms.models.Route;
import com.tms.service.CarrierService;

@Controller
public class CarrierController {
	
	
	private CarrierService carrierService;
	
	@Autowired
	public void setCarrierService(CarrierService carrierService) {
		this.carrierService = carrierService;
	}
	

	
	//get a single carrier
	@GetMapping("/carrier/{id}")
	@ResponseBody
	public Carrier getCar(@PathVariable int id) {
		Carrier carr = carrierService.get(id);
		System.out.println(carr);
		return carr;
	}
	//get all carriers
	@GetMapping("/carrier")
	@ResponseBody
	public List<Carrier> getAllCarriers() {
		return carrierService.getAllCarriers();
	}
	//Save carrier
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path = "/carrier",consumes = "application/json")
	public ResponseEntity<?> addCarrier(@RequestBody Carrier carrier) {
		try {
			carrierService.saveCarrier(carrier);
			ResponseEntity.status(HttpStatus.CREATED);
			return ResponseEntity.ok().body("Carrier has been created");
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
	}
	//Update carrier (can did the carrierDaoImple to check what to edit)
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping(path="/carrier/{id}")
	@ResponseBody
	public ResponseEntity<?> updateCarrier(@PathVariable int id, @RequestBody Carrier carrier) {
		carrierService.update(id, carrier);
		return ResponseEntity.ok().body("Carrier has been updated");
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(path="/carrier/{id}")
	@ResponseBody
	public ResponseEntity<?> deleteCarrier(@PathVariable int id) {
		carrierService.delete(id);
		return ResponseEntity.ok().body("Carrier has been deleted");
	}
	
	///////////////////////////////////////////
	//Appended Methods from David's Controller
	//////////////////////////////////
	
//	//get all routes
//	@GetMapping("/route")
//	@ResponseBody
//	public List<Route> getAllRoutes() {
//		return carrierService.getAllRoutes();
//	}
//	
	
}
