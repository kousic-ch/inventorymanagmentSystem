import { useEffect, useState } from "react";

import {
    addProduct,
    updateProduct
} from "../services/productService";

function ProductForm({
    refreshProducts,
    selectedProduct,
    setSelectedProduct
}) {

    const [product, setProduct] = useState({
        productName: "",
        category: "",
        quantity: "",
        price: "",
        minStock: ""
    });

    useEffect(() => {

        if(selectedProduct){

            setProduct({
                productName:
                    selectedProduct.productName,

                category:
                    selectedProduct.category,

                quantity:
                    selectedProduct.quantity,

                price:
                    selectedProduct.price,

                minStock:
                    selectedProduct.minStock
            });
        }

    }, [selectedProduct]);

    const handleChange = (e) => {

        setProduct({

            ...product,

            [e.target.name]:
            e.target.value
        });
    };

    const clearForm = () => {

        setProduct({

            productName: "",

            category: "",

            quantity: "",

            price: "",

            minStock: ""
        });

        setSelectedProduct(null);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(selectedProduct){

            await updateProduct(
                selectedProduct.id,
                product
            );

            alert(
                "Product Updated Successfully"
            );

        } else {

            await addProduct(product);

            alert(
                "Product Added Successfully"
            );
        }

        refreshProducts();

        clearForm();
    };

    return (

        <form onSubmit={handleSubmit}>

            <h2>

                {
                    selectedProduct

                    ?

                    "Edit Product"

                    :

                    "Add Product"
                }

            </h2>

            <input
                name="productName"
                placeholder="Product Name"
                value={product.productName}
                onChange={handleChange}
                required
            />

            <input
                name="category"
                placeholder="Category"
                value={product.category}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={product.quantity}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="minStock"
                placeholder="Minimum Stock"
                value={product.minStock}
                onChange={handleChange}
                required
            />

            <button type="submit">

                {
                    selectedProduct

                    ?

                    "Update Product"

                    :

                    "Add Product"
                }

            </button>

            {
                selectedProduct && (

                    <button
                        type="button"
                        onClick={clearForm}
                    >
                        Cancel
                    </button>
                )
            }

        </form>
    );
}

export default ProductForm;