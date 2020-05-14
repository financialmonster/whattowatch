import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ConnectedRouter as Router } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import store from '../../init/store';
import Header from './Header';
import { Routes } from '../../constants';

Enzyme.configure({adapter: new Adapter()});

describe(`header:`, () => {
    it(`the push method should not be invoked on click on the logo link when user is on the main page`, () => {
        const history = createMemoryHistory({ initialEntries: [`/hello`], initialIndex: 0 });

        const header = mount(
            <Provider store={store}> 
                <Router history={history}>
                    <Header />
                </Router>
            </Provider>
        );

        const logoLink = header.find(`.logo__link`);

        logoLink.simulate(`click`);

        expect(history.location.pathname).toBe(Routes.MAIN_PAGE);
    });

    // it(`the push method should not be invoked on click on the logo link when user is on the main page`, () => {
    //     const header = shallow(<Header />);
    //     const logoLink = header.find(`.logo__link`);

    //     jest.mock('react-router-dom', () => ({
    //         useLocation: () => ({
    //             pathname: `/`
    //         })
    //     }));

    //     const push = jest.fn();

    //     jest.mock('connected-react-router', () => ({push}));

    //     logoLink.simulate(`click`);

    //     expect(push).not.toHaveBeenCalled();
    // });
});
