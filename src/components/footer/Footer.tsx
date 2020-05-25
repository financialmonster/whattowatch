import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { useLogoLinkClick } from 'hooks/useLogoLinkClick';
import { Routes } from 'mainConstants';
import { Logo } from 'components/logo/Logo';

export const Footer: FC = () => {
    const logoLinkClickHandler = useLogoLinkClick();
    const {pathname} = useLocation();
    const isMainPage = pathname === Routes.MAIN_PAGE;

    return (
        <footer className="page-footer">
            <Logo isMainPage={isMainPage} logoLinkClickHandler={logoLinkClickHandler} isFooter />
            <div className="copyright">
                <p>© 2020 What to watch Ltd.</p>
            </div>
        </footer>
    );
}
