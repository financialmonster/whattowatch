import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { VideoPlayer } from './VideoPlayer';

Enzyme.configure({adapter: new Adapter()});

describe(`VideoPlayer:`, () => {
    it(`the pause method should be invoked on click on the play/pause button when player is active`, () => {
        const ref = React.createRef();

        const videoPlayer = mount(
            <VideoPlayer isPlaying ref={ref} />
        );

        const pauseBtn = videoPlayer.find(`.player__play`);
        const pause = jest.fn();

        window.HTMLVideoElement.prototype.pause = pause;

        pauseBtn.simulate(`click`);

        expect(pause).toHaveBeenCalledTimes(1);
        expect(pause.mock.calls[0][0]).toEqual(void 0); 
    });

    it(`the play method should be invoked on click on the play/pause button when player is passive`, () => {
        const ref = React.createRef();

        const videoPlayer = mount(
            <VideoPlayer isPlaying={false} ref={ref} />
        );
        const playBtn = videoPlayer.find(`.player__play`);
        const play = jest.fn();

        window.HTMLVideoElement.prototype.play = play;

        playBtn.simulate(`click`);

        expect(play).toHaveBeenCalledTimes(1);
        expect(play.mock.calls[0][0]).toEqual(void 0); 
    });

    it(`the handleExitBtnClick callback and the pause method should both be invoked on click on the exit button when
        player is active`,
    () => {
        const ref = React.createRef();
        const handleExitBtnClick = jest.fn();

        const videoPlayer = mount(
            <VideoPlayer isPlaying ref={ref} handleExitBtnClick={handleExitBtnClick} />
        );
        const exitBtn = videoPlayer.find(`.player__exit`);
        const pause = jest.fn();

        window.HTMLVideoElement.prototype.pause = pause;

        exitBtn.simulate(`click`);

        expect(handleExitBtnClick).toHaveBeenCalledTimes(1);
        expect(handleExitBtnClick.mock.calls[0][0]).toEqual(void 0); 

        expect(pause).toHaveBeenCalledTimes(1);
        expect(pause.mock.calls[0][0]).toEqual(void 0); 
    });

    it(`the requestFullscreen method should be invoked on click on the fullScreen button`,
    () => {
        const ref = React.createRef();

        const videoPlayer = mount(
            <VideoPlayer isPlaying ref={ref} />
        );
        const fullScreenBtn = videoPlayer.find(`.player__full-screen`);
        const requestFullscreen = jest.fn();

        window.HTMLVideoElement.prototype.requestFullscreen = requestFullscreen;

        fullScreenBtn.simulate(`click`);

        expect(requestFullscreen).toHaveBeenCalledTimes(1);
        expect(requestFullscreen.mock.calls[0][0]).toEqual(void 0); 
    });
});
