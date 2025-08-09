package com.schedulo.schedulo.Repository;

import com.schedulo.schedulo.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByUserId(Long userId);

    List<Reservation> findByStartTimeBetween(LocalDateTime start, LocalDateTime end);
}
