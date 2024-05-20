package org.example.web_client_backend.service;

import lombok.RequiredArgsConstructor;
import org.example.web_client_backend.Entity.User;
import org.example.web_client_backend.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public Optional<User> getUser(User user){
        return userRepository.findByEmail(user.getEmail());
    }

    public User createUser(User user){
        return userRepository.save(user);
    }
}
