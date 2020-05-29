import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import eventually from "wix-eventually";

import { ReviewForm } from './ReviewForm';

Enzyme.configure({adapter: new Adapter()});

describe(`ReviewForm:`, () => {
    it(`default action of the reviewForm after submission should be prevented`, async () => {
        const preventDefault = jest.fn();

        const reviewForm = mount(
            <ReviewForm reviewFormSubmitHandler={() => {}} />
        );

        const form = reviewForm.find(`.add-review__form`).at(0);

        form.simulate(`submit`, {
            preventDefault
        });

        await eventually(() => {
            expect(preventDefault).toHaveBeenCalledTimes(1);
            expect(preventDefault.mock.calls[0][0]).toEqual(void 0);
        });
    });

    it(`reviewFormSubmitHandler callback should be invoked with right values on the submission of the
        reviewForm`,
    async () => {
        jest.setTimeout(15000);
        const reviewFormSubmitHandler = jest.fn();

        const reviewForm = mount(
            <ReviewForm reviewFormSubmitHandler={reviewFormSubmitHandler} />
        );

        const form = reviewForm.find(`.add-review__form`).at(0);
        const ratingRadio = reviewForm.find(`.rating__input`).at(0);
        const reviewTextField = reviewForm.find(`.add-review__textarea`).at(0);

        ratingRadio.simulate(`change`, { target: {value: 4, name: `rating`}});
        reviewTextField.simulate(`change`, { target: {
            value: 'exampleTestexampleTestexampleTestexampleTestexampleTest', name: `review-text`
        }});

        form.simulate(`submit`);

        await eventually(() => {            
            expect(reviewFormSubmitHandler).toHaveBeenCalledTimes(1);
            expect(reviewFormSubmitHandler.mock.calls[0][0]).toEqual({
                'rating': 4,
                'review-text': `exampleTestexampleTestexampleTestexampleTestexampleTest`
            });
        });
    });

    it(`reviewFormSubmitHandler callback should not be invoked on the submission of the
        reviewForm if the value of rating field is not set`,
    async () => {
        jest.setTimeout(15000);
        const reviewFormSubmitHandler = jest.fn();

        const reviewForm = mount(
            <ReviewForm reviewFormSubmitHandler={reviewFormSubmitHandler} />
        );

        const form = reviewForm.find(`.add-review__form`).at(0);
        const reviewTextField = reviewForm.find(`.add-review__textarea`).at(0);

        reviewTextField.simulate(`change`, { target: {
            value: 'exampleTestexampleTestexampleTestexampleTestexampleTest', name: `review-text`
        }});

        form.simulate(`submit`);

        await eventually(() => {            
            expect(reviewFormSubmitHandler).toHaveBeenCalledTimes(0);
        });
    });

     it(`reviewFormSubmitHandler callback should not be invoked on the submission of the
        reviewForm if the value of review-text field is not valid`,
    async () => {
        jest.setTimeout(15000);
        const reviewFormSubmitHandler = jest.fn();

        const reviewForm = mount(
            <ReviewForm reviewFormSubmitHandler={reviewFormSubmitHandler} />
        );

        const form = reviewForm.find(`.add-review__form`).at(0);
        const ratingRadio = reviewForm.find(`.rating__input`).at(0);
        const reviewTextField = reviewForm.find(`.add-review__textarea`).at(0);

        ratingRadio.simulate(`change`, { target: {value: 4, name: `rating`}});
        reviewTextField.simulate(`change`, { target: {
            value: 'test', name: `review-text`
        }});

        form.simulate(`submit`);

        await eventually(() => {            
            expect(reviewFormSubmitHandler).toHaveBeenCalledTimes(0);
        });
    });
});
