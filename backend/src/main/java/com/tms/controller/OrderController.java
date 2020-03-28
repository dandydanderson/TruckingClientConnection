package com.tms.controller;

import java.util.List;

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

import com.tms.models.Order;
import com.tms.service.OrderService;

@Controller
public class OrderController {

	private OrderService orderService;

	@Autowired
	public void setOrderService(OrderService orderService) {
		this.orderService = orderService;
	}

	// get a single oder
	@GetMapping("/order/{id}")
	@ResponseBody
	public Order getOrder(@PathVariable int id) {
		Order order = orderService.getOrders(id);
		System.out.println(order);
		return order;
	}

	// get all orders
	@GetMapping("/order")
	@ResponseBody
	public List<Order> getOrders() {
		return orderService.getAllOrders();
	}

	@CrossOrigin(origins = "http://localhost:4200") // this will return routes with space available eventually
	@GetMapping("/orders/{id}")
	@ResponseBody
	public List<Order> getOrdersByCustomerId(@PathVariable int id) {
		List<Order> orders = orderService.getOrdersByCustomerId(id);
		return orders;
	}

	@CrossOrigin(origins = "http://localhost:4200") // this will return routes with space available eventually
	@GetMapping("/ordersRoute")
	@ResponseBody
	public List<Order> getAllOrdersWithRoute() {
		List<Order> orders = orderService.getAllOrdersWithRoute();
		return orders;
	}

	@CrossOrigin(origins = "http://localhost:4200") // this will return routes with space available eventually
	@GetMapping("/ordersRoute/{id}")
	@ResponseBody
	public List<Order> getAllOrdersByCustomerWithRoute(@PathVariable int id) {
		List<Order> orders = orderService.getAllOrdersByCustomerWithRoute(id);
		System.out.println(orders);
		return orders;
	}

	// Save order
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path = "/order", consumes = "application/json")
	public ResponseEntity<?> addOrder(@RequestBody Order order) {
		try {
			orderService.saveOrder(order);
			ResponseEntity.status(HttpStatus.CREATED);
			return ResponseEntity.ok().body("Carrier has been created");
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
	}
}
