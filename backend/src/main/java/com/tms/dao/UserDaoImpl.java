package com.tms.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tms.models.Order;
import com.tms.models.User;

@Component
public class UserDaoImpl implements UserDao {
	private SessionFactory sessionFactory;

	@Autowired
	public void setSf(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	@Override
	public void createUser(User user) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(user);
		tx.commit();

	}

	@Override
	public User getUserByUsername(String username) {
		System.out.println(username+ "insinde dao");
		Session sess = sessionFactory.openSession();
		User use = sess.get(User.class,username);
		System.out.println(use);
		return use;
	}

}
