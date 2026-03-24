package com.vijay.taskmanager.controller;

import com.vijay.taskmanager.entity.Task;
import com.vijay.taskmanager.entity.User;
import com.vijay.taskmanager.repository.TaskRepository;
import com.vijay.taskmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    @Autowired
    private TaskRepository taskRepo;

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/{userId}")
    public List<Task> getTasks(@PathVariable Long userId) {
        return taskRepo.findByUser_Id(userId);
    }

    @PostMapping("/{userId}")
    public Task addTask(@PathVariable Long userId, @RequestBody Task task) {
        User user = userRepo.findById(userId).orElseThrow();
        task.setUser(user);
        return taskRepo.save(task);
    }

    @PutMapping("/{id}")
    public Task completeTask(@PathVariable Long id) {
        Task task = taskRepo.findById(id).orElseThrow();
        task.setCompleted(true);
        return taskRepo.save(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskRepo.deleteById(id);
    }
}