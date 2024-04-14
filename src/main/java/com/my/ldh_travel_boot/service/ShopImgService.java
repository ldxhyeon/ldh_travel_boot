package com.my.ldh_travel_boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.ldh_travel_boot.dao.ShopImgDao;
import com.my.ldh_travel_boot.vo.ShopImg;

@Service
public class ShopImgService {
	
	
	@Autowired
	ShopImgDao shopImgDao;
	
	public  List<ShopImg> findByShopIdx(int shop_idx) {
		return shopImgDao.findByShopIdx(shop_idx);
	}
	
	
	public int save(ShopImg si) {
		return shopImgDao.save(si);
	}
	
}
