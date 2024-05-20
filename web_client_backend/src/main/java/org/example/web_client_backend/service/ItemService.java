package org.example.web_client_backend.service;

import lombok.RequiredArgsConstructor;
import org.example.web_client_backend.Entity.Item;
import org.example.web_client_backend.Repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    public List<Item> getAllItem() {
        return itemRepository.findAll();
    }

    public ArrayList<Item> getAllItemByAuthor(String author) {
        return itemRepository.findAllByAuthor(author);
    }

    public Optional<Item> getItem(String id){
        return itemRepository.findById(id);
    }

    public Item createItem(Item item){
        return itemRepository.save(item);
    }

    public Item updateItem(String id, Item item){
        item.setId(id);
        return itemRepository.save(item);
    }

    public void deleteItemById(String id){
        itemRepository.deleteById(id);
    }
}
