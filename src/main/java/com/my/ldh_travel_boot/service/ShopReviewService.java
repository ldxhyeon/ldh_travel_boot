package com.my.ldh_travel_boot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.my.ldh_travel_boot.dao.ShopDao;
import com.my.ldh_travel_boot.dao.ShopReviewDao;
import com.my.ldh_travel_boot.vo.Shop;
import com.my.ldh_travel_boot.vo.ShopReview;

@Service
public class ShopReviewService {

	@Autowired
	ShopReviewDao shopReviewDao;
	
	@Autowired
	ShopDao shopDao;
	
	
	public ShopReview findByshopIdxAndUserIdx(ShopReview o) {
		return shopReviewDao.findByshopIdxAndUserIdx(o);
	}
	
	
	public List<ShopReview> findByShopIdx(int shop_idx) {
		return shopReviewDao.findByShopIdx(shop_idx);
	}
	
	
	@Transactional
	public boolean saveAndUpdateRank(ShopReview o, int shop_idx, int oneRank) {
		
		try {
			Shop shop = shopDao.findByIdx(shop_idx);
			
			float rank = shop.getRank();
			int reviewCnt = shop.getReview_cnt();
			
			//계산 확인.
			float newRank = ((rank * reviewCnt) + oneRank) / (reviewCnt + 1);
					
			Shop s = new Shop();
			
			s.setRank(newRank);
			s.setShop_idx(shop_idx);
			s.setReview_cnt(1);
			
			shopDao.updateReviewCnt(shop);
			shopDao.updateRank(s);
			shopReviewDao.save(o);
			
			return true;
		}catch(Exception e) {
			return false;
		}
	}
	
	
	@Transactional
	public int save(ShopReview o) {
		
		Shop shop = new Shop();
		shop.setShop_idx(o.getShop_idx());
		shop.setReview_cnt(1);
		
		shopDao.updateReviewCnt(shop);
		
		return shopReviewDao.save(o);
	}
	
}
