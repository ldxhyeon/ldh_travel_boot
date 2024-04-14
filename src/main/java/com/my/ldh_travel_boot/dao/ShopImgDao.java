package com.my.ldh_travel_boot.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_boot.vo.ShopImg;

@Repository
public class ShopImgDao {
	
	@Autowired
	SqlSession s;
	
	public List<ShopImg> findByShopIdx(int shop_idx) {
		return s.selectList("shop_img.findByShopIdx",shop_idx);
	}
	
	public int save(ShopImg si) {
		return s.insert("shop_img.save",si);
	}
	
}
