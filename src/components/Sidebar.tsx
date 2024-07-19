import { Button, Stack, Typography } from "@mui/material";
import { categories } from "../utils/constant";

type SidebarProp = {
  selected: string;
  setSelected: (name: string) => void;
};

const Sidebar = ({ selected, setSelected }: SidebarProp) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" },
        margin: "0rem 1rem",
      }}
    >
      {categories.map((ele, idx) => (
        <Button
          variant="text"
          key={idx}
          sx={{
            borderRadius:"20px",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center", 
            justifyContent: {xs:"center",sm:"center",md:"start"},
            backgroundColor: selected === ele.name ? " rgb(218, 0, 0)" : "none",
            color: "white",
            transition: "transform 0.3s ease",
            gap:"1rem",
            padding: "7px 15px",
            margin: "10px 0px",
            outline: "none",
            border: "none",
            ":hover": {
              backgroundColor: " rgb(218, 0, 0)",
            },
          }}
          /**  font-weight: bold !important;
  text-transform: capitalize,
  display: flex;
  align-items: center;
  justify-content: start;
  cursor:pointer;
  background: transparent;
  outline: none;
  border: none;

  padding: 7px 15px;
  margin: 10px 0px;
  border-radius: 20px;
  transition: all 0.3s ease; */
          onClick={() => {
            setSelected(ele.name);
          }}
        >
          <ele.icon
            sx={{
              marginLeft:{xs:"none", sm:"none", md:"0.85rem"},
            }}
          />
          <Typography
            sx={{
              backgroundColor:
                selected === ele.name ? " rgb(218, 0, 0)" : "none",

              display: { xs: "none", sm: "none", md: "flex" },
            }}
            variant="body1"
            fontWeight={"bold"}
          >
            {ele.name}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
