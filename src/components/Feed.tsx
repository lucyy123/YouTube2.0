import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../utils/fetchingData";
import { FetchReponseType } from "../vite-env";
import Loader from "./Loader";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [selected, setSelected] = useState<string>("New");
  const [dataArr, setdataArr] = useState<FetchReponseType>();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData({
      q: selected,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    })
      .then((res) => {
        setdataArr(res);
      })
      .catch((err) => console.log(err));
  }, [dispatch, selected]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row", backgroundColor: "#000" },
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
          sx={{
            mt: "0.5rem",
            fontSize: "10px",
            color: "#fff",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          Copoyright 2024 Lucyy123
        </Typography>
      </Box>

      <Box
        width={"100%"}
        sx={{
          height: { sx: "auto", md: "92vh" },
        }}
      >
        <Typography
          fontSize={"2rem"}
          sx={{
            mb: "1rem",
            padding:"0rem 0.5rem"
          }}
          fontWeight={"bold"}
          color="#fff"
        >
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
        <Box
          sx={{
            maxHeight: "90%",
            overflowY: "auto",
          }}
        >
          {dataArr == undefined ? (
            <Loader></Loader>
          ) : (
            <Videos videos={dataArr!} />
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default Feed;
