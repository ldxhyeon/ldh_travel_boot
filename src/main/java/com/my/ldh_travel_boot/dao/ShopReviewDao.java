package com.my.ldh_travel_boot.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_boot.vo.ShopReview;

@Repository
public class ShopReviewDao {

	@Autowired
	SqlSession s;
	
	
	public ShopReview findByshopIdxAndUserIdx(ShopReview o) {
		return s.selectOne("shop_review.findByshopIdxAndUserIdx",o);
	}
	
	
	public List<ShopReview> findByShopIdx(int shop_idx) {
		return s.selectList("shop_review.findByShopIdx",shop_idx);
	}
	
	public int save(ShopReview o) {
		return s.insert("shop_review.save",o);
	}
}
