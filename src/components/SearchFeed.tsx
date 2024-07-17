import { useEffect, useState } from 'react';
import { FetchReponseType } from '../vite-env';
import { fetchData } from '../utils/fetchingData';
import { useParams, } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';

const SearchFeed = () => {
    const {query} = useParams()
    console.log('query:', query)
    
  const [dataArr, setdataArr] = useState<FetchReponseType>();

  useEffect(()=>{
    if(query){

        fetchData(query)
        .then((res) => {
            console.log('res:', res)
            setdataArr(res)
        })
        .catch((err) => console.log(err));
    }else{
        throw new Error("Please search first")
    }

  },[query])
  return (
    
        <Box
          sx={{
            maxHeight: "92vh",
            overflowY: "auto",
            flex:2,
            backgroundColor:"#000",
         
          }}
        >
            <Typography variant='h4' color={"white"} mb={2} sx={{
                marginInline:"0.5rem"
            }} fontWeight={"bold"}>

                Search results for <span style={{
                    color: "#F31503"
                }}>{query}</span>
            </Typography>

        <Videos videos={dataArr!} />

        
        </Box>
  )}
  
export default SearchFeed
