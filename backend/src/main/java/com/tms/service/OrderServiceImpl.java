package com.tms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tms.dao.OrderDAO;
import com.tms.models.Order;

@Service
public class OrderServiceImpl implements OrderService {

	private OrderDAO orderDao;

	@Autowired
	public void setCarrierDao(OrderDAO orderDao) {
		this.orderDao = orderDao;
	}

	@Override
	public void saveOrder(Order order) {
		orderDao.saveOrder(order);
	}

	@Override
	public Order getOrders(int id) {
		return orderDao.getOrder(id);
	}

	@Override
	public List<Order> getAllOrders() {
		return orderDao.getAllOrders();
	}

	@Override
	public List<Order> getOrdersByCustomerId(int customerId) {
		return orderDao.getOrdersByCustomerId(customerId);
	}

	@Override
	public List<Order> getAllOrdersWithRoute() {
		return getAllOrdersWithRoute();
	}

	@Override
	public List<Order> getAllOrdersByCustomerWithRoute(int id) {
		return orderDao.getAllOrdersByCustomerWithRoute(id);
	}
}
