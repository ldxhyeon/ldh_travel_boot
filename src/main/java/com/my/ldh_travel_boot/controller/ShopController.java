package com.my.ldh_travel_boot.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.my.ldh_travel_boot.service.ShopImgService;
import com.my.ldh_travel_boot.service.ShopService;
import com.my.ldh_travel_boot.vo.Shop;
import com.my.ldh_travel_boot.vo.ShopImg;


@RestController
@RequestMapping(value="shop")
public class ShopController {
	
	
	
	@Autowired
	ShopService shopService;
	
	@Autowired
	ShopImgService shopImgService;
	
	
	
	
	@PostMapping("test")
	public String test(
				@RequestParam(value="imgs[]") List<String> imgs
			) {
		
		
		for(int i = 0; i<imgs.size(); i++) {
			String img = imgs.get(i);
			System.out.println(img);
		}
		
		return "ok";
	}
	
	
	
	@PostMapping("save")
	public String save(
			@RequestParam(value="type") String shop_type,
			@RequestParam(value="name") String shop_name,
			@RequestParam(value="ceo") String shop_ceo,
			@RequestParam(value="bs_code") String shop_bs_code,
			@RequestParam(value="zonecode") String shop_zonecode,
			@RequestParam(value="addr1") String shop_addr1,
			@RequestParam(value="addr2") String shop_addr2,
			@RequestParam(value="tel") String shop_tel,
			@RequestParam(value="content") String shop_content,
			@RequestParam(value="img_url") String img_url,
			@RequestParam(value="detail_imgs[]") List<String> detail_imgs 
		) {
		
		
		
		String uuid = UUID.randomUUID().toString();
		
		Shop shop = new Shop();
		shop.setShop_uuid(uuid);
		shop.setShop_type(shop_type);
		shop.setShop_name(shop_name);
		shop.setShop_ceo(shop_ceo);
		shop.setShop_bs_code(shop_bs_code);
		shop.setShop_zonecode(shop_zonecode);
		shop.setShop_addr1(shop_addr1);
		shop.setShop_addr2(shop_addr2);
		shop.setShop_tel(shop_tel);
		shop.setShop_content(shop_content);
		shop.setShop_main_img_url(img_url);
		
		
		shopService.saveWithImages(shop, detail_imgs);
		
		return "ok";
	}
}
