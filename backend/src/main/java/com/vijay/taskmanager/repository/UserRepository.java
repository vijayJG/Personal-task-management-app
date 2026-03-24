package com.vijay.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vijay.taskmanager.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}