import React, { FC } from 'react';
import cn from 'classnames';

type TLogoProps = {
    isMainPage: boolean;
    logoLinkClickHandler: () => void;
    isFooter?: boolean;
}

export const Logo: FC<TLogoProps> = ({isMainPage, logoLinkClickHandler, isFooter}) => {
    const logoLinkStyle = (isMainPage)
        ? {}
        : {cursor: `pointer`};

    const logoLinkClass = cn(`logo__link`, {
        'logo__link--light': isFooter
    });

    return (
        <div className="logo">
            <a className={logoLinkClass} onClick={logoLinkClickHandler} style={logoLinkStyle}
                title={(isMainPage) ? `` : `To the main page`}
            >
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
            </a>
        </div>
    );
}
