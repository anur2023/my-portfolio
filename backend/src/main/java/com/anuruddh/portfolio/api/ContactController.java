package com.anuruddh.portfolio.api;

import com.anuruddh.portfolio.api.dto.ContactRequest;
import com.anuruddh.portfolio.mail.ContactEmailService;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
public class ContactController {

  private final ContactEmailService contactEmailService;

  public ContactController(ContactEmailService contactEmailService) {
    this.contactEmailService = contactEmailService;
  }

  @PostMapping("/contact")
  public ResponseEntity<Map<String, String>> contact(@Valid @RequestBody ContactRequest body) {
    contactEmailService.sendContactEmail(body);
    return ResponseEntity.ok(Map.of("status", "ok"));
  }
}
