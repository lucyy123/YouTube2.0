import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchingData";
import Sidebar from "./Sidebar";
import { FetchReponseType } from "../vite-env";

const Feed = () => {
  const [selected, setSelected] = useState<string>("New");
  const [dataArr,setdataArr]=useState<FetchReponseType>()

  useEffect(() => {
    fetchData(selected)
      .then((res) => {

        if(res){
          setdataArr(res)
        }
      })  .catch((err) => console.log(err));
  }, [selected]);

// console.log(dataArr)

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          backgroundColor: "#000",
        }}
      >
        <Sidebar selected={selected} setSelected={setSelected} />
        <Typography
          variant="body2"
          sx={{ mt: "0.5rem", fontSize: "10px", color: "#fff" }}
        >
          Copoyright 2024 Lucyy123
        </Typography>
      </Box>

      <Box margin={"0 2rem "} width={"100%"}>
        <Typography fontSize={"2rem"} fontWeight={"bold"}>
          <span
            style={{
              marginRight: "0.6rem",
              color: "red",
            }}
          >
            {selected}
          </span>
          Videos
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
