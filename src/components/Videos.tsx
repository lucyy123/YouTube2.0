import { Stack } from "@mui/material";
import { FetchReponseType } from "../vite-env";
import Loader from "./Loader";
import VideosCard from "./VideosCard";

type VideosProps = {
  videos: FetchReponseType;
  direction?:"column"| "row";
};
const Videos = ({ videos,direction="row" }: VideosProps) => {

  if(videos.items.length==0) return <Loader></Loader>
  return (
    <Stack
      direction={direction}
      sx={{
        gap: 1,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {videos?.items.map((ele, idx) => (
        <VideosCard key={idx} props={ele} />
      ))}
    </Stack>
  );
};

export default Videos;
