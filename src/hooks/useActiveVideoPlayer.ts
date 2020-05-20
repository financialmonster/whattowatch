import { useState, useCallback, useEffect } from 'react';

import { isRefInitialized } from 'utils';

export const useActiveVideoPlayer = (isPlaying: boolean, ref: unknown, handleExitBtnClick: () => void) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(isPlaying);
    }, [isPlaying]);

    const playPauseBtnHandler = useCallback(() => {
        if(isRefInitialized(ref)) {
            if(isActive) {
                ref.current.pause();
            } else {
                ref.current.play();
            }
        }

        setIsActive((isActive) => !isActive);
    }, [isActive, ref]);

    const exitBtnClickHandler = useCallback(() => {
        if(isRefInitialized(ref)) {
            handleExitBtnClick();
            ref.current.currentTime = 0;
            
            if(isActive) {
                ref.current.pause();
            }
        }
    }, [handleExitBtnClick, ref, isActive]);

    return {
        isActive,
        playPauseBtnHandler,
        exitBtnClickHandler
    };
} 
