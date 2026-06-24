package com.kousic.inventory.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.kousic.inventory.model.Product;
import com.kousic.inventory.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public Product saveProduct(Product product) {
        return repository.save(product);
    }

    public List<Product> getAllProducts() {
        return repository.findAll();
    }

   public Product getProductById(Long id) {
    return repository.findById(id)
            .orElseThrow(() ->
                    new RuntimeException("Product not found"));
}

    public void deleteProduct(Long id) {
        if(repository.existsById(id)) {
            repository.deleteById(id);
        }
    }
}