import { MutableRefObject } from 'react';
import moment from 'moment';

export const getTimeFromMins = (mins: number | undefined): string => {
    const h = (mins) ? mins / 60 | 0 : 0;
    const m = (mins) ? mins % 60 | 0 : 0;
    return moment.utc().hours(h).minutes(m).seconds(0).format("h:mm:ss");
}

export const isRefInitialized = (ref: unknown): ref is MutableRefObject<HTMLVideoElement> => {
    return (ref as MutableRefObject<HTMLVideoElement>).current !== null;
}
