package com.anuruddh.portfolio.mail;

import com.anuruddh.portfolio.api.dto.ContactRequest;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class ContactEmailService {

  private final JavaMailSender mailSender;

  @Value("${portfolio.contact.inbox}")
  private String inboxAddress;

  @Value("${spring.mail.username}")
  private String mailUsername;

  @Value("${spring.mail.password:}")
  private String mailPassword;

  public ContactEmailService(JavaMailSender mailSender) {
    this.mailSender = mailSender;
  }

  public void sendContactEmail(ContactRequest body) {
    if (mailPassword == null || mailPassword.isBlank()) {
      throw new IllegalStateException(
          "Email is not configured. Set the MAIL_PASSWORD environment variable to your Gmail App Password.");
    }

    try {
      var message = mailSender.createMimeMessage();
      var helper = new MimeMessageHelper(message, true, "UTF-8");

      helper.setFrom(mailUsername);
      helper.setTo(inboxAddress);

      String visitorName = body.name() != null ? body.name().trim() : "";
      String visitorEmail = body.email() != null ? body.email().trim() : "";
      String subject =
          "[Portfolio] "
              + (visitorName.isEmpty() ? "New message" : "Message from " + visitorName);

      helper.setSubject(subject);

      if (!visitorEmail.isEmpty()) {
        helper.setReplyTo(visitorEmail);
      }

      String when =
          DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm z")
              .withZone(ZoneId.systemDefault())
              .format(java.time.Instant.now());

      String text =
          """
          New message from your portfolio contact form

          Time: %s

          Name: %s
          Email: %s

          Message:
          %s
          """
              .formatted(
                  when,
                  visitorName.isEmpty() ? "(not provided)" : visitorName,
                  visitorEmail.isEmpty() ? "(not provided)" : visitorEmail,
                  body.message());

      helper.setText(text, false);
      mailSender.send(message);
    } catch (MailException e) {
      throw e;
    } catch (Exception e) {
      throw new MailSendException("Failed to send contact email", e);
    }
  }
}
