import { AppBar, Toolbar } from "@mui/material";
import { logo } from "../utils/constant";
import SearchFeed from "./Search";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate=useNavigate()
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          padding: "1rem 0rem",
        }}
      >
        <img
        onClick={()=>navigate("/")}
          src={logo}
          height={45}
          style={{
            marginLeft:"1rem",
            marginRight: "auto",
          }}
        />

        <SearchFeed />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
