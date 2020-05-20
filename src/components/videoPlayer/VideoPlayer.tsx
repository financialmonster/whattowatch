import React, { FC,  memo, forwardRef } from 'react';

import { getTimeFromMins, isRefInitialized } from 'utils';
import { useVideoPlayerProgress } from 'hooks/useVideoPlayerProgress';
import { useActiveVideoPlayer } from 'hooks/useActiveVideoPlayer';

type TVideoPlayerProps = {
    src: string | undefined,
    posterImage: string | undefined,
    runTime: number | undefined,
    ref: React.RefObject<HTMLVideoElement>,
    isPlaying: boolean,
    handleExitBtnClick: () => void
}

export const VideoPlayer: FC<TVideoPlayerProps> = memo(forwardRef((props, ref) => {
    const {handleExitBtnClick, src, posterImage, runTime, isPlaying} = props;

    const progress = useVideoPlayerProgress(ref);
    const {isActive, playPauseBtnHandler, exitBtnClickHandler} =
        useActiveVideoPlayer(isPlaying, ref, handleExitBtnClick);

    const playerStyle = (isPlaying)
        ? {}
        : {display: `none`};

    const fullScreenBtnClickHandler = () => {
        if(isRefInitialized(ref)) {
            ref.current.requestFullscreen();
        }
    }

    return (
        <div className="player" style={playerStyle}>
            <video className="player__video" src={src} poster={posterImage} ref={ref}></video>
            <button type="button" className="player__exit" onClick={exitBtnClickHandler}>
                Exit
            </button>
            <div className="player__controls">
                <div className="player__controls-row">
                    <div className="player__time">
                        <progress className="player__progress" value={progress} max="100"></progress>
                        <div className="player__toggler" style={{ left: `${progress}%` }}>
                            Toggler
                        </div>
                    </div>
                    <div className="player__time-value">{getTimeFromMins(runTime)}</div>
                </div>
                <div className="player__controls-row">
                    <button type="button" className="player__play" onClick={playPauseBtnHandler}>
                        <svg viewBox={(isActive) ? `0 0 14 21` : `0 0 320.001 320.001`} width="14" height="21">
                            <use xlinkHref={(isActive) ? `#pause` : "#play"}></use>
                        </svg>
                        <span>{(isActive) ? `Pause` : `Play`}</span>
                    </button>
                    <div className="player__name">Transpotting</div>
                    <button type="button" className="player__full-screen" onClick={fullScreenBtnClickHandler}>
                        <svg viewBox="0 0 27 27" width="27" height="27">
                            <use xlinkHref="#full-screen"></use>
                        </svg>
                        <span>Full screen</span>
                    </button>
                </div>
            </div>
        </div>
    );
}));
