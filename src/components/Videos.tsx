import { Stack } from "@mui/material";
import { FetchReponseType } from "../vite-env";
import VideosCard from "./VideosCard";


type VideosProps = {
    videos: FetchReponseType;
  };
const Videos = ({ videos }: VideosProps) => {
    
  return (
    <Stack
            direction={"row"}
            sx={{
              gap: 1,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {
              videos?.items.map((ele, idx) => <VideosCard key={idx} props={ele} />)
            }
          </Stack>
  )
}

export default Videos
