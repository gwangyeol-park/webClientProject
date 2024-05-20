package org.example.web_client_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

//@EnableMongoRepositories
@SpringBootApplication
public class WebClientBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebClientBackendApplication.class, args);
    }

}
