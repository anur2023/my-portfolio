package com.anuruddh.portfolio.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ContactRequest(
    @Size(max = 120) String name,
    @Size(max = 254)
        @Pattern(
            regexp = "^$|^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
            message = "Invalid email")
        String email,
    @NotBlank @Size(max = 8000) String message) {}
