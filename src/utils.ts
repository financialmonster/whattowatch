import { MutableRefObject } from 'react';
import moment from 'moment';
import { List, Map, Set } from 'immutable';

export const getTimeFromMins = (mins: number | undefined): string => {
    const h = (mins) ? mins / 60 | 0 : 0;
    const m = (mins) ? mins % 60 | 0 : 0;

    return moment.utc().hours(h).minutes(m).seconds(0).format("h:mm:ss");
}

export const isRefInitialized = (ref: unknown): ref is MutableRefObject<HTMLVideoElement> => {
    return (ref as MutableRefObject<HTMLVideoElement>).current !== null;
}

export const isFilms = (films: unknown): films is List<Map<string, any>> => {
    return (films as List<Map<string, any>>).size !== 0;
}

export const isPromo = (promo: unknown): promo is Map<string, any> => {
    return (promo as Map<string, any>).size !== 0;
}

export const isReviews = (reviews: unknown): reviews is List<Map<string, any>> => {
    return (reviews as List<Map<string, any>>).size !== 0;
}

export const isGenres = (genres: Set<any> | undefined): genres is Set<string> => {
    return genres !== void 0;
}

export const mapMonthToNubmer = (number: number) => {
    const MONTHS: string[] = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`,
        `October`, `November`, `December`];

    return MONTHS[number];
}

export const mapRatingToMark = (rating: number): string => {
    switch(Math.floor(rating)) {
        case 10:
            return `Awesome`;

        case 9:
        case 8:
            return `Very good`;

        case 7:
        case 6:
        case 5:
            return `Good`;

        case 4:
        case 3:
            return `Normal`;

        case 2:
        case 1:
        case 0:
            return `Bad`;
    }

    return `User's mark`;
}
