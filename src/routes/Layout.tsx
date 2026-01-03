import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "orange", // 👈 ORANGE
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            My App
          </Typography>

          <Button
            sx={{ color: "white", fontWeight: "bold" }}
            component={Link}
            to="/"
          >
            Home
          </Button>

          <Button
            sx={{ color: "white", fontWeight: "bold" }}
            component={Link}
            to="/add"
          >
            Add Product
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 3 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
