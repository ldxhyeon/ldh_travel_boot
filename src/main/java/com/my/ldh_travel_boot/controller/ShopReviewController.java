package com.my.ldh_travel_boot.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.my.ldh_travel_boot.service.ShopReviewService;
import com.my.ldh_travel_boot.service.ShopService;
import com.my.ldh_travel_boot.vo.Shop;
import com.my.ldh_travel_boot.vo.ShopReview;
import com.my.ldh_travel_boot.vo.User;

@RestController
@RequestMapping(value="shrv")
public class ShopReviewController {
	
	
	@Autowired
	ShopReviewService shopReviewService;
	
	@Autowired
	ShopService shopService;
	
	
	
	
	@GetMapping("findByShopIdx")
	public List<ShopReview> findByShopIdx(
				@RequestParam(value="shop_idx") int shop_idx
			) {
		
		
		List<ShopReview> list = shopReviewService.findByShopIdx(shop_idx);
		
		return list;
	}
	
	@GetMapping("findByshopIdxAndUserIdx")
	public Object findByshopIdxAndUserIdx(
				@RequestParam(value="shop_idx") int shop_idx,
				HttpSession session
			) {
		
		User me = (User) session.getAttribute("me");
		
		if(me==null) {
			return "not-login";
		}
		
		
		ShopReview o = new ShopReview();
		o.setShop_idx(shop_idx);
		o.setUser_idx(me.getUser_idx());
		
		ShopReview sr = shopReviewService.findByshopIdxAndUserIdx(o);
		
		return sr;
	}
	
	
	@PostMapping("save")
	public String save(
				@RequestParam(value="shop_idx") int shop_idx,
				@RequestParam(value="rank") int rank,
				@RequestParam(value="content") String content,
				HttpSession session
			) {
		
		
		User me = (User) session.getAttribute("me");
		
		if(me==null) {
			return "not-login";
		}
		
		ShopReview o = new ShopReview();
		o.setShop_idx(shop_idx);
		o.setUser_idx(me.getUser_idx());
		o.setRank(rank);
		o.setContent(content);
		
		
		ShopReview sr = shopReviewService.findByshopIdxAndUserIdx(o);
		
		if(sr != null) {
			return "review";
		}
		
		
		
		
		shopReviewService.save(o);
		
		
		return "ok";
	}
	
}
