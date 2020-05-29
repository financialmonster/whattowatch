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

export type TFilms = TFilm[];

export type TUserData = {
    password: string;
    email: string;
}

export type TUserReview = {
    'rating': string;
    'review-text': string;
}

export type TUser = {
    id: number;
    email: string;
    name: string;
    avatar_url: string;
}

export type TReview = {
    comment: string;
    date: string;
    id: number;
    rating: number;
    user: {
        id: number;
        name: string;
    }
}

export type TReviews = TReview[];

export type TState = ReturnType<typeof rootReducer>;
