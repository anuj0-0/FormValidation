package com.fm.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fm.dto.User;
import com.fm.service.UserService;
import com.fm.util.ResponseStructure;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class Usercontroller {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/save")
	public ResponseEntity<ResponseStructure<User>> SaveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}

	@GetMapping(value = "/all")
	public ResponseEntity<ResponseStructure<List<User>>> getAllUsers() {
		return userService.getAllUsers();
	}
}
