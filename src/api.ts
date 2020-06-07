import { TUserData, TUserReview }  from 'types';

const BASE_URL = `https://htmlacademy-react-3.appspot.com/wtw`;

const api = {
    promo: {
        fetchPromo: () => fetch(`${BASE_URL}/films/promo`)
    },
    films: {
        fetchFilms: () => fetch(`${BASE_URL}/films`)
    },
    auth: {
        fetchAuth: (userData: TUserData) => fetch(`${BASE_URL}/login`, {
            method: `POST`,
			headers: {
                'Content-Type': `application/json`
			},
            body: JSON.stringify(userData),
            credentials:`include`
        }),
        fetchAuthStatus: () => fetch(`${BASE_URL}/login`, {
            method: `GET`,
			headers: {
                'Content-Type': `application/json`
			},
            credentials:`include`
        })
    },
    reviews: {
        fetchReviews: (id: number) => fetch(`${BASE_URL}/comments/${id}`),
        fetchReview: (id: number, reviewData: TUserReview) => fetch(`${BASE_URL}/comments/${id}`, {
            method: `POST`,
            headers: {
                'Content-Type': `application/json`
            },
            body: JSON.stringify({
                rating: reviewData.rating,
                comment: reviewData["review-text"]
            }),
            credentials:`include`
        })
    },
    favorites: {
        fetchFavorites: () => fetch(`${BASE_URL}/favorite`, {
            method: `GET`,
            headers: {
                'Content-Type': `application/json`
            },
            credentials: `include`
        }),
        fetchFavorite: (id: number, status: number) => fetch(`${BASE_URL}/favorite/${id}/${status}`, {
            method: `POST`,
            credentials: `include`
        })
    }
}

export default api;
