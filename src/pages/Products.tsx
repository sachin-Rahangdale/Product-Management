import type { Product } from "./Interface/product";

const Products = () => {
  const storedProducts = localStorage.getItem("products");

  const products: Product[] = storedProducts
    ? JSON.parse(storedProducts)
    : [];

  return (
    <div>
      <h2>Product List</h2>

      {products.length === 0 && <p>No products found</p>}

      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <img src={product.image} alt={product.name} width="100" />
        </div>
      ))}
    </div>
  );
};

export default Products;
