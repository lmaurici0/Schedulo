package com.schedulo.schedulo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity

public class Room {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    @Column (name = "room_id")
    private Long id;

    @Column (name = "description_room")
    private String description;

    @Column (name = "is_active")
    private Boolean active;

    private int capacity;
}
