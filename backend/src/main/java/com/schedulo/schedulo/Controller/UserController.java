package com.schedulo.schedulo.Controller;

import com.schedulo.schedulo.Service.UserService;
import com.schedulo.schedulo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Email já cadastrado");
        }
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User foundUser = userService.findByEmail(user.getEmail());
        if (foundUser == null) {
            return ResponseEntity.badRequest().body("Usuário não encontrado");
        }
        if (!foundUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Senha inválida");
        }
        return ResponseEntity.ok(foundUser);
    }
}
