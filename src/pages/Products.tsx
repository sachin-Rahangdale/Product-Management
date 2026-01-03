
import { useState } from "react";
import type { Product } from "./Interface/product";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState<Product[]>(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const deleteProduct = (id: number) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <Grid container spacing={3} padding={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardMedia
              component="img"
              height="180"
              image={product.image}
              alt={product.name}
            />

            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {product.name}
              </Typography>

              <Typography color="text.secondary">
                Category: {product.category}
              </Typography>

              <Typography color="primary" fontWeight="bold" mt={1}>
                ₹ {product.price}
              </Typography>

              <Stack direction="row" spacing={2} mt={2}>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/edit/${product.id}`}
                >
                  Edit
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
