package com.anuruddh.portfolio.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.io.InputStream;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProfileController {

  private final ObjectMapper objectMapper;

  public ProfileController(ObjectMapper objectMapper) {
    this.objectMapper = objectMapper;
  }

  @GetMapping(value = "/profile", produces = MediaType.APPLICATION_JSON_VALUE)
  public JsonNode profile() throws IOException {
    ClassPathResource resource = new ClassPathResource("profile.json");
    try (InputStream in = resource.getInputStream()) {
      return objectMapper.readTree(in);
    }
  }
}
