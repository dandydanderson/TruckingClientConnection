package com.tms.dao;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tms.models.Order;

@Component
public class OrderDAOImpl implements OrderDAO {

	private SessionFactory sessionFactory;

	@Autowired
	public void setSf(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public void saveOrder(Order order) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(order);
		tx.commit();
	}

	@Override
	public Order getOrder(int id) {
		Session sess = sessionFactory.openSession();
		return sess.get(Order.class, id);
	}

	@Override
	public List<Order> getAllOrders() {
		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Order> cq = cb.createQuery(Order.class);
		Root<Order> rootEntry = cq.from(Order.class);
		CriteriaQuery<Order> all = cq.select(rootEntry);

		TypedQuery<Order> allQuery = sess.createQuery(all);

		return allQuery.getResultList();
	}

	@Override
	public List<Order> getOrdersByCustomerId(int customerId) {
		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Order> cq = cb.createQuery(Order.class);
		Root<Order> rootEntry = cq.from(Order.class);
		CriteriaQuery<Order> all = cq.select(rootEntry).where(cb.equal(rootEntry.get("customerId"), customerId));

		TypedQuery<Order> allQuery = sess.createQuery(all);

		return allQuery.getResultList();
	}

	@Override
	public List<Order> getAllOrdersWithRoute() {
		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Order> cq = cb.createQuery(Order.class);
		Root<Order> rootEntry = cq.from(Order.class);
		CriteriaQuery<Order> all = cq.select(rootEntry).where(cb.isNotNull(rootEntry.get("routeId")));

		TypedQuery<Order> allQuery = sess.createQuery(all);

		return allQuery.getResultList();
	}

	@Override
	public List<Order> getAllOrdersByCustomerWithRoute(int customerId) {

		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Order> cq = cb.createQuery(Order.class);
		Root<Order> rootEntry = cq.from(Order.class);

		// predicates for multiple wheres
		Predicate[] predicates = new Predicate[2];
		predicates[0] = cb.equal(rootEntry.get("customerId"), customerId);
		predicates[1] = cb.isNotNull(rootEntry.get("routeId"));
		CriteriaQuery<Order> all = cq.select(rootEntry).where(predicates);
		TypedQuery<Order> allQuery = sess.createQuery(all);

		return allQuery.getResultList();

	}

//	@Override
//	public void updateOrder(int id, Order order) {
//		// TODO Auto-generated method stub
//
//	}

//	@Override
//	public void deleteOrder(int id) {
//		// TODO Auto-generated method stub
//
//	}

}
