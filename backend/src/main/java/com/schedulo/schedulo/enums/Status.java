package com.schedulo.schedulo.enums;
import com.fasterxml.jackson.annotation.JsonCreator;

public enum Status {
    ACTIVE,
    CANCELED,
    RESCHEDULED;

    @JsonCreator
    public static Status fromString(String value) {
        if (value == null) return null;
        return Status.valueOf(value.toUpperCase());
    }
}
