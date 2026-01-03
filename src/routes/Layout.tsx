import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  const logout=()=>{
    localStorage.setItem('user','')
  }
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
          <Button
            sx={{ color: "white", fontWeight: "bold" }}
            component={Link}
           onClick={logout}
          >
           Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 3 }}>
        <Outlet />
      </Box>
      <Box sx={{ padding: 1 }}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
