package com.tms.dao;

import java.util.List;

import com.tms.models.Order;

public interface OrderDAO {
	
	//Save the order
	void saveOrder(Order order);
	
	//Get a single order
	Order getOrder(int id);
	
	//Get all Orders
	List<Order> getAllOrders();
	
	public List<Order> getOrdersByCustomerId(int customerId);
	
	public List<Order> getAllOrdersWithRoute();
	
	public List<Order> getAllOrdersByCustomerWithRoute(int customerId);
	
	//Update the Carrier
//	void updateOrder(int id, Order order);
	
	//Delete a Carrier
//	void deleteOrder(int id);
	
}
