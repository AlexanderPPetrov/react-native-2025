import { MovieApiResponse } from "@/types"
import { axiosClient } from "./axios-client"
export async function searchMovie(query: string) {
    return await axiosClient.get<MovieApiResponse>('search/movie' , {
        params: {
            query
        }
    })
    
}