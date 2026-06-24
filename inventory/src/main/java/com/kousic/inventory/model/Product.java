package com.kousic.inventory.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Random;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String productCode;

    private String productName;

    private String category;

    private Double price;

    private Integer quantity;

    private Integer minStock;

    private LocalDateTime addedDate;

    private LocalDateTime updatedDate;

    public Product() {}

    @PrePersist
    protected void onCreate() {

        addedDate = LocalDateTime.now();
        updatedDate = LocalDateTime.now();

        productCode = generateProductCode();
    }

    @PreUpdate
    protected void onUpdate() {

        updatedDate = LocalDateTime.now();
    }

    private String generateProductCode() {

        String letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        Random random = new Random();

        StringBuilder code = new StringBuilder();

        for (int i = 0; i < 3; i++) {

            code.append(
                letters.charAt(
                    random.nextInt(letters.length())
                )
            );
        }

        for (int i = 0; i < 2; i++) {

            code.append(random.nextInt(10));
        }

        return code.toString();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getMinStock() {
        return minStock;
    }

    public void setMinStock(Integer minStock) {
        this.minStock = minStock;
    }

    public LocalDateTime getAddedDate() {
        return addedDate;
    }

    public LocalDateTime getUpdatedDate() {
        return updatedDate;
    }
}