package com.my.ldh_travel_boot.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.my.ldh_travel_boot.vo.User;

@Repository
public class UserDao {
	
	@Autowired
	SqlSession s;
	
	/*
	 	함수 만드는 방법
	 	1. void 함수 생성
	 	2. 로직
	 	3. 매개변수 (로직이 수행하는데 필요한 데이터가 있지 않을까?)
	 	4. 리턴 (로직 수행후 내가 주도적으로 함수에 리턴값 줌.)
	 	
	 */
	
	
	
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
