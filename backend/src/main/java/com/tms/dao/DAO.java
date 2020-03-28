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

import com.tms.models.Admin;
import com.tms.models.Carrier;
import com.tms.models.Customer;
import com.tms.models.Order;
import com.tms.models.Route;
import com.tms.models.User;

@Component
public class DAO {

	private SessionFactory sessionFactory;

	@Autowired
	public void setsessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

//////////////////////
// CREATE
////////////////

	public void createUser(User user) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(user);
		tx.commit();
	}

	public void createAdmin(Admin admin) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(admin);
		tx.commit();
	}

	public void createCustomer(Customer customer) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		System.out.println(customer.getStreetAddress());
		sess.save(customer);
		tx.commit();
	}

	public void createCarrier(Carrier carrier) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(carrier);
		tx.commit();
	}

	public void createOrder(Order order) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(order);
		tx.commit();
	}

	public void createRoute(Route route) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(route);
		tx.commit();
	}

//////////////////////
//READ
////////////////

	public User getUserByUsername(String username) {
		Session sess = sessionFactory.openSession();
		return sess.get(User.class, username);
	}

	public List<User> getAllUsers() {
		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();// need to read into all of these objects
		CriteriaQuery<User> cq = cb.createQuery(User.class);
		Root<User> rootEntry = cq.from(User.class);
		CriteriaQuery<User> all = cq.select(rootEntry);

		TypedQuery<User> allQuery = sess.createQuery(all);
		return allQuery.getResultList();
	}

	public Admin getAdmin(String lastName) {
		Session sess = sessionFactory.openSession();
		return sess.get(Admin.class, lastName);
	}

	public List<Admin> getAllAdmins() {
		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Admin> cq = cb.createQuery(Admin.class);
		Root<Admin> rootEntry = cq.from(Admin.class);
		CriteriaQuery<Admin> all = cq.multiselect(rootEntry);

		TypedQuery<Admin> allQuery = sess.createQuery(all);
		return allQuery.getResultList();

	}

	public Customer getCustomer(int customerId) {
		Session sess = sessionFactory.openSession();
		return sess.get(Customer.class, customerId);
	}

	public List<Customer> getAllCustomers() {

		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Customer> cq = cb.createQuery(com.tms.models.Customer.class);
		Root<Customer> rootEntry = cq.from(Customer.class);
		CriteriaQuery<Customer> all = cq.select(rootEntry);

		TypedQuery<Customer> allQuery = sess.createQuery(all);
		return allQuery.getResultList();
	}

	public Carrier getCarrier(int carrierId) {

		Session sess = sessionFactory.openSession();
		return sess.get(Carrier.class, carrierId);
	}

	public List<Carrier> getAllCarriers() {

		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Carrier> cq = cb.createQuery(Carrier.class);
		Root<Carrier> rootEntry = cq.from(Carrier.class);
		CriteriaQuery<Carrier> all = cq.multiselect(rootEntry);

		TypedQuery<Carrier> allQuery = sess.createQuery(all);
		return allQuery.getResultList();
	}

	public Order getOrder(int orderId) {

		Session sess = sessionFactory.openSession();
		return sess.get(Order.class, orderId);
	}

	public List<Order> getAllOrders() {

		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Order> cq = cb.createQuery(Order.class);
		Root<Order> rootEntry = cq.from(Order.class);
		CriteriaQuery<Order> all = cq.multiselect(rootEntry);

		TypedQuery<Order> allQuery = sess.createQuery(all);
		return allQuery.getResultList();
	}

	public List<Order> getOrdersByCustomerId(int customerId) {// this is gonna be a variation of the code on the get all
																// types
		// TODO Auto-generated method stub
		return null;
	}

	public Route getRoute(int routeId) {

		Session sess = sessionFactory.openSession();
		return sess.get(Route.class, routeId);
	}

	public List<Route> getAllRoutes() {

		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Route> cq = cb.createQuery(Route.class);
		Root<Route> rootEntry = cq.from(Route.class);
		CriteriaQuery<Route> all = cq.select(rootEntry);

		TypedQuery<Route> allQuery = sess.createQuery(all);

		return allQuery.getResultList();
	}

	public List<Route> getRoutesByCarrierId(int carrierId) {// modified select all code
		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Route> cq = cb.createQuery(Route.class);
		Root<Route> rootEntry = cq.from(Route.class);
		CriteriaQuery<Route> all = cq.select(rootEntry).where(cb.equal(rootEntry.get("carrierId"), carrierId));

		TypedQuery<Route> allQuery = sess.createQuery(all);

		return allQuery.getResultList();
	}

	public void updateOrderRouteId(int orderId, int routeId) {
		// TODO Auto-generated method stub

	}

	public void updateRouteAvailableSpace(int addedPallets) {
		// TODO Auto-generated method stub

	}

	public List<Route> getAllRoutesWithSpace() {
		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Route> cq = cb.createQuery(Route.class);
		Root<Route> rootEntry = cq.from(Route.class);
		CriteriaQuery<Route> all = cq.select(rootEntry).where(cb.gt(rootEntry.get("availablePallets"), 0));

		TypedQuery<Route> allQuery = sess.createQuery(all);

		return allQuery.getResultList();
	}

	public List<Route> getAllRoutesByCarrierWithSpace(int id) {

		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Route> cq = cb.createQuery(Route.class);
		Root<Route> rootEntry = cq.from(Route.class);

		// predicates for multiple wheres

		Predicate[] predicates = new Predicate[2];
		predicates[0] = cb.gt(rootEntry.get("availablePallets"), 0);
		predicates[1] = cb.equal(rootEntry.get("carrierId"), id);
		cq.select(rootEntry).where(predicates);
		CriteriaQuery<Route> all = cq.select(rootEntry).where(cb.gt(rootEntry.get("availablePallets"), 0));

		TypedQuery<Route> allQuery = sess.createQuery(all);

		return allQuery.getResultList();

	}

}
