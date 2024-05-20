package org.example.web_client_backend.Repository;

import org.example.web_client_backend.Entity.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ItemRepository extends MongoRepository<Item, String> {
    ArrayList<Item> findAllByAuthor(String author);
}
