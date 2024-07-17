import axios from "axios";
import { FetchReponseType } from "../vite-env";






export const fetchData = async (searchVal: string)=> {



    try {



        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: searchVal,
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: '50',
                order: 'date'
            },
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };
        const response = await axios(options);

        const data:FetchReponseType = response.data
        return data
    } catch (error) {
        console.error(error);
    }



}