import {
    deleteProduct,
    sellProduct,
    addStock
} from "../services/productService";

function ProductList({
    products,
    refreshProducts,
    setSelectedProduct
}) {

    const handleDelete = async (id) => {

        if (window.confirm("Delete Product?")) {

            await deleteProduct(id);

            refreshProducts();
        }
    };

    const handleSell = async (id) => {

        const quantity =
            prompt("Enter sold quantity");

        if(quantity){

            await sellProduct(
                id,
                quantity
            );

            refreshProducts();
        }
    };

    const handleAddStock = async (id) => {

        const quantity =
            prompt("Enter quantity to add");

        if(quantity){

            await addStock(
                id,
                quantity
            );

            refreshProducts();
        }
    };

    return (

        <table>

            <thead>

            <tr>

                <th>Code</th>

                <th>Name</th>

                <th>Category</th>

                <th>Quantity</th>

                <th>Price</th>

                <th>Min Stock</th>

                <th>Added</th>

                <th>Updated</th>

                <th>Status</th>

                <th>Actions</th>

            </tr>

            </thead>

            <tbody>

            {

                products.map(product => (

                    <tr key={product.id}>

                        <td>
                            {product.productCode}
                        </td>

                        <td>
                            {product.productName}
                        </td>

                        <td>
                            {product.category}
                        </td>

                        <td>
                            {product.quantity}
                        </td>

                        <td>
                            ₹{product.price}
                        </td>

                        <td>
                            {product.minStock}
                        </td>

                        <td>
                            {
                                product.addedDate
                                ?
                                new Date(
                                product.addedDate
                                ).toLocaleString()
                                :
                                "-"
                            }
                        </td>

                        <td>
                            {
                                product.updatedDate
                                ?
                                new Date(
                                product.updatedDate
                                ).toLocaleString()
                                :
                                "-"
                            }
                        </td>

                        <td>

                            {
                                product.quantity <
                                product.minStock

                                ?

                                "⚠ Low Stock"

                                :

                                "Available"
                            }

                        </td>

                        <td>

                            <button
                            onClick={() =>
                            setSelectedProduct(
                            product
                            )}>
                            Edit
                            </button>

                            <button
                            onClick={() =>
                            handleAddStock(
                            product.id
                            )}>
                            Add Stock
                            </button>

                            <button
                            onClick={() =>
                            handleSell(
                            product.id
                            )}>
                            Sell
                            </button>

                            <button
                            onClick={() =>
                            handleDelete(
                            product.id
                            )}>
                            Delete
                            </button>

                        </td>

                    </tr>
                ))
            }

            </tbody>

        </table>
    );
}

export default ProductList;