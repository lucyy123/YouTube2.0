import { CircularProgress, Container } from "@mui/material"


const Loader = () => {
  return (
    <Container sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }} >
      <CircularProgress  sx={{
        color:"red",
        fontSize:"4rem"
      }} />
    </Container>
  )
}

export default Loader
