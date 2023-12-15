import ItemTable from "./components/table/table";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "./item.page.module.scss";
import { useState } from "react";

import RegisterForm from "./components/register/register-form";
import Modal from "../shared/components/modal/modal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "24ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const ItemPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.content}>
        <Button
          variant="contained"
          startIcon={<AddOutlinedIcon />}
          onClick={() => setIsModalOpen(true)}
        >
          Create item
        </Button>
        <div className={styles.filter}>
          <Button variant="outlined" color="primary" startIcon={<IosShareOutlinedIcon />}>
            Export
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by title, spec or ball in count"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton>
            <FilterAltOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <ItemTable />
      <Modal title="Create item" isOpened={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <RegisterForm />
      </Modal>
    </>
  );
};

export default ItemPage;
