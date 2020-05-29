import React, { FC, ReactElement } from 'react';
import cn from 'classnames';
import { Map } from 'immutable';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import * as authSelectors from 'domains/auth/authSelectors';
import * as promoSelectors from 'domains/promo/promoSelectors';
import { useLogoLinkClick } from 'hooks/useLogoLinkClick';
import { useSignInLinkClick } from 'hooks/useSignInLinkClick';
import { Routes } from 'mainConstants';
import { Logo } from 'components/logo/Logo';
import { useFilmsPagePush } from 'hooks/useFilmsPagePush';

type THeaderProps = {
    film?: Map<string, any>;
}

export const Header: FC<THeaderProps> = ({film}) => {
    const user = useSelector(authSelectors.getUser);
    const promo = useSelector(promoSelectors.getPromo);
    const authStatusError = useSelector(authSelectors.getAuthStatusError);
    const isAuthStatusFetching = useSelector(authSelectors.getIsAuthStatusFetching);

    let backgroundImage: string;
    let name: string;
    let posterImage: string | undefined;
    let id: number | undefined;

    if(film) {
        backgroundImage = (film as Map<string, any>).get(`background_image`);
        name = (film as Map<string, any>).get(`name`);
        posterImage = (film as Map<string, any>).get(`poster_image`);
        id = (film as Map<string, any>).get(`id`);
    } else {
        backgroundImage = (promo as Map<string, any>).get(`background_image`);
        name = (promo as Map<string, any>).get(`name`);
    }

    const {pathname} = useLocation();
    const isFilmPage = pathname.includes(`film`) && !pathname.includes(`review`);
    const isMainPage = pathname === Routes.MAIN_PAGE;
    const isReviewPage = pathname.includes(`review`);

    const logoLinkClickHandler = useLogoLinkClick();
    const {signInLinkClickHandler, isLoginPage} = useSignInLinkClick();
    const navLinkClickHandler = useFilmsPagePush(id);

    let avatar: string;

    let userBlockJSX: ReactElement = (
        <div className="user-block">
            <a className="user-block__link" onClick={signInLinkClickHandler} title="To the login page">
                Sign in
            </a>
        </div>
    );

    if(isAuthStatusFetching) {
        userBlockJSX = <div className="user-block">Authorization...</div>;
    } else if(authStatusError) {
        userBlockJSX = <div className="user-block">Authorization failed</div>;
    } else if(user) {
        avatar = (user as Map<string,any>).get(`avatar_url`);

        userBlockJSX = (
            <div className="user-block">
                <div className="user-block__avatar">
                    <img src={`https://htmlacademy-react-3.appspot.com/${avatar}`} alt="User avatar" width="63"
                        height="63"
                    />
                </div>
            </div>
        );
    }
    
    const headerClass = cn(`page-header`, {
        'user-page__head': isLoginPage,
        'movie-card__head': isFilmPage
    });

    return (
        <>
            {(!isLoginPage) &&
                <div className="movie-card__bg">
                    <img src={backgroundImage} alt={name} />
                </div>
            }
            <h1 className="visually-hidden">WTW</h1>
            <header className={headerClass}>
                <Logo isMainPage={isMainPage} logoLinkClickHandler={logoLinkClickHandler} />
                {(isReviewPage) &&
                    <nav className="breadcrumbs">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item">
                                <a className="breadcrumbs__link breadcrumbs__link--active" onClick={navLinkClickHandler}
                                    title="To the film page"
                                >
                                    {name}
                                </a>
                            </li>
                            <li className="breadcrumbs__item">
                                <a className="breadcrumbs__link">Add review</a>
                            </li>
                        </ul>
                    </nav>
                }
                {(isLoginPage) ? <h1 className="page-title  user-page__title">Sign in</h1> : userBlockJSX}
            </header>
            {(isReviewPage) &&
                <div className="movie-card__poster movie-card__poster--small">
                    <img src={posterImage} alt={name} width="218" height="327" />
                </div>
            }
        </>
    );
}
