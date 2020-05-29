import React, { FC, Children, memo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { reviewFormShape } from 'formShapes';
import { RadioBtn } from 'components/radioBtn/RadioBtn';
import { TUserReview } from 'types';

type TReviewFormProps = {
    reviewFormSubmitHandler: (userReview: TUserReview) => void;
    isReviewFetching: boolean;
}

export const ReviewForm: FC<TReviewFormProps> = memo(({ isReviewFetching, reviewFormSubmitHandler }) => {
    return (
        <Formik initialValues={reviewFormShape.initialValues} onSubmit={reviewFormSubmitHandler}
            validationSchema={reviewFormShape.schema}
        >
            {({ values, isValid }) => (
                <Form className="add-review__form">
                    <ErrorMessage name="rating">
                        {(message) => <div className="review__message">{message}</div>}
                    </ErrorMessage>
                    <ErrorMessage name="review-text">
                        {(message) => <div className="review__message">{message}</div>}
                    </ErrorMessage>
                    <div className="rating">
                        <div className="rating__stars">
                            {
                                Children.toArray(new Array(5).fill(``).map(( _, ind ) => (
                                    <Field component={RadioBtn} value={5 - ind} groupValue={values.rating}
                                        disabled={isReviewFetching}
                                    />
                                )))
                            }
                        </div>
                    </div>
                    <div className="add-review__text">
                        <Field className="add-review__textarea" as="textarea" name="review-text" id="review-text"
                            placeholder="Review text" disabled={ isReviewFetching }
                        />
                        <div className="add-review__submit">
                            <button className="add-review__btn" type="submit" title="Post"
                                disabled={ !isValid || isReviewFetching }
                            >
                                Post
                        </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
});
