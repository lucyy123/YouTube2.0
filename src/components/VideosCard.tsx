import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ItemsType, SnippetType } from "../vite-env";

type VideosCardProps = {
  props: ItemsType;
};

const VideosCard = ({ props }: VideosCardProps) => {
  const snippets: SnippetType = props.snippet;

  return (
    <Card
      sx={{
        width: {md:"300px",xs:"100%"},
        backgroundColor:"rgb(16, 25, 31)",
        // height: "310px",

      }}
    >
      <Link to={props.id.videoId ? `/video/${props.id.videoId}` : "/"}>
        <CardMedia
          component="img"
          height="170"
          image={props.snippet.thumbnails.high.url}
          alt={snippets?.channelTitle}
        />
      </Link>

      <CardContent>

        <Typography gutterBottom variant="body1" color={"#fff"}>
          {props.snippet.title}
        </Typography>

        <Typography variant="body2" color="gray" sx={{
            display:"flex",
            justifyContent:"start",
            alignItems:"center",
            fontWeight:"bold",

        }}>
          {snippets.channelTitle}
           <CheckCircleIcon sx={{
            textAlign:"center",
            fontSize:"0.8rem",
            margin:"auto",
            marginLeft:"0.4rem",
            color:"rgb(29, 155, 240);"
          }}/>
        </Typography>


    
      </CardContent>
    </Card>
  );
};

export default VideosCard;
