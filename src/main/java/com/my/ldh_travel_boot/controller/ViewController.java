package com.my.ldh_travel_boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
	
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
	public String addshop() {
		
		return "add-shop";
	}
	
	@GetMapping("detail-shop")
	public String detailShop() {
		
		return "detail-shop";
	}
	
}
