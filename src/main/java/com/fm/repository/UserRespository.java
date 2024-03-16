package com.fm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fm.dto.User;

public interface UserRespository extends JpaRepository<User, Integer>{

}
