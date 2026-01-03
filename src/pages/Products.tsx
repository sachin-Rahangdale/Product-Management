
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
    <Grid item xs={12} sm={6} md={3} key={product.id}>
      <Card
        sx={{
          height: 420,                 // 👈 FIXED HEIGHT (MOST IMPORTANT)
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        {/* IMAGE */}
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: 180,               // 👈 SAME image height
            objectFit: "cover",
          }}
        />

        {/* CONTENT */}
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* TEXT */}
          <div>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.name}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Category: {product.category}
            </Typography>

            <Typography color="primary" fontWeight="bold" mt={1}>
              ₹ {product.price}
            </Typography>
          </div>

          {/* BUTTONS */}
          <Stack direction="row" spacing={1} mt={2}>
            <Button
              fullWidth
              variant="contained"
              component={Link}
              to={`/edit/${product.id}`}
            >
              Edit
            </Button>

            <Button
              fullWidth
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
