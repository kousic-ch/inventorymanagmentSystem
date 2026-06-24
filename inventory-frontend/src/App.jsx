import { useEffect, useState } from "react";

import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Dashboard from "./components/Dashboard";

import { getProducts } from "./services/productService";

function App() {

    const [products, setProducts] = useState([]);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchProducts = async () => {

        const response = await getProducts();

        setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">

            <h1>
                Inventory Management System
            </h1>

            <Dashboard products={products} />

            <ProductForm
                refreshProducts={fetchProducts}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
            />

            <ProductList
                products={products}
                refreshProducts={fetchProducts}
                setSelectedProduct={setSelectedProduct}
            />

        </div>
    );
}

export default App;