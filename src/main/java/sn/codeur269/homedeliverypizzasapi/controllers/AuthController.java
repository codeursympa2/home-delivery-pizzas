package sn.codeur269.homedeliverypizzasapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sn.codeur269.homedeliverypizzasapi.entities.User;
import sn.codeur269.homedeliverypizzasapi.repositories.UserRepository;

@RestController
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    //@CrossOrigin(origins = "http://localhost:8100")
    @PostMapping("/auth")
    public User login(@RequestBody User user) {
        return this.userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());
    }

}
