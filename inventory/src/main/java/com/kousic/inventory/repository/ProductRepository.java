package com.kousic.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kousic.inventory.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
