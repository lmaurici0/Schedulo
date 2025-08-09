package com.schedulo.schedulo.entity;

import com.schedulo.schedulo.enums.Function;
import com.schedulo.schedulo.enums.Gender;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table (name = "user")

public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    @Column (name = "user_id")
    private Long id;

    @Column (name = "user_password")
    private String password;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name="user_function")
    private Function function;

    private String username;
    private String email;
    private String phone;
    private Gender gender;
}
