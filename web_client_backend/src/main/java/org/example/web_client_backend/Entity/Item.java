package org.example.web_client_backend.Entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashMap;

@Data
@Document(collection = "item")
public class Item {

    @Id
    private String id;
    private String title;
    private String content;
    private String author;
    private String imgPath;
    private ArrayList<String> userList;
    private ArrayList<String> acceptList;
}
