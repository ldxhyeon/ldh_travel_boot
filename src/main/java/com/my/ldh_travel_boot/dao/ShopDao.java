package com.my.ldh_travel_boot.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_boot.vo.Shop;

@Repository
public class ShopDao {
	
	@Autowired
	SqlSession s;
	
	public int updateReviewCnt(Shop shop) {
		return s.update("shop.updateRank",shop);
	}
	
	public int updateRank(Shop shop) {
		return s.update("shop.updateRank",shop);
	}
	
	public int plusViewCnt(int shop_idx) {
		return s.update("shop.plusViewCnt",shop_idx);
	}
	
	public Shop findByUuid(String shop_uuid) {
		return s.selectOne("shop.findByUuid",shop_uuid);
	}
	
	public List<Shop> findByTypeWithLimit(Map<String,Object> map) {
		return s.selectList("shop.findByTypeWithLimit",map);
	}
	
	public int save(Shop shop) {
		return s.insert("shop.save",shop);
	}
}
