package com.my.ldh_travel_boot.controller;

import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.my.ldh_travel_boot.service.UserService;
import com.my.ldh_travel_boot.vo.User;

@RestController
@RequestMapping(value="u")
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	
	@PostMapping("logout")
	public String logout(HttpSession session) {
		
		// 세션파기
		session.invalidate();
		
		return "ok";
		
		// 로그아웃 로직 까지
		
	}
	
	
	@PostMapping("login")
	public User login(
				@RequestParam(value="id") String id,
				@RequestParam(value="pw") String pw,
				HttpSession session
			) {
		
		User user = new User();
		
		user.setId(id);
		user.setPw(pw);
		
		User result = userService.findByIdAndPw(user);
		
		if(result==null) {
			
		}else {
			session.setAttribute("me", result);
		}
		
		return result;
	}
	
	
	@GetMapping("findById")
	public User findById(
				@RequestParam(value="id") String id
			) {
		
		
		User user = userService.findById(id);
			
		return user;
	}
	
	@GetMapping("findByNickname")
	public User findByNickname(
				@RequestParam(value="nickname") String nickname
			) {
		
		
		User user = userService.findByNickname(nickname);
			
		return user;
	}
	
	@PostMapping("save")
	public String save(
				@RequestParam(value="id") String id,
				@RequestParam(value="pw") String pw,
				@RequestParam(value="nick") String nickname,
				@RequestParam(value="addr1") String addr1,
				@RequestParam(value="addr2") String addr2,
				@RequestParam(value="act") String activity
			) {
		
		String uuid = UUID.randomUUID().toString();
		
		User newUser = new User();
		
		newUser.setUser_uuid(uuid);
		newUser.setId(id);
		newUser.setPw(pw);
		newUser.setNickname(nickname);
		newUser.setAddr1(addr1);
		newUser.setAddr2(addr2);
		newUser.setActivity(activity);
		
		userService.save(newUser);
		
		return "ok";
	}

}
