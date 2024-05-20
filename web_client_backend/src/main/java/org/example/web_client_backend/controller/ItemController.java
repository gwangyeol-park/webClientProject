package org.example.web_client_backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.web_client_backend.Entity.Item;
import org.example.web_client_backend.service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/items")
    public List<Item> getAllItems() {
        return itemService.getAllItem();
    }

    @GetMapping("/items/myPage/{userName}")
    public ArrayList<Item> getAllItemsByAuthor(@PathVariable String userName){
        return itemService.getAllItemByAuthor(userName);
    }

    @GetMapping("items/{id}")
    public Optional<Item> getItemById(@PathVariable String id) {
        return itemService.getItem(id);
    }

    @PostMapping("items")
    public Item createItems(@RequestBody Item item){
        return itemService.createItem(item);
    }

    @PutMapping("items/{id}")
    public Item updateItem(@PathVariable String id, @RequestBody Item item) {
        return itemService.updateItem(id, item);
    }

    @DeleteMapping("items/{id}")
    public void deleteItem(@PathVariable String id) {
        itemService.deleteItemById(id);
    }
}
