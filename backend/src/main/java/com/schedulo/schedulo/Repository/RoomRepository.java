package com.schedulo.schedulo.Repository;

import com.schedulo.schedulo.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RoomRepository extends JpaRepository<Room, Long> {
}
