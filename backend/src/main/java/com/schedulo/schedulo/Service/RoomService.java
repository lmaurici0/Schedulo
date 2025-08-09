package com.schedulo.schedulo.Service;

import com.schedulo.schedulo.Repository.RoomRepository;
import com.schedulo.schedulo.entity.Room;
import com.schedulo.schedulo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }
}
