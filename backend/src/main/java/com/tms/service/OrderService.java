package com.tms.service;

import java.util.List;

import com.tms.models.Order;

public interface OrderService {

	// Save the carrier
	void saveOrder(Order order);

	// Get a single Carrier
	Order getOrders(int id);

	// Get all Carriers
	List<Order> getAllOrders();

	// Update the Carrier
//	void updateOrder(int id, Order order);

	// Delete a Carrier
//	void deleteOrder(int id);
}
