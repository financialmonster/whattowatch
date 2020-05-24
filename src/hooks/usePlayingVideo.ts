import { useState, useCallback, useRef } from 'react';

export const usePlayingVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const playBtnClickHandler = useCallback(() => {
        if(videoRef && videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);            
        }
    }, []);

    const handleExitBtnClick = useCallback(() => {
        setIsPlaying(false); 
    }, []);

    return {
        videoRef,
        isPlaying,
        handleExitBtnClick,
        playBtnClickHandler
    };
}
