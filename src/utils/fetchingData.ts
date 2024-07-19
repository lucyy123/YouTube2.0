import axios from "axios";
import { FetchReponseType, VIdeoType } from "../vite-env";

type FetchDataType = {

    q?: string,
    part?: string,
    regionCode?: string
    maxResults?: string
    order?: string
    id?: string
    relatedToVideoId?:string;
    type?:string;

}




export const fetchData = async (params: FetchDataType) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params,
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };
        const response = await axios(options);

        const data: FetchReponseType = response.data
        return data
    } catch (error) {
        console.error(error);
    }



}


export const fetchSingleVideo = async (url: string):Promise<VIdeoType | undefined>=> {
    const options = {
        method: 'GET',
        url,
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
      const response = await axios(options);


 const video:VIdeoType=response.data.items[0]
 return video




    } catch (error) {
        console.error(error);
    }


}



