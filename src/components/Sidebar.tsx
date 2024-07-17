import { Button, Stack, Typography } from "@mui/material";
import { categories } from "../utils/constant";



type SidebarProp={
  selected:string,
  setSelected:(name:string)=>void
}

const Sidebar = ({selected,setSelected}:SidebarProp) => {

  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" },
      }}
    >
      {categories.map((ele, idx) => (
        <Button
          variant="text"
          key={idx}
          sx={{
            borderRadius: "20px",
            margin: "0.5rem",
            justifyContent: "start",
            backgroundColor: selected === ele.name ? " rgb(218, 0, 0)" : "none",
            gap: "1rem",
            color: "white",
            transition: "transform 0.3s ease-in-out",
            // padding:"0rem 0.2rem",
            ":hover": {
              backgroundColor: " rgb(218, 0, 0)",
            },
          }}
          onClick={() => {
            setSelected(ele.name);
          }}
        >
          <ele.icon />
          <Typography variant="body1" fontWeight={"bold"}>
            {ele.name}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
