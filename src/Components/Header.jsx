/* eslint-disable no-unused-vars */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { FaLeaf, FaRegUserCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { MdDarkMode, MdLightMode, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShoppingContext from "../ContextApi/Context";
import DialogLogin from "./DialogLogin";
import { useState } from "react";
import { useEffect } from "react";
import { ColorModeContext } from "../theme";
import { useTheme } from "@mui/material";

const pages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  // { id: 3, name: "Shop", link: "/shop" },
  { id: 4, name: "About", link: "/about" },
  { id: 5, name: "Contact Us", link: "/contactUs" },
];

function Header() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const MotionLink = motion(Link);
  const MotionIconButton = motion(IconButton);
  const MotionContainer = motion(Container);
  const { arrayShopping, setArrayShopping } = useContext(ShoppingContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="static"
      className=" !text-gray-600 !font-secondary font-bold !shadow-[0px_0px_250px_0px_var(--color-secondary)]"
      sx={{ backgroundColor: theme.palette.neutral.main }}
    >
      <MotionContainer
        className="px-4"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.5, duration: 0.5 }}
        maxWidth="xl"
      >
        <Toolbar disableGutters className="flex justify-between">
          {/* Logo */}
          <Box className="flex items-center grow lg:grow-0">
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { md: "flex" },
                textDecoration: "none",
              }}
              className="text-primary !font-secondary flex items-center gap-1 !text-xl !mr-2 "
            >
              FRUIT{" "}
              <span className="text-[12px] text-secondary !font-secondary">
                STORE
              </span>
            </Typography>
            <FaLeaf className="mr-3 text-green-500" />
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className="!font-bold"
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                component={MotionLink}
                to={page.link}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
                className="px-3 hover:!text-primary hover:shadow-[0_3px_0_-1px_#ef4444] !text-gray-600 !font-secondary !font-bold"
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Cart Icon */}
          <div className="flex flex-row items-center justify-center">
            {/*  */}

            <Button
              onClick={handleClickOpen}
              className="flex items-center ml-2 relative  !text-gray-500 focus:!bg-transparent hover:!bg-transparent"
            >
              <FaRegUserCircle className="cursor-pointer hover:!text-[#de2c4d] text-2xl" />
            </Button>
            <DialogLogin open={open} handleClose={handleClose} />

            {/*  */}

            <Link to="/Shopping">
              <Box className="relative flex items-center ml-2 text-2xl">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <MdOutlineShoppingCart className="cursor-pointer hover:!text-[#de2c4d]" />
                </motion.div>
                <div className="absolute z-50 top-[-30%] left-[-50%]  w-5 h-5 rounded-full bg-primary opacity-80 text-white text-[14px] flex justify-center items-center">
                  {arrayShopping.length}
                </div>
              </Box>
            </Link>

            {/* Dark Mode */}
            <div>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                  className="hover:!text-primary"
                >
                  <MdLightMode />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                  className="hover:!text-primary"
                >
                  <MdDarkMode />
                </IconButton>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MotionIconButton
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              size="large"
              aria-label="open mobile menu"
              onClick={() => setIsOpen((prev) => !prev)}
              color="inherit"
              className="hover:!text-[#de2c4d] hover:!bg-white"
            >
              <MenuIcon />
            </MotionIconButton>

            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  ref={menuRef}
                  key="mobile-menu"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-20 left-0 w-full bg-[#de2c4d] rounded-2xl p-4 flex flex-col items-center gap-5 text-white uppercase z-50 drop-shadow-menu"
                >
                  {pages.map((page) => (
                    <motion.li
                      key={page.id}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link
                        to={page.link}
                        className="text-lg font-medium tracking-wider"
                      >
                        {page.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </Box>
        </Toolbar>
      </MotionContainer>
    </AppBar>
  );
}

export default Header;
