import { AppBar, Toolbar } from "@mui/material";
import { logo } from "../utils/constant";
import SearchFeed from "./SearchFeed";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          padding: "1.5rem 0rem",
        }}
      >
        <img
          src={logo}
          height={45}
          style={{
            marginRight: "auto",
          }}
        />

        <SearchFeed />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
