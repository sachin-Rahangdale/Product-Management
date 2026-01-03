import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export const AddProduct = () => {
  const [product, setProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    category: "",
    image: "",
  });

  const [ message, setMessage]= useState("")

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const newProduct: Product = {
      id: Date.now(),
      ...product,
    };

    localStorage.setItem(
      "products",
      JSON.stringify([...existingProducts, newProduct])
    );

    setProduct({
      name: "",
      price: 0,
      category: "",
      image: "",
    });
    setMessage("new product succesfully added")

    setTimeout(()=>{navigate('/')}, 1000)
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Add Product
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
                required
              />

              <TextField
                label="Price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                fullWidth
                required
              />

              <TextField
                label="Category"
                name="category"
                value={product.category}
                onChange={handleChange}
                fullWidth
                required
              />

              <TextField
                label="Image URL"
                name="image"
                value={product.image}
                onChange={handleChange}
                fullWidth
              />

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  variant="outlined"
                  onClick={() =>
                    setProduct({
                      name: "",
                      price: 0,
                      category: "",
                      image: "",
                    })
                  }
                >
                  Reset
                </Button>

                <Button type="submit" variant="contained">
                  Add Product
                </Button>
              </Stack>
            </Stack>
            {message}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};
