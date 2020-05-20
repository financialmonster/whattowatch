const BASE_URL = `https://htmlacademy-react-3.appspot.com/wtw`;

const api = {
    promo: {
        fetchPromo: () => fetch(`${BASE_URL}/films/promo`)
    },
    films: {
        fetchFilms: () => fetch(`${BASE_URL}/films`)
    }
}

export default api;
