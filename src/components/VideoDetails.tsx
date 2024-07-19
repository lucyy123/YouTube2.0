import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchData, fetchSingleVideo } from "../utils/fetchingData";
import { FetchReponseType, VIdeoType } from "../vite-env";
import Loader from "./Loader";
import Videos from "./Videos";

const VideoDetails = () => {
  const { id } = useParams();
  const [relatedVideos, setRelatedVideos] = useState<FetchReponseType>();
  const [video, setVideo] = useState<VIdeoType | undefined>(undefined);

  useEffect(() => {
    if (id) {
      fetchSingleVideo(
        `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
      )
        .then((res) => {
          if (res) {
            setVideo(res);
          } else {
            throw new Error("Video Id is invalid");
          }
        })
        .catch((err) => console.log(err));

      fetchData({
        relatedToVideoId: id,
        part: "id,snippet",
        type: "video",
        maxResults: "50",
      })
        .then((res) => {
          if (res) {
            console.log("related videos:", res);
            setRelatedVideos(res);
          } else {
            throw new Error("Video Id is invalid");
          }
        })
        .catch((err) => console.log(err));
    } else {
      throw new Error("Invalid Id");
    }
  }, [id]);

  if (video == undefined) return <Loader></Loader>;

  return (
    <Box
      minHeight={"95vh"}
      sx={{
        backgroundColor: "#000",
        position:"sticky"
      }}
    >
      <Stack direction={{ sx: "column", md: "row" }}>
        <Box flex={3}>
          <Box sx={{ width: "100%", position: "sticky", top: "85px" }}>
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
                  gap: "0.5rem",
                }}
              >
                <Typography variant="body2" component={"div"} color="gray">
                  {video && video.snippet?.channelTitle}
                </Typography>
                <CheckCircleIcon
                  sx={{
                    color: "rgb(29, 155, 240);",
                    fontSize: "0.9rem",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#fff",
                    color: "#000",
                    borderRadius: "20px",
                    marginLeft: "0.5rem",
                    textTransform: "lowercase",
                    ":hover": {
                      bgcolor: "#fff",
                      color: "#000",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>

              <Stack direction={"row"} gap={"1.1rem"}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "gray",
                    fontSize: "0.9rem",
                    opacity: "0.8",
                  }}
                >
                  {" "}
                  {video.statistics &&
                    parseInt(video.statistics?.viewCount).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "gray",
                    fontSize: "0.9rem",
                    opacity: "0.8",
                  }}
                >
                  {" "}
                  {video.statistics &&
                    parseInt(video.statistics?.likeCount).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>

        </Box>

        <Box
        sx={{
          overflowY:"auto"
        }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {relatedVideos == undefined ? (
            <Loader></Loader>
          ) : (
            <Videos videos={relatedVideos!} direction="column"/>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
