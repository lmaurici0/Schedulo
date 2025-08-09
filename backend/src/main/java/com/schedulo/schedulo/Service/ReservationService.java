package com.schedulo.schedulo.Service;

import com.schedulo.schedulo.Repository.ReservationRepository;
import com.schedulo.schedulo.Repository.RoomRepository;
import com.schedulo.schedulo.Repository.UserRepository;
import com.schedulo.schedulo.entity.Reservation;
import com.schedulo.schedulo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoomRepository roomRepository;

    public Reservation saveReservation(Reservation reservation) {
        if (reservation.getStartTime().isAfter(reservation.getEndTime())) {
            throw new IllegalArgumentException("Start time must be before end time");
        }

        if (userRepository.findById(reservation.getUser().getId()).isEmpty()) {
            throw new RuntimeException("User not found");
        }
        if (roomRepository.findById(reservation.getRoom().getId()).isEmpty()) {
            throw new RuntimeException("Room not found");
        }
        
        return reservationRepository.save(reservation);
    }


    public List<Reservation> findReservationsByUserId(Long userId) {
        return reservationRepository.findByUserId(userId);
    }

    public List<Reservation> findReservationsByDateRange(LocalDateTime start, LocalDateTime end) {
        return reservationRepository.findByStartTimeBetween(start, end);
    }

}
