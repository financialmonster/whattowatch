import React, { FC } from 'react';

import { useLogoLinkClick } from 'hooks/useLogoLinkClick';

export const Footer: FC = () => {
    const logoLinkClickHandler = useLogoLinkClick();

    return (
        <footer className="page-footer">
            <div className="logo">
                <a className="logo__link logo__link--light" onClick={logoLinkClickHandler}>
                    <span className="logo__letter logo__letter--1">W</span>
                    <span className="logo__letter logo__letter--2">T</span>
                    <span className="logo__letter logo__letter--3">W</span>
                </a>
            </div>
            <div className="copyright">
                <p>© 2020 What to watch Ltd.</p>
            </div>
        </footer>
    );
}
