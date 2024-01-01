package com.my.ldh_travel_boot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.ldh_travel_boot.dao.ShopDao;
import com.my.ldh_travel_boot.vo.Shop;



@Service
public class ShopService {

	@Autowired
	ShopDao shopDao;
	
	public int save(Shop shop) {
		return shopDao.save(shop);
	}
	
}
