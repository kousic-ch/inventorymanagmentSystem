package com.kousic.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.kousic.inventory.model.Product;
import com.kousic.inventory.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping
    public Product addProduct(
            @RequestBody Product product) {
        return service.saveProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/{id}")
    public Product getProduct(
            @PathVariable Long id) {
        return service.getProductById(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(
            @PathVariable Long id,
            @RequestBody Product updatedProduct) {

        Product product =
                service.getProductById(id);

        product.setProductName(
                updatedProduct.getProductName());

        product.setCategory(
                updatedProduct.getCategory());

        product.setPrice(
                updatedProduct.getPrice());

        product.setQuantity(
                updatedProduct.getQuantity());

        product.setMinStock(
                updatedProduct.getMinStock());

        return service.saveProduct(product);
    }

    @PutMapping("/{id}/sell/{quantity}")
    public Product sellProduct(
            @PathVariable Long id,
            @PathVariable Integer quantity) {

        Product product =
                service.getProductById(id);

        if(product.getQuantity() < quantity){
            throw new RuntimeException(
                    "Insufficient Stock");
        }

        product.setQuantity(
                product.getQuantity() - quantity);

        return service.saveProduct(product);
    }

    @PutMapping("/{id}/add-stock/{quantity}")
    public Product addStock(
            @PathVariable Long id,
            @PathVariable Integer quantity) {

        Product product =
                service.getProductById(id);

        product.setQuantity(
                product.getQuantity() + quantity);

        return service.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(
            @PathVariable Long id) {
        service.deleteProduct(id);
    }
}