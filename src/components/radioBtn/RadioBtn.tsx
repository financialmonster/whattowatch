import React, { FC, ChangeEvent, memo } from 'react';

type TRadioBtnProps = {
    value: number;
    groupValue: string;
    disabled: boolean;
    field: {
        onChange: (e: ChangeEvent<any>) => void;
        onBlur: () => void;
    }
}

export const RadioBtn: FC<TRadioBtnProps> = memo(({ value, groupValue, disabled, field: {onChange, onBlur}}) => (
    <>
        <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={ value }
            checked={ value === +groupValue } onChange={onChange} onBlur={onBlur} disabled={ disabled }
        />
        <label className="rating__label" htmlFor={`star-${value}`}>
            {`Rating-${value}`}
        </label>
    </>
));
