package com.tms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.tms.dao.CarrierDAO;
import com.tms.models.Carrier;
import com.tms.models.Route;

@Service
public class CarrierServiceImpl implements CarrierService {
	
	
	private CarrierDAO carrierDao;
	
	@Autowired
	public void setCarrierDao(CarrierDAO carrierDao) {
		this.carrierDao = carrierDao;
	}

	@Override
	public void saveCarrier(Carrier carrier) {
		carrierDao.saveCarrier(carrier);
	}

	@Override
	public Carrier get(String username) {
		return carrierDao.get(username);
	}

	@Override
	public List<Carrier> getAllCarriers() {
		
		return carrierDao.getAllCarriers();
	}

	@Override
	public void update(int id, Carrier carrier) {
		carrierDao.update(id, carrier);

	}

	@Override
	public void delete(int id) {
		carrierDao.delete(id);

	}
	
	
	//////////////////////////////////
	/////David's Service Methods
	///////////////////////////
	@Override
	public List<Route> getAllRoutes() {
		return carrierDao.getAllRoutes();
	}

}
