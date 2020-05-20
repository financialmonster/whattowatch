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
    return (films as List<Map<string, any>>).map !== void 0;
}

export const isPromo = (promo: unknown): promo is Map<string, any> => {
    return (promo as Map<string, any>).get !== void 0;
}

export const isGenres = (genres: unknown): genres is Set<string> => {
    return (genres as Set<string>).map !== void 0;
}
