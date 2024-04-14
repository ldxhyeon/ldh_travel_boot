package com.my.ldh_travel_boot.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.my.ldh_travel_boot.service.ShopImgService;
import com.my.ldh_travel_boot.service.ShopReviewService;
import com.my.ldh_travel_boot.service.ShopService;
import com.my.ldh_travel_boot.vo.Shop;
import com.my.ldh_travel_boot.vo.ShopImg;
import com.my.ldh_travel_boot.vo.ShopReview;
import com.my.ldh_travel_boot.vo.User;

@Controller
public class ViewController {

	@Autowired
	ShopService shopService;

	@Autowired
	ShopImgService shopImgService;

	@Autowired
	ShopReviewService shopReviewService;

	
	//사용자가 로그인되어 있는지 여부를 확인하여 로그인되어 있지 않다면 
	// "/login"으로 리다이렉트하고, 로그인되어 있다면 "add-shop" 문자열을 반환합니다.
	public String getView(HttpSession s, String jspName) {

		
		// 로그인하지 않은 상태에서 getAttribute() 메서드는 null을 반환할 것
		User user = (User) s.getAttribute("me");
		if (user == null) {
			// 로그인 안됨.
			return "redirect:/login";
		}

		return jspName;
	}

	@GetMapping("")
	public String home() {

		return "home";
	}

	@GetMapping("login")
	public String login() {

		return "login";
	}

	@GetMapping("register")
	public String register() {

		return "register";
	}

	@GetMapping("add-shop")
	public String addshop(HttpSession s) {

		return getView(s, "add-shop");

	}

	@GetMapping("detail-shop")
	public String detailShop(@RequestParam(value = "shop_uuid") String shop_uuid, Model model, HttpSession s) {

		Shop shop = shopService.findByUuid(shop_uuid);

		// shop 해당하는 이미지들
		List<ShopImg> imgs = shopImgService.findByShopIdx(shop.getShop_idx());

		// shop 리뷰 조회
		List<ShopReview> reviews = shopReviewService.findByShopIdx(shop.getShop_idx());

		model.addAttribute("shop", shop);
		model.addAttribute("imgs", imgs);
		model.addAttribute("reviews", reviews);

		return "detail-shop";
	}

}
