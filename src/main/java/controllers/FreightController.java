package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import models.Carrier;
import services.FreightService;

@Controller
public class FreightController {
	
	private FreightService fs;
	
	@Autowired
	public void setFreightService(FreightService fs) {
		this.fs = fs;
	}
	

	@GetMapping(path = "/carrier/{carrierId")
	@ResponseBody
	public Carrier getCarrier(@PathVariable int carrierId) {
		Carrier carrier = fs.getCarrier();
		System.out.println(carrier);
		return carrier;
	}
	

}
