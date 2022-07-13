import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  addProduct,
  editProduct,
  getOneProduct,
} from "../../Redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   name: data.get('name'),
    //   price: data.get('price'),
    //   available: data.get('available'),
    // });
    dispatch(editProduct(id, updatedProduct, navigate));
  };
  const [avail, setAvail] = React.useState(false);
  const { id } = useParams();
  const oldProduct = useSelector((state) => state.productReducer.oneProduct);
  const [updatedProduct, setUpdatedProduct] = React.useState(oldProduct);
  React.useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);
  React.useEffect(() => {
    setUpdatedProduct(oldProduct);
  }, [oldProduct]);
  console.log(updatedProduct.available);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            EDIT PRODUCT
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                  value={updatedProduct.name}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                  value={updatedProduct.price}
                  required
                  fullWidth
                  id="price"
                  label="price"
                  name="price"
                  type="Number"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          available: !updatedProduct.available,
                        })
                      }
                      checked={oldProduct.available}
                      color="primary"
                    />
                  }
                  label="availability"
                  name="available"
                />
                <input type="checkbox" checked={updatedProduct.available} />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save PRODUCT
            </Button>
          </Box>
        </Box>
        <Link to="/">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cancel
          </Button>
        </Link>
      </Container>
    </ThemeProvider>
  );
}
