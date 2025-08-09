package com.schedulo.schedulo.Controller;

import com.schedulo.schedulo.Service.RoomService;
import com.schedulo.schedulo.entity.Room;
import com.schedulo.schedulo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @PostMapping("/save/rooms")
    public Room save(@RequestBody Room room) {
        return roomService.saveRoom(room);
    }
}
