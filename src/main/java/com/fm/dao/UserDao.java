package com.fm.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fm.dto.User;
import com.fm.repository.UserRespository;

@Repository
public class UserDao {

	@Autowired
	UserRespository userRespository;

	public User saveUser(User user) {
		return userRespository.save(user);
	}
	
	public List<User> getAllUsers() {
		return userRespository.findAll();
	}


}
