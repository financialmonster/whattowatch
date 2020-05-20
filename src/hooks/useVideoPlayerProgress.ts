import { useEffect, useState } from 'react';

import { isRefInitialized } from 'utils';

let interval: number;

export const useVideoPlayerProgress = (ref: unknown) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if(isRefInitialized(ref) && ref) {
            interval = setInterval(() => {
                setProgress(ref.current.currentTime / ref.current.duration * 100);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [ref]);
    
    return isFinite(progress)
        ? progress
        : 0;
}
