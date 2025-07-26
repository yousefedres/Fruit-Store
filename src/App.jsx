import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Products from "./Pages/products";
import About from "./Pages/about";
import Footer from "./Components/Footer";
import Product from "./Pages/Product";
import Shopping from "./Components/Shopping";
import { ShoppingProvider } from "./ContextApi/Context";
import ContactUsPage from "./Pages/ContactUsPage";
import { CommentProvider } from "./ContextApi/ContextComment";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CommentProvider>
          <ShoppingProvider>
            <Header />
            <div className="">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactUs" element={<ContactUsPage />} />
                <Route path="/Shopping" element={<Shopping />} />
                <Route
                  path="/product/:productId/:productTitle"
                  element={<Product />}
                />
              </Routes>
            </div>
            <Footer />
          </ShoppingProvider>
        </CommentProvider>{" "}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
