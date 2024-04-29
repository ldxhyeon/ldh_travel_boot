package com.my.ldh_travel_boot.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_boot.vo.User;

@Repository
public class UserDao {
	
	@Autowired
	SqlSession s;
	
	
	
	public User findByIdAndPw(User user) {
		return s.selectOne("user.findByIdAndPw",user);
	}
	
	public User findById(String id) {
		return s.selectOne("user.findById",id);
	}
	
	public User findByNickname(String nickname) {
		return s.selectOne("user.findByNickname",nickname);
	}
	
	public int save(User user) {
		return s.insert("user.save",user);
	}
}
