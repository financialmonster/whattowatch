export enum Routes {
    MAIN_PAGE = '/',
    LOGIN_PAGE = '/login',
    FILM_PAGE = '/film/:id',
    REVIEW_PAGE = '/film/:id/review',
    FAVORITES_PAGE = '/mylist'
}

export enum HttpStatusCodes {
    SUCCESS_STATUS_CODE = 200,
    NOT_FOUND_STATUS_CODE = 404,
    UNAUTHORIZED_STATUS_CODE = 401
}; 
