import { TUserData }  from 'types';

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
        fetchReviews: (id: number) => fetch(`${BASE_URL}/comments/${id}`)
    }
}

export default api;
