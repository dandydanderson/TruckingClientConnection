package daos;

import java.util.List;

import models.Admin;
import models.Carrier;
import models.Customer;
import models.Order;
import models.Route;
import models.User;

public class dao implements daoInterface {
	
	
//	public List<Car> retrieveAllCars() {
//		Session sess = sf.openSession();
//		CriteriaBuilder cb = sess.getCriteriaBuilder();
//		CriteriaQuery<Car> cq = cb.createQuery(Car.class);
//		Root<Car> rootEntry = cq.from(Car.class);
//		CriteriaQuery<Car> all = cq.select(rootEntry);
//		
//		TypedQuery<Car> allQuery = sess.createQuery(all);
//		
//		return allQuery.getResultList();
//	}
//
//	public void insertCar(Car car) throws CarInsertionException {
//		Session sess = sf.openSession();
//		Transaction tx = sess.beginTransaction();
//		sess.save(car);
//		tx.commit();
//	}
//
//	public Car retriveCarByVin(String vin) {
//		Session sess = sf.openSession();
//		return sess.get(Car.class, vin);
//	}
	

	public void createUser(User user) {

		
		
	}

	public void createAdmin(Admin admin) {
		// TODO Auto-generated method stub

	}

	public void createCustomer(Customer customer) {
		// TODO Auto-generated method stub

	}

	public void createCarrier(Carrier carrier) {
		// TODO Auto-generated method stub

	}

	public void createOrder(Order order) {
		// TODO Auto-generated method stub

	}

	public void createRoute(Route route) {
		// TODO Auto-generated method stub

	}

	public User getUser(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	public Admin getAdmin(String lastName) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Admin> getAllAdmins() {
		// TODO Auto-generated method stub
		return null;
	}

	public Customer getCustomer(int customerId) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return null;
	}

	public Carrier getCarrier(int carrierId) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Carrier> getAllCarriers() {
		// TODO Auto-generated method stub
		return null;
	}

	public Order getOrder(int orderId) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Order> getOrdersByCustomerId(int customerId) {
		// TODO Auto-generated method stub
		return null;
	}

	public Route getRout(int routeId) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Route> getAllRoutes() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Route> getRoutesByCarrierId(int carrierId) {
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
