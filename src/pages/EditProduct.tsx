import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import type { Product } from "./Interface/product";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Omit<Product, "id"> | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const products: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const existing = products.find((p) => p.id === Number(id));

    if (existing) {
      const { id: _id, ...rest } = existing;
      setProduct(rest);
    }
  }, [id]);

  if (!product) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Product not found</Typography>
      </Container>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prev) =>
      prev
        ? {
            ...prev,
            [name]: name === "price" ? Number(value) : value,
          }
        : prev
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const products: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const updatedProducts = products.map((p) =>
      p.id === Number(id) ? { ...p, ...product } : p
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setMessage(" product edited succesfully")

    setTimeout(()=>{navigate("/")},1000) // go back to products
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Edit Product
          </Typography>

          {product.image && (
            <img
              src={product.image}
              alt="Preview"
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 16,
              }}
            />
          )}

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Product Name"
                name="name"
                value={product.name}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Category"
                name="category"
                value={product.category}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Image URL"
                name="image"
                value={product.image}
                onChange={handleChange}
                fullWidth
              />

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" onClick={() => navigate(-1)}>
                  Cancel
                </Button>

                <Button type="submit" variant="contained">
                  Update
                </Button>
              </Stack>
            </Stack>
          </form>
          {message}

        </CardContent>
      </Card>
    </Container>
  );
};

export default EditProduct;
