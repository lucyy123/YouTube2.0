import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ItemsType, SnippetType } from "../vite-env";
import Loader from "./Loader";

type VideosCardProps = {
  props: ItemsType;
};

const VideosCard = ({ props }: VideosCardProps) => {
  const snippets: SnippetType = props.snippet;

  if (!props) return <Loader></Loader>;

  return (
    <Card
      sx={{
        width: {xs:"100%",sm:"358px", md:"320px",  },
        backgroundColor: "rgb(16, 25, 31)",
      }}
    >
      <Link to={props.id.videoId ? `/video/${props.id.videoId}` : "/"}>
        <CardMedia
          component="img"
          height="180"
          image={
            props.snippet.thumbnails.high
              ? props.snippet.thumbnails.high.url
              : props.snippet.thumbnails.default?.url
          }
          alt={snippets?.channelTitle}
          sx={{
            width: {xs:"100%",sm:"358px", md:"320px",  }  
          }}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant="body1" color={"#fff"}>
          {props.snippet.title}
        </Typography>

        <Typography
          variant="body2"
          color="gray"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {snippets.channelTitle}
          <CheckCircleIcon
            sx={{
              textAlign: "center",
              fontSize: "0.8rem",
              margin: "auto",
              marginLeft: "0.4rem",
              color: "rgb(29, 155, 240);",
            }}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideosCard;
