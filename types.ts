export type Movie = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string; // Format: YYYY-MM-DD, can be empty
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  export type MovieApiResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }