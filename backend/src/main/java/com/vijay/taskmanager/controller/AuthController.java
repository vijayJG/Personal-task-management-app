package com.vijay.taskmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vijay.taskmanager.entity.User;
import com.vijay.taskmanager.repository.UserRepository;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
private UserRepository userRepository;
   @PostMapping("/register")
public User register(@RequestBody User user) {
    return userRepository.save(user);
}

    

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User existing = userRepo.findByUsername(user.getUsername());

        if (existing != null && existing.getPassword().equals(user.getPassword())) {
            return existing;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}