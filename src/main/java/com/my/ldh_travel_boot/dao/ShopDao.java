package com.my.ldh_travel_boot.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_boot.vo.Shop;

@Repository
public class ShopDao {
	
	@Autowired
	SqlSession s;
	
	public int save(Shop shop) {
		return s.insert("shop.save",shop);
	}
}
