import { useState, useCallback, useRef } from 'react';

export const usePlayingVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(true);

    const videoRef = useRef<HTMLVideoElement>(null);

    const playBtnClickHandler = useCallback(() => {
        if(videoRef && videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
            document.body.style.overflow = `hidden`;       
        }
    }, []);

    const handleExitBtnClick = useCallback(() => {
        setIsPlaying(false);
        document.body.style.overflow = `visible`; 
    }, []);

    const onCanPlayThroughHandler = useCallback(() => {
        setIsVideoLoading(false);        
    }, []);

    return {
        videoRef,
        isPlaying,
        handleExitBtnClick,
        playBtnClickHandler,
        isVideoLoading,
        onCanPlayThroughHandler
    };
}
