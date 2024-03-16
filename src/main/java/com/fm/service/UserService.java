package com.fm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fm.dao.UserDao;
import com.fm.dto.User;
import com.fm.util.ResponseStructure;

@Service
public class UserService {

	@Autowired
	UserDao userDao;

	public ResponseEntity<ResponseStructure<User>> saveUser(User newUser) {
		System.out.println(newUser.getDate());
		ResponseStructure<User> responseStructure = new ResponseStructure<>();
		responseStructure.setStatus(HttpStatus.CREATED.value());
		responseStructure.setMessage("Successfully Saved");
		responseStructure.setData(userDao.saveUser(newUser));
		return new ResponseEntity<ResponseStructure<User>>(responseStructure, HttpStatus.CREATED);
	}
	
	
	public ResponseEntity<ResponseStructure<List<User>>> getAllUsers() {
		List<User> list = userDao.getAllUsers();
			ResponseStructure<List<User>> responseStructure = new ResponseStructure<>();
			responseStructure.setStatus(HttpStatus.OK.value());
			responseStructure.setMessage("Fetched All Users data");
			responseStructure.setData(list);
			return new ResponseEntity<ResponseStructure<List<User>>>(responseStructure, HttpStatus.OK);
		
	}

}
