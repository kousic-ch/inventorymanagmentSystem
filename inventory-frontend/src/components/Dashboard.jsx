function Dashboard({ products }) {

    const totalProducts = products.length;

    const lowStockProducts =
        products.filter(
            p => p.quantity < p.minStock
        ).length;

    const inventoryValue =
        products.reduce(
            (sum, p) =>
                sum + (p.price * p.quantity),
            0
        );

    return (

        <div className="dashboard">

            <div className="card">

                <h3>Total Products</h3>

                <h1>{totalProducts}</h1>

            </div>

            <div className="card">

                <h3>Low Stock Products</h3>

                <h1>{lowStockProducts}</h1>

            </div>

            <div className="card">

                <h3>Inventory Value</h3>

                <h1>₹{inventoryValue}</h1>

            </div>

        </div>

    );
}

export default Dashboard;