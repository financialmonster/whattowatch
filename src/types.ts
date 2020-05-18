import { rootReducer } from 'init/rootReducer';

export type TFilm = {
    background_color: string;
    background_image: string;
    description: string;
    director: string;
    genre: string;
    id: number;
    is_favorite: boolean;
    name: string;
    poster_image: string;
    preview_image: string;
    preview_video_link: string;
    rating: number;
    released: number;
    run_time: number;
    scores_count: number;
    starring: string[];
    video_link: string;
}

export type TState = ReturnType<typeof rootReducer>;
