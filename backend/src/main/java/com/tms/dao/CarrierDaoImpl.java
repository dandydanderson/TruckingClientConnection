package com.tms.dao;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tms.models.Admin;
import com.tms.models.Carrier;
import com.tms.models.Customer;
import com.tms.models.Order;
import com.tms.models.Route;
import com.tms.models.User;

@Component
public class CarrierDaoImpl implements CarrierDAO {

	private SessionFactory sessionFactory;

	@Autowired
	public void setSf(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public void saveCarrier(Carrier carrier) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(carrier);
		tx.commit();
	}

	@Override
	public Carrier get(String username) {
		username = username + ".com";
		Session sess = sessionFactory.openSession();
		Query<Carrier> query = sess.createQuery("from Carrier c where c.username=:username", Carrier.class);
		query.setParameter("username", username);
		Carrier carrier = query.uniqueResult();
		return carrier;
	}

	@Override
	public List<Carrier> getAllCarriers() {
		Session sess = sessionFactory.openSession();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Carrier> cq = cb.createQuery(Carrier.class);
		Root<Carrier> rootEntry = cq.from(Carrier.class);
		CriteriaQuery<Carrier> all = cq.select(rootEntry);

		TypedQuery<Carrier> allQuery = sess.createQuery(all);

		return allQuery.getResultList();
	}

	@Override
	public void update(int id, Carrier carrier) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		Carrier oldCarrier = sess.byId(Carrier.class).load(id);
		oldCarrier.setCarrierName(carrier.getCarrierName());
		oldCarrier.setAddress(carrier.getAddress());
		oldCarrier.setCity(carrier.getCity());
		oldCarrier.setState(carrier.getState());
		oldCarrier.setZipcode(carrier.getZipcode());
		oldCarrier.setPocFirstName(carrier.getPocFirstName());
		oldCarrier.setPocLastName(carrier.getPocLastName());
		oldCarrier.setPhoneNumber(carrier.getPhoneNumber());
		oldCarrier.setFaxNumber(carrier.getFaxNumber());
		oldCarrier.setNumberOfTrucks(carrier.getNumberOfTrucks());
		oldCarrier.setClassification(carrier.getClassification());
		sess.flush();
		tx.commit();
	}

	@Override
	public void delete(int id) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		Carrier carrier = sess.byId(Carrier.class).load(id);
		sess.delete(carrier);
		tx.commit();

	}

	///////////////////////////////////////////////////
	/// David's Dao Methods
	////////////////////////////////////

//////////////////////
//CREATE
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
		sess.save(customer);
		tx.commit();
	}

	public void createCarrier(Carrier carrier) {
		User user = new User(carrier.getUsername(), carrier.getPassword(), "carrier");
		createUser(user);

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

	public User getUser(String username, String password) {

		Session sess = sessionFactory.openSession();
		User user = sess.get(User.class, username);

		if (user.getPassword() == password) {// user validation here. Probably should throw some exception instead of
												// just null
			return user;
		} else {
			return null;
		}
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
		CriteriaQuery<Customer> cq = cb.createQuery(Customer.class);
		Root<Customer> rootEntry = cq.from(Customer.class);
		CriteriaQuery<Customer> all = cq.multiselect(rootEntry);

		TypedQuery<Customer> allQuery = sess.createQuery(all);
		return allQuery.getResultList();
	}

	public Carrier getCarrier(int carrierId) {

		Session sess = sessionFactory.openSession();
		return sess.get(Carrier.class, carrierId);
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
		CriteriaQuery<Route> all = cq.multiselect(rootEntry);

		TypedQuery<Route> allQuery = sess.createQuery(all);
		return allQuery.getResultList();
	}

	public List<Route> getRoutesByCarrierId(int carrierId) {// modified select all code
// TODO Auto-generated method stub
		return null;
	}

	public void updateOrderRouteId(int orderId, int routeId) {
// TODO Auto-generated method stub

	}

	public void updateRouteAvailableSpace(int addedPallets) {
// TODO Auto-generated method stub

	}

}
