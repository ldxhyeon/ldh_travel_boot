package com.my.ldh_travel_boot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.ldh_travel_boot.dao.UserDao;
import com.my.ldh_travel_boot.vo.User;

@Service
public class UserService {
	
	@Autowired
	UserDao userDao;
	
	
	public User findByIdAndPw(User user) {
		return userDao.findByIdAndPw(user);
	}
	
	public User findById(String id) {
		return userDao.findById(id);
	}
	
	public User findByNickname(String nickname) {
		return userDao.findByNickname(nickname);
	}
	
	public int save(User user) {
		return userDao.save(user);
	}

}
