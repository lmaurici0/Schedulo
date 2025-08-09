package com.schedulo.schedulo.Controller;

import com.schedulo.schedulo.Service.ReservationService;
import com.schedulo.schedulo.entity.Reservation;
import com.schedulo.schedulo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @PostMapping("/save/reservation")
    public Reservation save(@RequestBody Reservation reservation) {
        return reservationService.saveReservation(reservation);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Reservation>> getReservationsByUserId(@PathVariable Long userId) {
        List<Reservation> reservations = reservationService.findReservationsByUserId(userId);
        return ResponseEntity.ok(reservations);
    }

    @GetMapping("/between")
    public ResponseEntity<List<Reservation>> getReservationsBetween(
            @RequestParam("start") String start,
            @RequestParam("end") String end) {

        LocalDateTime startDate = LocalDateTime.parse(start);
        LocalDateTime endDate = LocalDateTime.parse(end);
        List<Reservation> reservations = reservationService.findReservationsByDateRange(startDate, endDate);
        return ResponseEntity.ok(reservations);
    }

}
