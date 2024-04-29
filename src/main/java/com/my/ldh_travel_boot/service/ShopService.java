package com.my.ldh_travel_boot.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.my.ldh_travel_boot.dao.ShopDao;
import com.my.ldh_travel_boot.dao.ShopImgDao;
import com.my.ldh_travel_boot.dao.ShopReviewDao;
import com.my.ldh_travel_boot.vo.Shop;
import com.my.ldh_travel_boot.vo.ShopImg;
import com.my.ldh_travel_boot.vo.ShopReview;



@Service
public class ShopService {

	@Autowired
	ShopDao shopDao;
	
	@Autowired
	ShopReviewDao shopReviewDao;
	
	@Autowired
	ShopImgDao shopImgDao;
	
	
	public Shop findByIdx(int shop_idx) {
		return shopDao.findByIdx(shop_idx);
	}
	
	public int updateReviewCnt(Shop shop) {
		return shopDao.updateReviewCnt(shop);
	}
	
	public int updateRank(Shop shop) {
		return shopDao.updateRank(shop);
	}
	
	public int plusViewCnt(int shop_idx) {
		return shopDao.plusViewCnt(shop_idx);
	}
	
	public Shop findByUuid(String shop_uuid) {
		return shopDao.findByUuid(shop_uuid);
	}
	
	public List<Shop> findByTypeWithLimit(Map<String,Object> map) {
		return shopDao.findByTypeWithLimit(map);
	}
	
	
	@Transactional
	public void saveWithImages(Shop shop, List<String> detail_imgs) {
		
		
		shopDao.save(shop);
		
		int newShopIdx = shop.getShop_idx();
		
		for(int i = 0; i<detail_imgs.size(); i++) {
			
			String url = detail_imgs.get(i);
			
			ShopImg si = new ShopImg();
			si.setShop_idx(newShopIdx);
			si.setImg_url(url);
			
			
			shopImgDao.save(si);
		}
	}
	
	
	public int save(Shop shop) {
		return shopDao.save(shop);
	}
	
}
