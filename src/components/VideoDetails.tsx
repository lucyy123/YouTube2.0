import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { VIdeoType } from "../vite-env";
import { fetchSingleVideo } from "../utils/fetchingData";
import Loader from "./Loader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoDetails = () => {
  const { id } = useParams();

  const [video, setVideo] = useState<VIdeoType | undefined>(undefined);

  useEffect(() => {
    if (id) {
      fetchSingleVideo(id)
        .then((res) => {
          if (res) {
            setVideo(res);
          } else {
            throw new Error("Video Id is invalid");
          }
        })
        .catch((err) => console.log(err));
    } else {
      throw new Error("Invalid Id");
    }
  }, []);

  if (video == undefined) return <Loader></Loader>;

  return (
    <Box minHeight={"95vh"} bgcolor={"#000"}>
      <Stack direction={{ sx: "column", md: "row" }}>
        <Box
          sx={{
            flex: "1",
          }}
        >
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player "
            />

            <Typography variant="h5" color="#fff" px={2} py={2}>
              {video && video.snippet?.title}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} px={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap:"0.5rem"
                }}
              >
                <Typography variant="body2" component={"div"} color="gray">
                  {video && video.snippet?.channelTitle}
                </Typography>
                <CheckCircleIcon
                  sx={{
                    color: "rgb(29, 155, 240);",
                    fontSize:"0.9rem"
                  }}
                />
                <Button variant="contained" sx={{
                  bgcolor:"#fff",
                  color:"#000",
                  borderRadius:"20px",
                  marginLeft:"0.5rem",
                  textTransform:"lowercase",
                  ":hover":{
                    bgcolor:"#fff",
                    color:"#000",
                    fontWeight:"bold"
                  }
                }}>

                  Subscribe
                </Button>
              </Box>

              <Stack direction={"row"} gap={"1.1rem"}>
<Typography variant="body2" sx={{
  color:"gray",
  fontSize:"0.9rem",
  opacity:"0.8"
}}> {video.statistics?.viewCount} views</Typography>
<Typography variant="body2" sx={{
  color:"gray",
  fontSize:"0.9rem",
  opacity:"0.8"
}}> {video.statistics?.likeCount} likes</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
