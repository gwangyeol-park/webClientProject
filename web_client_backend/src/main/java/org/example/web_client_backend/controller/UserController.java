package org.example.web_client_backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.web_client_backend.Entity.User;
import org.example.web_client_backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public boolean checkLogin(@RequestBody User user) {
        Optional<User> findUser = userService.getUser(user);
        if(findUser.isEmpty()){
            return false;
        }
        else {
            if(user.getPassword().equals(findUser.get().getPassword())){
                return true;
            }
        }
        return  false;
    }

    @PostMapping("/signup")
    public void signUp(@RequestBody User user) {
        if (!user.getEmail().isEmpty() && !user.getPassword().isEmpty()) {
            if(!userService.getUser(user).isPresent()) {
                userService.createUser(user);
            }
        }
    }
}
