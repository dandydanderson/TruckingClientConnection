package com.tms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tms.dao.DAO;
import com.tms.models.Carrier;
import com.tms.models.Route;


@Service
public class FreightService {
	

	private DAO dao;
	
	@Autowired
	public void setDao(DAO dao) {
		this.dao = dao;
	}
	
	
	public void addRoute(Route route) {
		dao.createRoute(route);
	}
	
	public List<Route> getAllRoutes() {
		return dao.getAllRoutes();
	}


	public List<Route> getAllRoutesWithSpace() {
	return dao.getAllRoutesWithSpace();
	}
	
	public List<Route> getAllRoutesByCarrier(int carrierId){
		return dao.getRoutesByCarrierId(carrierId);
	}


	public List<Route> getAllRoutesByCarrierWithSpace(int id) {
		return dao.getAllRoutesByCarrierWithSpace(id);
	}

}
